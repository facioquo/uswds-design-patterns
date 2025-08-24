// Global typings for USWDS JS behavior-based components
// Single entry point to cover imports like: @uswds/uswds/js/usa-modal

declare module "@uswds/uswds/js/*" {
  export interface UswdsBehavior {
    on: (target?: HTMLElement | string) => void;
    off: (target?: HTMLElement | string) => void;
    add?: (target?: HTMLElement | string) => void;
    remove?: (target?: HTMLElement | string) => void;
    init?: (root?: HTMLElement) => void;
    teardown?: (root?: HTMLElement) => void;
    // Common optional extras exposed by some components
    toggleModal?: (evt?: Event) => void;
    focusTrap?: unknown;
    [key: string]: unknown;
  }

  const uswdsBehavior: UswdsBehavior;
  export default uswdsBehavior;
}
