# Design patterns using the U.S. Web Design System

A basic Angular website for demonstrating isolated design patterns and experimentation with [U.S. Web Design System](https://designsystem.digital.gov) (USWDS) components.  Each pattern is a separate Angular component with it's own SASS stylesheet and page route.  All design patterns are enumerated on the home page.

## Getting started with this Angular site

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

```bash
# install packages and 
# start the development server
npm install
npm run start
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How we initially installed the USWDS v3.4.1 package

1. Create a new Angular 16 application with `ng new`
2. Install USWDS into the application with `npm install --save uswds@3.4.1`
3. Add the USWDS assets in `angular.json` with `glob` pattern, to copy static fonts and images
4. Add the USWDS `includePaths` for referencing the package SASS sources
5. Add the USWDS custom setting, reference, and customized SCSS files to the entry `SASS/styles.scss` file, then reference it in the `angular.json` `styles` section of `angular.json`
6. Add the minified USWDS JavaScript path to the `angular.json` file `scripts` section
7. In any utilized USWDS template HTML, update static file paths, if different
