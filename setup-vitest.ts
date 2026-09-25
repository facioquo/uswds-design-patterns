// JSDOM does not implement scrolling.
Object.defineProperty(window, "scrollTo", {
  value: () => void 0,
  writable: true
});

// Provide browser APIs used by responsive components.
class ResizeObserverStub {
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
g["ResizeObserver"] ??= ResizeObserverStub;

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
