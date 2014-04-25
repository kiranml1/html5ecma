// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint');
 
// Scripts
gulp.task('scripts', function() {
	return gulp.src('./src/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('default'));
});
 
// Default task
gulp.task('default', function() {
    gulp.run('scripts');
});