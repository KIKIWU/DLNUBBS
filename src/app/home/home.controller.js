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
        function _initialization() {
            vm.carousel = {
                myInterval: 3000,
                noWrapSlides: false,
                active: 0,
                transition: true,
                slides: [{
                    image: '/app/images/home/bgd.jpg',
                    text: 'balabala',
                    id: 0
                },{
                    image: '/app/images/home/door.jpg',
                    text: 'balabala',
                    id: 1
                },{
                    image: '/app/images/home/bgd.jpg',
                    text: 'balabala',
                    id: 2
                }]
            };

        }


    }
})();
