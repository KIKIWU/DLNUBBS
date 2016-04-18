'use strict'

module.exports = function(gulp, plugins, dirs){
    return function(){
        return gulp.src(dirs.SCSS, {base: dirs.SRC})
            .pipe(plugins.sass())
            .pipe(gulp.dest(dirs.DEST));
    }
}