'use strict'

module.exports = function (gulp, plugins, dirs) {
    return function () {
        return gulp.src(dirs.BUILD, {
                base: dirs.DEST
            })
            .pipe(plugins.rev())
            .pipe(gulp.dest(dirs.DEST))
            .pipe(plugins.rev.manifest('manifest.json', {
                merge: true
            }))
            .pipe(gulp.dest(dirs.DEST))
    }
}
