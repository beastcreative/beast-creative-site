// shot.mjs — zero-dependency headless-Chrome screenshot harness (Chrome DevTools Protocol).
// Part of the Signature Build Workflow (~/.claude/SIGNATURE_WORKFLOW.md). Replaces fable-25's Puppeteer shot.js.
// Uses our known-good CDP method (Emulation.setDeviceMetricsOverride) so mobile is a TRUE 375px viewport,
// not the ~500px a plain headless window clamps to. Node 24+ (built-in global WebSocket/fetch), Chrome installed.
//
// Usage:
//   node tools/shot.mjs <url> <outPath> [WxH=1440x900] [waitMs=3500] [scrollY=0] [desktop|mobile]
// Example (mobile, mid-scroll):
//   node tools/shot.mjs http://localhost:3000/ shot.png 375x812 3500 800 mobile
// Emits one line of JSON: { out, viewport, mobile, docHeight, innerWidth, scrollWidth, overflow, errors }
// A non-empty `errors` array = console errors / uncaught exceptions on the page → the pass fails.

import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [, , url, outPath = 'shot.png', viewport = '1440x900', waitMsArg = '3500', scrollYArg = '0', mode = 'desktop'] = process.argv;
if (!url) { console.error('usage: node tools/shot.mjs <url> <out> [WxH] [waitMs] [scrollY] [desktop|mobile]'); process.exit(2); }
const [w, h] = viewport.split('x').map(Number);
const waitMs = Number(waitMsArg);
const scrollY = Number(scrollYArg);
const mobile = mode === 'mobile';

const CHROME = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9200 + (process.pid % 350);
const profile = mkdtempSync(join(tmpdir(), 'fable-shot-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function cdp(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let id = 0;
    const pending = new Map();
    const handlers = new Set();
    ws.addEventListener('open', () => resolve(api));
    ws.addEventListener('error', (e) => reject(new Error('ws error: ' + (e.message || 'unknown'))));
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id); pending.delete(msg.id);
        msg.error ? rej(new Error(msg.error.message)) : res(msg.result);
      } else if (msg.method) { for (const hnd of handlers) hnd(msg); }
    });
    const api = {
      send: (method, params = {}) => new Promise((res, rej) => { const _id = ++id; pending.set(_id, { res, rej }); ws.send(JSON.stringify({ id: _id, method, params })); }),
      on: (hnd) => handlers.add(hnd),
      close: () => ws.close(),
    };
  });
}

async function pageTarget() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const t = list.find((x) => x.type === 'page' && x.webSocketDebuggerUrl);
      if (t) return t.webSocketDebuggerUrl;
    } catch { /* not up yet */ }
    await sleep(200);
  }
  throw new Error('Chrome did not expose a page target');
}

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--hide-scrollbars', '--force-color-profile=srgb', `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore' });

const errors = [];
let exitCode = 0;
try {
  const client = await cdp(await pageTarget());
  client.on((m) => {
    if (m.method === 'Runtime.exceptionThrown') {
      errors.push('exception: ' + (m.params?.exceptionDetails?.exception?.description || m.params?.exceptionDetails?.text || 'unknown'));
    } else if (m.method === 'Runtime.consoleAPICalled' && m.params?.type === 'error') {
      errors.push('console.error: ' + (m.params.args || []).map((a) => a.value ?? a.description ?? '').join(' '));
    } else if (m.method === 'Log.entryAdded' && m.params?.entry?.level === 'error') {
      errors.push('log: ' + m.params.entry.text);
    }
  });
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Log.enable');
  await client.send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: mobile ? 2 : 1, mobile });

  const loaded = new Promise((res) => { client.on((m) => { if (m.method === 'Page.loadEventFired') res(); }); });
  await client.send('Page.navigate', { url });
  await Promise.race([loaded, sleep(15000)]);
  await sleep(waitMs);
  if (scrollY) { await client.send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` }); await sleep(600); }

  const metrics = await client.send('Runtime.evaluate', {
    expression: 'JSON.stringify({dh: document.documentElement.scrollHeight, sw: document.documentElement.scrollWidth, iw: window.innerWidth})',
    returnByValue: true,
  });
  const { dh, sw, iw } = JSON.parse(metrics.result.value);

  const shot = await client.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
  client.close();

  console.log(JSON.stringify({ out: outPath, viewport, mobile, docHeight: dh, innerWidth: iw, scrollWidth: sw, overflow: sw > iw + 1, errors }));
} catch (err) {
  exitCode = 1;
  console.log(JSON.stringify({ out: outPath, viewport, mobile, error: String(err && err.message || err), errors }));
} finally {
  chrome.kill('SIGKILL');
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* ignore */ }
  process.exit(exitCode);
}
