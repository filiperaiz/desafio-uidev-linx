// Load plugins
const gulp = require('gulp');

// import tasks
const js = require('./gulp-tasks/scripts.js');
const css = require('./gulp-tasks/styles.js');
const server = require('./gulp-tasks/browsersync.js');
const clean = require('./gulp-tasks/clean.js');
const copy = require('./gulp-tasks/copy.js');

// Watch files
function watchFiles() {
	gulp.watch('./src/assets/scss/**/*', gulp.series(css.build));
	gulp.watch('./src/assets/js/**/*', gulp.series(js.build));
	gulp.watch('./src/assets/img/**/*', copy.assets);
	gulp.watch('./src/templates/**/*', gulp.series(clean.html, copy.assets));
}

// define tasks
const watch = gulp.parallel(watchFiles, server.init);
const build = gulp.series(clean.dist, gulp.parallel(copy.assets, css.build, js.build));

// expose tasks to CLI
exports.build = build;
exports.w = watch;
exports.default = build;
