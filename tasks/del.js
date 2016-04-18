'use strict'

module.exports = function(gulp, plugins, dirs){
	console.log(plugins);
    return function(){
        plugins.del(dirs.DEST);
    }
}