//	JS packages
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

//	JS paths
const jsFiles = ['./src/assets/js/**/*.js'];
const jsDest = './dist/js/';

//	JS transpile and concat
function scriptsBuild() {
	return gulp
		.src(jsFiles)
		.pipe(babel({ presets: [['@babel/env', { modules: false }]] }))
		.pipe(concat('main.js'))
		.pipe(gulp.dest(jsDest));
}

//	JS exports (Common JS)
module.exports = {
	build: scriptsBuild
};
