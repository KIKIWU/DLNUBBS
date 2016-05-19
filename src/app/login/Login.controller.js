(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$stateParams', 'homeApiService'];

    /* @ngInject */
    function LoginController($scope, $stateParams, homeApiService) {
        var vm = this;
        var _initialization = _initialization;
        vm.headerView = '/app/layout/layoutViews/header.html';
        vm.footerView = '/app/layout/layoutViews/footer.html';

        vm.cheacklogin = cheacklogin;
        vm.href = '#';
        
        activate();

        ////////////////

        function activate() {
            _initialization();
        }
        function cheacklogin() {
            var copy = angular.copy(vm.user);
            copy.requestTime = new Date().getTime();
            homeApiService.login(null, copy, function(result){

                if(result.code === 200){
                    console.log("登录成功");
                    vm.href = '/#/home';
                    
                }
            });
        }
        function _initialization() {
            var user = {
                account: '',
                password: '',
                requestTime: '',
                appName:'7scPLxvz1pgWzNnq2sTFNnd8c1EPsix2Z7JbdFjodvFXRzpxz5KiVAmsGryP9gwHxOLT4BYl8sqbUrlhgUld4w=='
            };
            vm.user = user;
        }
    }
})();