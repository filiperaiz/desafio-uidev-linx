//  CSS packages
const gulp = require('gulp');
const sass = require('gulp-sass');

//  CSS paths
const cssFiles = ['./src/assets/scss/**/*.scss'];
const cssDest = './dist/css/';

//  CSS task
function stylesBuild() {
	return gulp
		.src(cssFiles)
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(gulp.dest(cssDest));
}

//  CSS exports
module.exports = {
	build: stylesBuild
};
