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
        vm.getHotArticle = getHotArticle;
        
        activate();

        function activate() {
            _initialization();
            vm.getHotArticle();
        }
        function _initialization() {
            vm.carousel = {
                myInterval: 5000,
                noWrapSlides: false,
                active: 0,
                transition: false,
                slides: [{
                    image: '/app/images/home/bgd.jpg',
                    text: 'balabala',
                    id: 0
                },{
                    image: '/app/images/home/door.jpg',
                    text: 'balabala',
                    id: 1
                },{
                    image: '/app/images/home/0001.jpg',
                    text: 'balabala',
                    id: 2
                 },{
                    image: '/app/images/home/door.jpg',
                    text: 'balabala',
                    id: 3
                }]
            };

        }
        function getHotArticle() {
            vm.hot = [{
                title: '大连民族大学第what届热舞大赛',
                text: 'balabala',
                url: 0
            },{
                title: '研究生考试报名结束啦',
                text: 'balabala',
                url: 2
            },{
                title: '大连民族大学第what届热舞大赛',
                text: 'balabala',
                url: 1
            },{
                title: '研究生考试报名结束啦',
                text: 'balabala',
                url: 2
             },{
                title: '盘点民院最美教室',
                text: 'balabala',
                url: 3
            }];
        }


    }
})();
