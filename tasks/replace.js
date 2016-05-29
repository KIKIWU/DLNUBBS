'use strict'

var revReplace = require("gulp-rev-replace");

module.exports = function (gulp, plugins, dirs) {
    return function () {
        return gulp.src(dirs.JS, {
                base: dirs.JS
            })
            .pipe(revReplace({
                manifest: gulp.src(dirs.MANIFEST),
                replaceInExtensions: ['.jsx'],
                modifyUnreved: function (filename) {
                    //处理没有加hash值的file
                    return '/' + filename;
                },
                modifyReved: function (filename) {
                    //处理加了hash值的file
                    return '/' + filename;
                }
            }))
            .pipe(gulp.dest(dirs.VIEW))
    }
}
