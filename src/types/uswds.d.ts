declare module "@uswds/uswds/js/*" {
  export interface UswdsBehavior {
    /* eslint-disable no-unused-vars -- Codacy's ESLint v8 flags ambient parameter names. */
    on(target?: ParentNode | string): void;
    off(target?: ParentNode | string): void;
    /* eslint-enable no-unused-vars */
  }

  const uswdsBehavior: UswdsBehavior;
  export default uswdsBehavior;
}
