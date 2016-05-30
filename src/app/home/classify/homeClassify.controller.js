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
        vm.page = 1;
        //获取文章数据
        vm.getArticleByKind = getArticleByKind;
        vm.publish = publish;
        
        
        activate();

        ////////////////

        function activate() {
            _initialization();
            vm.cheacklogin();
            vm.getArticleKinds();
            vm.getArticleByKind(vm.kindId, vm.page);
        }

		function publish() {
			var params = {};
			params.title = vm.newArticle.title;
			params.content = vm.newArticle.content;
			params.id = vm.kindId;
			homeApiService.user(null, params, function(result){

                if(result.code == 200){
                    var tips = {
                        title: '发布成功',
                        message: result.msg
                    };
                    dialogService.alert(tips);  
                }
            });
		}
        function getArticleKinds() {
            var params = {};
            homeApiService.getArticleKinds(params, function(result){

                if(result.code == 200){ 
                    var kinds = result.data;
                    vm.Kinds = kinds;            
                }
            });
            var kinds = [
            	{
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
	                
            	}
            ];
            vm.Kinds = kinds; 
        }

        function getArticleByKind(id, page) {
        	var params = {};
        	params.kind = id;
        	params.limit = 20;
        	params.page = page || 1;
        	homeApiService.getArticleByKind(params, function(result){

                if(result.code == 200){
                    var articles = result.data;
                    vm.articles = articles; 
                    var totalItems = result.dataCount;

                    vm.pager = {
                        totalItems: totalItems
                    };               
                }
            });
            vm.articles = [
	            {
	            	   id: 3283,
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活',
					agree_count: 22
	            },
	            {
	            	id: 1283,
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活',
					agree_count: 22
	            },
	            {
	            	id: 1111,
					tittle: '这是一个测试数据的文章标题',
					content: '林心如霍建华公开恋情',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活',
					agree_count: 38
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟',
					author: 'kikiwu',
					create_time: '2016年5月17日- 19:00',
					kinName: '校园生活',
					agree_count: 22
	            },
	            {
					tittle: '这是一个测试数据的文章标题',
					content: '林心如霍建华公开恋情',
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
            var totalItems = 88;

            vm.pager = {
                totalItems: totalItems
            };  
        }
        function cheacklogin() {
            // var copy = angular.copy(vm.user);
            // copy.requestTime = new Date().getTime();
            homeApiService.user(null, {}, function(result){

                if(result.code === 200){
                    var user = result.data.name;
           
		            vm.user = user;
		            if(!vm.user) {
		            	vm.log = false;
		            	vm.user = '游客';
		            }
                    
                }
            });
        }
        function _initialization() {
        	vm.isCollapsed = {
        	};
        	vm.newArticle= {};
        	// vm.user = '游客';
        }
    }
})();