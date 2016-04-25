'use strict'

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
});

var tasks = require('require-dir')('./tasks');


var dirs = {
    SRC: './',
    DEST: 'build',
    SCSS: 'app/**/*.scss',
    BUILD: 'build/**/*.js',
    JS: 'app/**/*.js',
    VIEW: 'view/**/*.jsx',
    MANIFEST: 'build/manifest.json'
};

function getTask(task){
    return tasks[task](gulp, plugins, dirs);
}

gulp.task('del', getTask('del'));
gulp.task('watch', getTask('watch'));
gulp.task('rev', getTask('rev'));
gulp.task('replace', ['rev'], getTask('replace'));
gulp.task('r', [], getTask('replace'));
gulp.task('build', ['replace']);
gulp.task('default', ['watch', 'watchsass']);
gulp.task('b', ['build']);

gulp.task('watchsass', ['sass'], function () {
	gulp.watch('src/app/**/*.scss', ['sass']);
});

gulp.task('sass', function () {

	gulp.src('src/**\/*.scss')
		.pipe(plugins.sass.sync().on('error', plugins.sass.logError))
		.pipe(gulp.dest('src'));

});



