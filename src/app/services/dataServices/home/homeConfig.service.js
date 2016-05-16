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
                        address: '',
                        requestTime: '',
                        appName: '7scPLxvz1pgWzNnq2sTFNnd8c1EPsix2Z7JbdFjodvFXRzpxz5KiVAmsGryP9gwHxOLT4BYl8sqbUrlhgUld4w=='
                    }
                },
                'home': {
                    
                }
            };
            return homeConfig;
        }
    }
})();
