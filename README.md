# Extended USWDS design patterns | [uswds.facioquo.com](https://uswds.facioquo.com)

[![website screenshot](/.offline/site-thumbnail.png)](https://uswds.facioquo.com)

An Angular framework website demonstrating extended design patterns for [U.S. Web Design System](https://designsystem.digital.gov) (USWDS).  Each pattern is a separate site page with its own isolated stylesheet and typescript file, to make it easy to see its implementation.  All design patterns are listed on the [uswds.facioquo.com](https://uswds.facioquo.com) home page.

## Getting started with local development

```bash
# install packages and 
# start the local site
npm install
npm start
```

## We use a base stylesheets

Since our design pattern pages are isolated and based on default USWDS styles, we use a base stylesheet:

`SASS/uswds-styles.scss` is an out of the box USWDS base for design pattern pages.

`SASS/_site.scss` and the base `.site` family of styles are for our regular dark themed site pages and components.

## Contributor notes

- See [our first Pull Request](https://github.com/facioquo/uswds-design-patterns/pull/1) to learn how we installed the USWDS package.
- Since then, we've consolidated down to one base stylesheet, to simplify.
