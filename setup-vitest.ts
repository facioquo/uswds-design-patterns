import "@analogjs/vitest-angular/setup-zone";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

// window.scrollTo is not implemented in JSDOM
Object.defineProperty(window, "scrollTo", {
  value: () => void 0,
  writable: true
});

// ResizeObserver stub for components/libraries that use it
class ResizeObserver {
  observe(): void {
    return;
  }
  unobserve(): void {
    return;
  }
  disconnect(): void {
    return;
  }
}
const g = globalThis as Record<string, unknown>;
g["ResizeObserver"] ??= ResizeObserver;

// matchMedia stub for components using media queries in tests
if (!("matchMedia" in window)) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: (): void => {
        return;
      },
      removeListener: (): void => {
        return;
      },
      addEventListener: (): void => {
        return;
      },
      removeEventListener: (): void => {
        return;
      },
      dispatchEvent: () => false
    })
  });
}

// Initialize Angular testing environment
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
  teardown: { destroyAfterEach: true, rethrowErrors: true }
});
