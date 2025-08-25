// Global Jest setup for Angular using jest-preset-angular
import { setupZoneTestEnv } from "jest-preset-angular/setup-env/zone";

// JSDOM/polyfills that are often missing in tests
// window.scrollTo is not implemented in JSDOM
Object.defineProperty(window, "scrollTo", {
  value: () => void 0,
  writable: true,
});

// ResizeObserver is used by some components/libraries; provide a lightweight stub
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(global as any).ResizeObserver = (global as any).ResizeObserver || ResizeObserver;

// TextEncoder/TextDecoder polyfills for environments where they're not present
import { TextEncoder, TextDecoder } from "util";
if (!(global as any).TextEncoder) {
  (global as any).TextEncoder = TextEncoder;
}
if (!(global as any).TextDecoder) {
  (global as any).TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
}

// Initialize Angular testing environment via preset helper
setupZoneTestEnv({
  teardown: { destroyAfterEach: false, rethrowErrors: true },
});

// matchMedia stub for components using media queries in tests
if (!("matchMedia" in window)) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {}, // deprecated
      removeListener: () => {}, // deprecated
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}
