(function() {
    'use strict';

    angular
        .module('app')
        .factory('homeConfigService', homeConfigService);

    homeConfigService.$inject = [];

    /* @ngInject */
    function homeConfigService() {
        var exports = {
            homeConfig: homeConfig()
        };
        return exports;

        ////////////////

        function homeConfig() {
            var homeConfig = {
                'register':{
                	'queryObj': {
                        mail: '',
                        phone: '',
                        password: '',
                        name: '',
                        sex: '',
                        school: '',
                        company: '',
                        work: '',
                        address: ''
                    }
                }
            };
            return homeConfig;
        }
    }
})();
