/* gulpfile.js */

// ref: https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/
// to update: npx gulp compile
// to copyall: npx gulp copyAll

/**
* Import uswds-compile
*/
const uswds = require("@uswds/compile");

/**
* USWDS version
* Set the major version of USWDS you're using
* (Current options are the numbers 2 or 3)
*/
uswds.settings.version = 3;

/**
* Path settings
* Set as many as you need
*/
uswds.paths.dist.css = './assets/css';
uswds.paths.dist.js = './assets/js';
uswds.paths.dist.theme = './sass/uswds';
uswds.paths.dist.fonts = './assets/fonts';
uswds.paths.dist.img = './assets/img';

/**
* Exports
* Add as many as you need
*/
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;