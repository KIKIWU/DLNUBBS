'use strict'

module.exports = function(gulp, plugins, dirs){
    return function(){
        plugins.del(dirs.DEST);
    }
}