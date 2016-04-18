(function() {
    'use strict';

    angular
        .module('app')
        .controller('BizController', BizController);

    BizController.$inject = [
        '$scope',
        '$stateParams',
        '$location'
    ];

    /* @ngInject */
    function BizController($scope, $stateParams, $location){
        var vm = this;

        vm.biz = $stateParams.biz;
        vm.bizline = $stateParams.bizline;

        vm.isShowBizline = isShowBizline;

        activate();

        function activate() {
            vm.isShowBizline();
        }

        function isShowBizline() {
            var path = $location.path();
            var options = {
                statement: true,
                payment: false,
                settleinfo: false
            };
            var match = (/\/app\/(\S+)\/(\S+)\//).exec(path);

            return match && match[2] && options[match[2]];
        }
    }
})();
