var gulp = require('gulp');
var pegjs = require('gulp-pegjs');
var jasmine = require('gulp-jasmine');
var jsdoc = require('gulp-jsdoc3');
var istanbul = require('gulp-istanbul');
var defineModule = require('gulp-define-module');

gulp.task('compile', function() {
  return gulp.src('grammar/pseudo.pegjs')
    .pipe(pegjs())
    .pipe(defineModule('commonjs'))
    .pipe(gulp.dest('src/parser'));
});

gulp.task('doc', function (cb) {
    var config = require('./documentation.json');
    gulp.src(['README.md', 'pseudo.js', './src/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});

gulp.task('pre-test', ['compile'], function () {
  return gulp.src(['pseudo.js', 'src/**/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function() {
 	gulp.src('test/**/*.js')
    	.pipe(jasmine())
    	.pipe(istanbul.writeReports())
    	.pipe(istanbul.enforceThresholds({
    		thresholds: {
    			global: 90
    		} 
    	}));
});

gulp.task('watch', function() {
	gulp.watch('./grammar/*.pegjs', ['test']);
});

gulp.task('build', ['doc', 'test', 'watch']);