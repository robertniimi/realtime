var gulp = require('gulp');
var webpack = require('webpack-stream');
var postcssImport = require('postcss-import');
var pngquant = require('imagemin-pngquant');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var webpackConfig = require('./app/webpack.config');

// DIRECTORY CONSTANTS
var DIST = './dist/';
var DIST_STATIC = DIST + 'static/';
var DIST_STATIC_IMAGES = DIST_STATIC + 'images/';

var APP = './app/';
var APP_JS = APP + 'js/';
var APP_STYLE = APP + 'styles/';
var APP_STYLE_CSS = APP_STYLE + 'css/';
var APP_STYLE_SASS = APP_STYLE + 'sass/';
var APP_IMAGES = APP + 'images/';
// var APP_FONTS = APP + 'fonts/';

var ALL = '**/*';
var ALL_HTML = '.html';
var ALL_CSS = ALL + '.css';
var ALL_JS = ALL + '.js';
var ALL_JSX = ALL + '.jsx';
var ALL_SCSS = ALL + '.scss';

gulp.task('build', [
  'html',
  'images',
  'scripts',
  'styles',
]);

/* ========== Dev Tasks ========== */
gulp.task('dev', ['build'], () => {
  gulp.watch([APP_JS + ALL_JS, APP_JS + ALL_JSX], ['scripts']);
  gulp.watch(APP_STYLE + ALL_CSS, ['styles']);
  gulp.watch(APP + '*.html', ['html']);
  gulp.watch([
    APP_IMAGES + '*.png',
    APP_IMAGES + '*.svg',
    APP_IMAGES + '.jpg',
  ], ['images']);
});

/* ========== JS Tasks ========== */
gulp.task('scripts', ['_webpack']);

gulp.task('_webpack', () => {
  return gulp.src(APP_JS + ALL_JS)
    .pipe($.plumber())
    .pipe(webpack(webpackConfig))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(DIST_STATIC))
    ;
});

/* ========== Style Tasks ========== */
// gulp.task('styles', ['_minify-css']);
gulp.task('styles', ['_sass']);

gulp.task('_sass', () => {
  return gulp.src(APP_STYLE + 'main.scss')
    .pipe($.plumber())
    .pipe($.sass({
      includePaths: ['./node_modules', './node_modules/support-for/sass'],
      errLogToConsole: true,
    }))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(DIST_STATIC))
    ;
});

/* ========== HTML Tasks ========== */
gulp.task('html', ['_minify-html']);

gulp.task('_minify-html', function() {
  return gulp.src(APP + '*.html')
    .pipe($.plumber())
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(DIST))
});

/* ========== Image Tasks ========== */
gulp.task('images', ['_minify-images']);

gulp.task('_minify-images', function() {
  return gulp.src(APP_IMAGES + '*')
    .pipe($.plumber())
    .pipe($.debug())
    .pipe($.imagemin({
      progressive: true,
      use: [pngquant()],
    }))
    .pipe($.plumber.stop())
    .pipe($.debug())
    .pipe(gulp.dest(DIST_STATIC_IMAGES));
});

/* ========== Server Tasks ========== */
gulp.task('serve', () => {
  return $.nodemon({
    script: './server.js'
  });
});
