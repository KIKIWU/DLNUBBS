(function () {
    'use strict';
    angular
        .module('app')
        .factory('dialogService', dialogService);

    dialogService.$inject = ['$uibModal', '$templateCache'];

    /* @ngInject */
    function  dialogService($uibModal, $templateCache){
        var exports = {
            open: open,
            alert: alert,
            confirm: confirm
        };


        return exports;

        function open(templateUrl, data, size, animationsEnabled) {
            return _makeModal(templateUrl, data, size, animationsEnabled);
        }

        function alert(cfgData) {
            return _makeModal("/app/services/components/dialogService/alert.html", {title: cfgData.title || "提示", message: cfgData.message}, 'sm', true);
        }

        function confirm(cfgData) {
            return _makeModal("/app/services/components/dialogService/confirm.html", {title: cfgData.title || "确认", message: cfgData.message}, 'sm', true);
        }

        function _makeModal(templateUrl, data, size, animationsEnabled){
            var modalInstance = $uibModal.open({
                animation: animationsEnabled || false,
                //template: $templateCache.get(templateUrl),
                templateUrl: templateUrl,
                controller: 'ModalController',
                controllerAs: 'Modal',
                size: size || "sm",
                resolve: {
                    cfgData: function () {
                        return data;
                    }
                }
            });

            return modalInstance;
        }

    }
})();
