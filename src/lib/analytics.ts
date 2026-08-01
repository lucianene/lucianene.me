export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-DVB4B85GN1";

export const isGaEnabled = GA_MEASUREMENT_ID.length > 0;
