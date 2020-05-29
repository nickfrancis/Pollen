var serveFolder = './src/',
		css = 'src/css/style.css',
		html = 'src/**/*.html',
		assets = 'src/assets/**/*.*',
		scripts = 'src/scripts/**/*.*';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// CSS Compiling
gulp.task('styles', function () {
  return gulp.src(css)
  .pipe(browserSync.stream());
});

// HTML
gulp.task('html', function() {
  return gulp.src([html])
  .pipe(browserSync.stream());
});

// ASSETS
gulp.task('assets', function() {
  return gulp.src([assets])
  .pipe(browserSync.stream());
});

// SCRIPTS
gulp.task('scripts', function() {
  return gulp.src([scripts])
  .pipe(browserSync.stream());
});

gulp.task('watch', ['styles', 'html', 'assets', 'scripts'], function() {

    // Create Browser Sync Server
    browserSync.init({
        server: serveFolder
    });
    // Create Browser Sync Server

    // Watch css, assets, html and asset files to reload page via Browser Sync
    gulp.watch(css, ['styles']);
    gulp.watch(html, ['html']);
		gulp.watch(assets, ['assets']);
		gulp.watch(scripts, ['scripts']);

});

gulp.task('build', ['styles', 'html', 'assets', 'scripts']);
