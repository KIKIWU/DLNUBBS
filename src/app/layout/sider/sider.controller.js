(function() {
    'use strict';

    angular
        .module('app')
        .controller('SiderController', SiderController);

    SiderController.$inject = ['$scope', '$location'];

    /* @ngInject */
    function SiderController($scope, $location){
        var vm = this;

        vm.isCollapsed = {
            hotel: false,
            travel: false,
            train: false
        }

        vm.isStartBy = isStartBy;

        function isStartBy(path) {
            return $location.path().indexOf('/app' + path) === 0;
        }
    }
})();
