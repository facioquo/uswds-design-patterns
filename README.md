# Idea book: design patterns for U.S. Web Design System (USWDS) sites

[uswds.facioquo.com](https://uswds.facioquo.com)

[![website screenshot](/src/assets/images/social-card.png?v=YYYY.MM.DD)](https://uswds.facioquo.com)

A website demonstrating design patterns for [U.S. Web Design System](https://designsystem.digital.gov) (USWDS).  Each pattern is a separate site page with its own isolated HTML, SASS stylesheet, and TS typescript files, to make their implementation easy to see and reuse.

While this site is built with the Angular framework, the source code is abstracted in a way that it is easily transposed to any other web development framework.  Links to the GitHub code folder for each design pattern are at the bottom of each pattern page.

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

Since our design pattern pages are based on default USWDS styles, we use its base stylesheets: `SASS/uswds-styles.scss` is an out of the box USWDS baseline.  It's also the primary SASS entry point.  `SASS/_site.scss` and the base `.site` family of styles are for our regular dark themed site pages and components.

Individual design patterns have their own stylesheets in their own folder.  They build on top of the base USWDS styles.
