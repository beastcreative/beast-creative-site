/**
 * Central site config. Booking URL lives here so swapping the calendar link
 * (or moving to per-vertical "Growth Diagnostic" schedules) is a one-line change
 * instead of editing every CTA across the site.
 *
 * TODO(John): replace with the dedicated "Growth Diagnostic" appointment
 * schedule link(s) once created in Google Calendar. Optionally split per vertical.
 */
export const BOOKING_URL = "https://calendar.app.google/9q1mcYgEdXNyjK8G6";

// If/when vertical-specific schedules exist, point these at them and update the
// landing pages. For now they all fall back to the single link above.
export const BOOKING_URL_ECOMMERCE = BOOKING_URL;
export const BOOKING_URL_B2B = BOOKING_URL;
