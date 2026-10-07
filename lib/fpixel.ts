export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_META_PIXEL_ID";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: (...args: any[]) => void;
  }
}

/**
 * Standard PageView event
 */
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

/**
 * Generic standard or custom event tracker
 */
export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, options);
  }
};

/**
 * ViewContent event
 * Triggered on key landing or content pages (e.g., Pricing, Features)
 */
export const trackViewContent = (params: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "ViewContent", params);
  }
};

/**
 * CompleteRegistration event
 * Triggered after user successfully completes registration/signup
 */
export const trackCompleteRegistration = (params: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "CompleteRegistration", params);
  }
};

/**
 * Contact event
 * Triggered when a user successfully submits a contact or demo request form
 */
export const trackContact = (params: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact", params);
  }
};
