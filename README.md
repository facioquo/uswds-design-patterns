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
2. Install USWDS into the application with `npm install --save uswds@latest`
3. Add the USWDS assets in `angular.json` with `glob` patter, to copy static fonts and images
4. Add the USWDS `includePaths` for referencing the package SASS entry point
5. Add the USWDS custom setting, reference, and customized SCSS files in the entry `SASS/styles.scss` file, then reference it in the `angular.json` `styles` section
6. Add the USWDS JavaScript path to the `angular.json` file `scripts` section
7. Update icon paths in standard USWDS HTML, if different path

Ref: <https://designsystem.digital.gov/documentation/developers/#installation-2>
