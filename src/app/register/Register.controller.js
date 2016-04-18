(function() {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope','$stateParams', 'dialogService', 'homeApiService','homeConfigService'];

    /* @ngInject */
    function RegisterController($scope, $stateParams, dialogService, homeApiService, homeConfigService) {
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
            copy.requestTime = new Date().getTime();
            homeApiService.register(copy, function(result){

                if(result.code === 200){
                    var tips = {
                        title: '注册成功',
                        message: result.msg
                    };
                    dialogService.alert(tips);
                }
            });
        }
        function _initialization() {
            
        }
    }
})();