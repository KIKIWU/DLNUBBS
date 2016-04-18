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
        
        activate();

        ////////////////

        function activate() {
            _initialization();
        }
        function cheacklogin() {
            var copy = angular.copy(vm.user);
            console.log(copy);
            homeApiService.login(copy, function(result){

                if(result.code === 0){
                    
                }
            });
        }
        function _initialization() {
            var user = {
                mail: '',
                password: ''
            };
            vm.uesr = user;
        }
    }
})();