/**
 * Central site config. Booking URL lives here so swapping the calendar link
 * (or moving to per-vertical "Growth Diagnostic" schedules) is a one-line change
 * instead of editing every CTA across the site.
 *
 * Dedicated "Beast Growth Assessment" 30-min appointment schedule (Google
 * Calendar). Also stored as BOOKING_URL in the Apps Script properties + used by
 * the API fallback. Optionally split per vertical later.
 */
export const BOOKING_URL = "https://calendar.app.google/PegvMAhP72Gt2YqZ7";

// If/when vertical-specific schedules exist, point these at them and update the
// landing pages. For now they all fall back to the single link above.
export const BOOKING_URL_ECOMMERCE = BOOKING_URL;
export const BOOKING_URL_B2B = BOOKING_URL;

/**
 * The branded Growth Assessment intake route. After it's tested + approved,
 * the "Book a Growth Diagnostic" CTAs point here (qualification gate) instead
 * of straight at the raw calendar link.
 */
export const ASSESSMENT_URL = "/growth-assessment";

