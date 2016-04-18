(function () {
    'use strict';
    angular
        .module('app')
        .factory('httpRequestService', httpRequestService);

    httpRequestService.$inject = ['utilService'];

    /* @ngInject */
    function httpRequestService(utilService){
        var exports = {
            cleanRequestParams: cleanRequestParams
        };


        return exports;

        ////////////////

        function cleanRequestParams(httpConfig) {
            var clean = httpConfig.params || httpConfig.data;

            clean = utilService.cleanObj(clean);

            return httpConfig;
        }
    }
})();
