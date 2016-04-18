'use strict'

module.exports = function(gulp, plugins, dirs){
    return function(){
        plugins.nodemon({
            script: 'bin/www',
            ext: 'js',
            watch: [
                'app.js',
                './bin/www',
                'src/app/',                
                'views/',
                'routes/',
                'tasks/',
                'gulpfile.js'
            ],
            tasks: []
        })
    }
}