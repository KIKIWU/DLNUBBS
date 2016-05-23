(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$scope',
        '$stateParams',
        'dialogService', 
        'homeApiService',
        'homeConfigService'
    ];

    /* @ngInject */
    function HomeController($scope, $stateParams, dialogService, homeApiService, homeConfigService){
        var vm = this;
        var _initialization = _initialization;
        vm.getHotArticle = getHotArticle;
        vm.getArticleKinds = getArticleKinds;
        vm.checkLogin = checkLogin;
        vm.footerView = '/app/layout/layoutViews/footer.html';
        vm.noUserView = 'app/home/Views/noUserView.html';
        
        activate();

        function activate() {
            _initialization();
            vm.checkLogin();
            vm.getHotArticle();
            vm.getArticleKinds();
        }
        function checkLogin() {

            var user = {
                name: 'kikiwu' || '游客',
                level: '11'
            };
            vm.user = user;
            if(vm.user.name !== '游客') {
                vm.loginType = true;
            }
        }
        function _initialization() {
            vm.loginType = false;
            vm.carousel = {
                myInterval: 5000,
                noWrapSlides: false,
                active: 0,
                transition: false,
                slides: [{
                    image: '/app/images/home/0002.jpg',
                    // text: 'balabala',
                    id: 0
                },{
                    image: '/app/images/home/0004.jpg',
                    // text: 'balabala',
                    id: 1
                },{
                    image: '/app/images/home/0005.jpg',
                    // text: 'balabala',
                    id: 2
                },{ 
                    image: '/app/images/home/0008.jpg',
                    // text: 'balabala',
                    id: 3
                },{
                    image: '/app/images/home/0006.jpg',
                    // text: 'balabala',
                    id: 4
                },{
                    image: '/app/images/home/bgd.jpg',
                    // text: 'balabala',
                    id: 5
                }]
            };
            

        }
        function getHotArticle(page, limit) {
            var params = {};
            params.limit = 7;
            homeApiService.getHotArticles(null, params, function(result){

                if(result.code === 200){ 
                    var hot = result.data;
                    vm.hot = hot;
                    angular.forEach(hot, function (item) {
                        item.url = '/#/detail/' + item.artile_id;
                    });
                }
            });
            vm.hot = [{
                artile_id: 7154432970570073387,
                artile_tittle: '大连民族大学第what届热舞大赛',
                text: 'balabala'
            },{
                 artile_id: 7154432970570073387,
                artile_tittle: '研究生考试报名结束啦',
                text: 'balabala'
            },{
                 artile_id: 7154432970570073387,
                artile_tittle: '大连民族大学第what届热舞大赛',
                text: 'balabala'
            },{
                 artile_id: 7154432970570073387,
                artile_tittle: '研究生考试报名结束啦',
                text: 'balabala'
            },{
                 artile_id: 7154432970570073387,
                artile_tittle: '发现王国年卡团购开始啦，组团有意的小船说了不翻balabalabala',
                text: 'balabala'
            },{
                 artile_id: 7154432970570073387,
                artile_tittle: '发现王国年卡团购开始啦，组团有意的小船说了不翻balabalabala',
                text: 'balabala'
            },{
                 artile_id: 7154432970570073387,
                artile_tittle: '盘点民院最美教室',
                text: 'balabala'
            }];
            angular.forEach(vm.hot, function (item) {
                item.url = '/#/detail/' + item.artile_id;
            });
            vm.employment = [{
                tittle: '美团网酒店旅游事业群诚招高级前端开发工程师',
                author: '吴琪',
                headimg: '/app/images/home/metuan.png',
                url: 0
            },{
                title: '滴滴打车社招内推php',
                author: '张德满',
                headimg: '/app/images/home/didi.png',
                url: 2
            },{
                title: '美团网外卖事业群诚招前端',
                author: '那丽雪',
                headimg: '/app/images/home/metuan.png',
                url: 1
            },{
                title: '百度2017年校园招聘内推报名',
                author: 'nacliu',
                headimg: '/app/images/home/baidu.jpg',
                url: 2
            },{
                title: '人人车招聘市场运营',
                author: '人人车hr',
                headimg: '/app/images/home/renrenche.png',
                url: 2
            }];
        }
        function getArticleKinds() {
            var params = {};
            homeApiService.getArticleKinds(null, params, function(result){

                if(result.code === 200){ 
                    var kinds = result.data;
                    vm.articleKinds = angular.copy(kinds);
                    vm.kinds = {};
                    var right = angular.copy(kinds);
                    var number = Math.ceil(kinds.length/2);
                    vm.kinds.left = kinds.splice(0, number);
                    console.log(right + '-' + number);
                    vm.kinds.right = right.splice(number, right.length);
                }
            });
            var kinds = [{
                title: '社区活动',
                id: 7
        
            },{
                title: '考研专区',
                id: 2100
               
            },{
                title: '兼职招聘',
                id: 387
               
            },{
                title: '校园专栏',
                id: 786
                
            }];
            vm.kinds = {};
            vm.articleKinds = angular.copy(kinds);
            var right = angular.copy(kinds);
            
            var number = Math.ceil(kinds.length/2);
            vm.kinds.left = kinds.splice(0, number);
            vm.kinds.right = right.splice(number, right.length);
            console.log(vm.kinds);
        }


    }
})();
