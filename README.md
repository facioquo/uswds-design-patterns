# Design pattern idea book for USWDS | [uswds.facioquo.com](https://uswds.facioquo.com)

[![website screenshot](/src/assets/images/social-card.png)](https://uswds.facioquo.com)

An Angular framework website demonstrating design patterns for [U.S. Web Design System](https://designsystem.digital.gov) (USWDS).  Each pattern is a separate site page with its own isolated HTML, SASS stylesheet, and TS typescript files, to make implementations easy to see in an unabstracted way.  Links to the GitHub code are in the descriptions at the bottom of each pattern page.

All design patterns are listed on the [uswds.facioquo.com](https://uswds.facioquo.com) home page.

**Don't see a good design pattern?**  [Submit a request](https://github.com/facioquo/uswds-design-patterns/issues/new/choose) or [contribute](https://github.com/facioquo/.github/blob/main/CONTRIBUTING.md) some code.

## Getting started with local development

```bash
# install packages and 
# start the local site
npm install
npm start
```

## We use base stylesheets

Since our design pattern pages are isolated and based on default USWDS styles, we use base stylesheets: `SASS/uswds-styles.scss` is an out of the box USWDS base for design pattern pages, and the primary SASS entry point.  `SASS/_site.scss` and the base `.site` family of styles are for our regular dark themed site pages and components.
