# Learning USWDS

This is just a raw HTML site, used to experiment with USWDS components.  Nothing more.

## Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How to install USWDS into an Angular 16 application

1. Create a new Angular 16 application
2. Install USWDS into the application
3. Add the USWDS assets to the application

- glob in `angular.json` to copy static fonts and images

4. Add the USWDS styles to the application

- add `includePaths` to angular.json
- add USWDS settings, uswds paths, and uswds customizations template references in `styles.scss` SASS entry point file; confirm it's referenced okay in `angular.json`

5. Add the USWDS scripts to the application

- add `scripts` to angular.json

8. Update icon paths in standard USWDS HTML, if different path
9. Reference USWDS components in application .ts component files to get JS to run????

- TO DO: Ref: <https://designsystem.digital.gov/documentation/developers/#installation-2>
