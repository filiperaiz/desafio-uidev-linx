// packages
const del = require('del');

// Clean
function cleanDist() {
	return del(['./dist/']);
}

function cleanHtml() {
	return del(['./dist/**/*.html']);
}

// exports
module.exports = {
	dist: cleanDist,
	html: cleanHtml
};
