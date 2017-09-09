'use strict';

/* ------------------------------------ *\
    Includes
\* ------------------------------------ */

var gulp = require('gulp');
// Pump - https://github.com/mafintosh/pump
var pump = require('pump');
// SVGO - https://www.npmjs.com/package/gulp-svgmin
var svgmin = require('gulp-svgmin');
// Iconfont - https://github.com/nfroidure/gulp-iconfont
var iconfont = require('gulp-iconfont');
// Iconfont CSS - https://github.com/backflip/gulp-iconfont-css
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'cryptocoins';


/* ------------------------------------ *\
    Paths
\* ------------------------------------ */

const paths = {
  input: 'SVG/**/*.svg',
  output: 'SVG/',
  font_output: 'webfont/',
}


/* ------------------------------------ *\
    Tasks
\* ------------------------------------ */

gulp.task('optimize', function (cb) {
  console.log('-- Optimizing SVG files');
  pump([
    gulp.src(paths.input),
    svgmin(),
    gulp.dest(paths.output),
  ], cb );
});


gulp.task('webfont', function (cb) {
  console.log('-- Generating webfont');
  pump([
    gulp.src(paths.input),
    iconfontCss({
      fontName: fontName,
      path: 'src/icons-template.css',
      targetPath: 'cryptocoins.css',
      fontPath: '',
      cssClass: 'cc'
    }),
    iconfont({
      fontName: fontName,
      prependUnicode: true,
      formats: ['ttf', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1001,
      descent: 200,
     }),
    gulp.dest(paths.font_output),
  ], cb );
});


gulp.task('default', ['optimize', 'webfont'], function (){
});