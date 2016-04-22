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
                title: '发现王国年卡团购开始啦，组团有意的小船说了不翻balabalabala',
                text: 'balabala',
                url: 2
            },{
                title: '发现王国年卡团购开始啦，组团有意的小船说了不翻balabalabala',
                text: 'balabala',
                url: 2
            },{
                title: '盘点民院最美教室',
                text: 'balabala',
                url: 3
            }];
            vm.employment = [{
                title: '美团网酒店旅游事业群诚招高级前端开发工程师',
                headimg: '/app/images/home/meituan.jpg',
                url: 0
            },{
                title: '滴滴打车社招内推php',
                headimg: '/app/images/home/didi.jpg',
                url: 2
            },{
                title: '美团网外卖事业群诚招前端',
                headimg: '/app/images/home/meituan.jpg',
                url: 1
            },{
                title: '百度2017年校园招聘内推报名',
                headimg: '/app/images/home/baidu.jpg',
                url: 2
            },{
                title: '人人车招聘市场运营',
                headimg: '/app/images/home/renrenche.jpg',
                url: 2
            }];
        }


    }
})();
