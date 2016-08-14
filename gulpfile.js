var gulp = require('gulp');
var pegjs = require('gulp-pegjs');
var jasmine = require('gulp-jasmine');
var defineModule = require('gulp-define-module');

gulp.task('compile', function() {
  return gulp.src('grammar/pseudo.pegjs')
    .pipe(pegjs())
    .pipe(defineModule('commonjs'))
    .pipe(gulp.dest('src/parser'));
});

gulp.task('watch', function() {
	gulp.watch('./grammar/*.pegjs', ['test']);
});

gulp.task('test', ['compile'], function() {
 	gulp.src('test/**/*.js')
    	.pipe(jasmine());
});

gulp.task('build', ['test', 'watch']);