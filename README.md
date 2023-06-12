# Essential design patterns | U.S. Web Design System

A basic Angular website demonstrating design patterns and experimentation with [U.S. Web Design System](https://designsystem.digital.gov) (USWDS).  Each pattern is a separate site page with its own isolated stylesheet and typescript file, to make it easy to see its implementation.  All design patterns are listed on the [uswds.facioquo.com](https://uswds.facioquo.com) home page.

## Getting started with this Angular site

```bash
# install packages and 
# start the local site
npm install
npm start
```

## We use two base stylesheets

Since our design pattern pages are isolated and
 based on default USWDS styles, we use two base stylesheets:

1. `SASS/uswds-styles.scss` is an out of the box USWDS styles base for design pattern pages.
2. `SASS/site-styles.scss` is the common dark theme for our regular site pages and the shared `usa-banner` and `usa-identifier` components.

For typical sites, you would only use one base stylesheet.

## Contributor notes

- Use `href` instead of `routerLink` in `a` references between site and design pattern pages.  This allows the unique page styles to reset.
- See [our first Pull Request](https://github.com/facioquo/uswds-design-patterns/pull/1) to learn how we installed the USWDS package.
