(function() {
    'use strict';

    angular
        .module('app')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$scope', '$uibModalInstance', 'cfgData'];

    /* @ngInject */
    function ModalController($scope, $uibModalInstance, cfgData){
        var vm = this;

        //配置数据
        vm.cfgData = cfgData;

        //定义方法
        vm.cancel = cancel;
        vm.ok = ok;

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        function ok() {
            $uibModalInstance.close(vm.cfgData);
        }
    }
})();
