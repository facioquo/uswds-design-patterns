declare module "@uswds/uswds/js/*" {
  export interface UswdsBehavior {
    on(target?: ParentNode | string): void;
    off(target?: ParentNode | string): void;
  }

  const uswdsBehavior: UswdsBehavior;
  export default uswdsBehavior;
}
