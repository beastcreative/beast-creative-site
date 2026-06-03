import { PHONE_DISPLAY, smsHref, whatsappHref } from "@/lib/contact";

interface InstantContactProps {
  /** Pre-filled message body for both SMS and WhatsApp. */
  message?: string;
  /** Extra classes on the wrapper. */
  className?: string;
}

/**
 * Primary instant-contact actions: click-to-text (SMS) + WhatsApp.
 * Both deep-link to the business number with a pre-filled message.
 * Server-rendered (plain anchors) so AI crawlers see the links.
 */
export default function InstantContact({ message, className = "" }: InstantContactProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a href={smsHref(message)} className="btn-primary" aria-label={`Text us at ${PHONE_DISPLAY}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[18px] h-[18px]" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a8.5 8.5 0 0 1-12.3 7.6L3 21l1.4-5.7A8.5 8.5 0 1 1 21 12Z" />
        </svg>
        Text Us
      </a>
      <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" aria-label="Message us on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.582 0 11.94-5.359 11.944-11.945a11.86 11.86 0 0 0-3.48-8.4" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
