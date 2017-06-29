'use strict';

/* ------------------------------------ *\
    Includes
\* ------------------------------------ */

var gulp = require('gulp');
// Pump - https://github.com/mafintosh/pump
var pump = require('pump');
// SVGO - https://www.npmjs.com/package/gulp-svgmin
var svgmin = require('gulp-svgmin');


/* ------------------------------------ *\
    Paths
\* ------------------------------------ */

const paths = {
  input: 'SVG/**/*.svg',
  output: 'SVG/',
}


/* ------------------------------------ *\
    Tasks
\* ------------------------------------ */

gulp.task('default', function (cb) {
  pump([
    gulp.src(paths.input),
    svgmin(),
    gulp.dest(paths.output),
  ], cb );
});
