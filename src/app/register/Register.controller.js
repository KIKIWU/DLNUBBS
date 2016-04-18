(function() {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope','$stateParams','homeApiService','homeConfigService'];

    /* @ngInject */
    function RegisterController($scope, $stateParams, homeApiService, homeConfigService) {
        var vm = this;
        var _initialization = _initialization;
        vm.headerView = '/app/layout/layoutViews/header.html';
        vm.footerView = '/app/layout/layoutViews/footer.html';
        vm.queryObj = homeConfigService.homeConfig.register.queryObj;
        vm.cheackRegister = cheackRegister;
        
        activate();

        function activate() {
            _initialization();
        }
        function cheackRegister() {
            var copy = angular.copy(vm.queryObj);
            console.log(copy);
            homeApiService.register(copy, function(result){

                if(result.code === 0){
                    
                }
            });
        }
        function _initialization() {
            
        }
    }
})();