(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeClassifyController', HomeClassifyController);

    HomeClassifyController.$inject = [
        '$scope',
        '$stateParams',
        'dialogService', 
        'homeApiService',
        'homeConfigService'
    ];

    /* @ngInject */
    function HomeClassifyController($scope, $stateParams, dialogService, homeApiService, homeConfigService) {
        var vm = this;
        var _initialization = _initialization;
        vm.headerView = '/app/layout/layoutViews/headerLogin.html';
        vm.footerView = '/app/layout/layoutViews/footer.html';
        vm.kindId = $stateParams.id;
        console.log(vm.kindId);

        vm.cheacklogin = cheacklogin;
        vm.getArticleKinds = getArticleKinds;
        //获取文章数据
        vm.getArticleByKind = getArticleByKind;
        
        
        activate();

        ////////////////

        function activate() {
            _initialization();
            vm.getArticleKinds();
            vm.getArticleByKind(vm.kindId);
        }

        function getArticleKinds() {
            var params = {};
            homeApiService.getArticleKinds(null, params, function(result){

                if(result.code === 200){ 
                    var kinds = result.data;
                    vm.Kinds = kinds;            
                }
            });
            var kinds = [{
                title: '社区活动',
                id: "7"
        
            },{
                title: '考研专区',
                id: "2100"
               
            },{
                title: '兼职招聘',
                id: "387"
               
            },{
                title: '校园专栏',
                id: "786"
                
            }];
            vm.Kinds = kinds; 
        }

        function getArticleByKind(id) {
        	var params = {};
        	params.id = id;
        	params.limit = 20;
        	params.page = 1;
        	homeApiService.getArticleByKind(params, function(result){

                if(result.code === 200){
                    var articles = result.data;
                    vm.articles = articles;                
                }
            });
            vm.articles = [
	            {
	            	id: 3283,
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
	            	id: 1283,
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
	            	id: 1111,
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活'
	            }
            ];
        }
        function cheacklogin() {
            // var copy = angular.copy(vm.user);
            // copy.requestTime = new Date().getTime();
            // homeApiService.login(null, copy, function(result){

            //     if(result.code === 200){
            //         console.log("登录成功");
                    
            //     }
            // });
        }
        function _initialization() {
        	vm.isCollapsed = {
        	};
        	
            var user = {
                name: 'kikiwu' || '游客',
                level: '11'
            };
            vm.user = user;
           
        }
    }
})();