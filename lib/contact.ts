// Single source of truth for the business contact number and instant-message deep links.

/** E.164 format, for the sms: protocol. */
export const PHONE_E164 = "+12103509560";
/** Digits only with country code, for wa.me links. */
export const PHONE_WA = "12103509560";
/** Human-readable display format. */
export const PHONE_DISPLAY = "(210) 350-9560";

/** Default pre-filled message used by the Text Us / WhatsApp buttons. */
export const DEFAULT_MESSAGE =
  "Hi Beast, I'd like to talk about my brand's search visibility.";

/**
 * Click-to-text link. The "?&body=" form is the cross-platform spelling
 * that pre-fills the message on both iOS and Android.
 */
export function smsHref(message: string = DEFAULT_MESSAGE): string {
  return `sms:${PHONE_E164}?&body=${encodeURIComponent(message)}`;
}

/** WhatsApp click-to-chat link with a pre-filled message. */
export function whatsappHref(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`;
}
