(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = [
        '$scope',
        'statementDataService'
    ];

    /* @ngInject */
    function NavigationController($scope, dataService){
        var vm = this;

        vm.userInfo = null;

        vm.getUserInfo = getUserInfo;

        activate();

        function activate() {
            vm.getUserInfo();
        }

        function getUserInfo() {
            dataService.userInfo.get(function(result) {
                if(result.code === 0) {
                    vm.userInfo = result.data;
                }
            })
        }
    }
})();
