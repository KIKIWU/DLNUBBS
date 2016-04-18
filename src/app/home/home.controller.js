(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope',
        '$stateParams'];

    /* @ngInject */
    function HomeController($scope, $stateParams){
        var vm = this;
        var _initialization = _initialization;
        
        activate();

        function activate() {
            _initialization();
        }
        function _initialization() {}


    }
})();
