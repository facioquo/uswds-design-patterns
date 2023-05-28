# Design patterns using the U.S. Web Design System

A basic Angular website for demonstrating isolated design patterns and experimentation with [U.S. Web Design System](https://designsystem.digital.gov) (USWDS) components.  Each pattern is a separate Angular component with it's own SASS stylesheet and page route.  All design patterns are enumerated on the home page.

## Getting started with this Angular site

```bash
# install packages and 
# start the local site
npm install
npm start
```

## How we initially installed the USWDS v3.4.1 package

1. Create a new Angular 16 application with `ng new`
2. Install USWDS into the application with `npm install --save uswds@3.4.1`
3. Add the USWDS assets in `angular.json` with `glob` pattern, to copy static fonts and images
4. Add the USWDS `includePaths` for referencing the package SASS sources
5. Add the USWDS custom setting, reference, and customized SCSS files to the entry `SASS/styles.scss` file, then reference it in the `angular.json` `styles` section of `angular.json`
6. Add the minified USWDS JavaScript path to the `angular.json` file `scripts` section
7. In any utilized USWDS template HTML, update static file paths, if different

## We use two base stylesheets

Since our design pattern pages are isolated and
 based on default USWDS styles, we use two base stylesheets:

1. `SASS/uswds-styles.scss` is an out of the box USWDS styles base for design pattern pages.
2. `SASS/site-styles.scss` is the common dark theme for our regular site pages and the shared `usa-banner` and `usa-identifier` components.

For typical sites, you would only use one base stylesheet.
