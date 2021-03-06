(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeUserController', HomeUserController);

    HomeUserController.$inject = [
        '$scope',
        '$stateParams',
        'dialogService', 
        'homeApiService',
        'homeConfigService'
    ];

    /* @ngInject */
    function HomeUserController($scope, $stateParams, dialogService, homeApiService, homeConfigService) {
        var vm = this;
        var _initialization = _initialization;
        vm.headerView = '/app/layout/layoutViews/headerLogin.html';
        vm.footerView = '/app/layout/layoutViews/footer.html';
        vm.personalView = '/app/home/userCenter/tabsViews/personal.html';
        vm.mylabView = '/app/home/userCenter/tabsViews/mylab.html';
        vm.aboutmeView = '/app/home/userCenter/tabsViews/aboutme.html';
        vm.user = $stateParams.id;
        console.log(vm.kindId);

        vm.cheacklogin = cheacklogin;
        vm.query = query;
        vm.queryMylab = queryMylab;
        vm.aboutme = aboutme;
        vm.saveInfo = saveInfo;
        
        
        activate();

        ////////////////

        function activate() {
            _initialization();
            vm.cheacklogin();
            vm.query();
        }
        function saveInfo() {
        	var params = vm.message;
        	homeApiService.changeMessage(null, params, function(result){

                if(result.code == 200){
                            
                    var tips = {
                        title: '修改成功',
                        message: result.msg
                    };
                    dialogService.alert(tips); 
                    vm.query();  
                    vm.cheacklogin();
                }
            });
        }
        function aboutme() {
        	homeApiService.queryMyReply(null, {}, function(result){

                if(result.code == 200){
                    var rpyme = result.data;
                    vm.rpyme = rpyme;              
                }
            });
            // vm.rpyme = [
            // {
            // 	name: "匪我思存",
            // 	content: 'balabalabalaa',
            // 	tittle: '面朝大海春暖花开，再见',
            // 	kinName: '校园生活',
            // 	time: '2016.3.3 17:56'
            // },
            // {
            // 	name: "匪我思存",
            // 	content: 'balabalabalaa',
            // 	tittle: '面朝大海春暖花开，再见',
            // 	kinName: '校园生活',
            // 	time: '2016.3.3 17:56'
            // },
            // {
            // 	name: "匪我思存",
            // 	content: 'balabalabalaa',
            // 	tittle: '面朝大海春暖花开，再见',
            // 	kinName: '校园生活',
            // 	time: '2016.3.3 17:56'
            // },
            // {
            // 	name: "匪我思存",
            // 	content: 'balabalabalaa',
            // 	tittle: '面朝大海春暖花开，再见',
            // 	kinName: '校园生活',
            // 	time: '2016.3.3 17:56'
            // },
            // {
            // 	name: "匪我思存",
            // 	content: 'balabalabalaa',
            // 	tittle: '面朝大海春暖花开，再见',
            // 	kinName: '校园生活',
            // 	time: '2016.3.3 17:56'
            // }
            // ];
        }
 		function query() {
 			var params = {};
 			params.id = vm.id;
			homeApiService.user(params, function(result){

                if(result.code == 200){
                    var message = result.data;
                    vm.message = message;              
                }
            });
            //假数据
            // vm.message = {
            // 	name: 'gary',
            // 	mail: 'gary111@gmail.com',
            //     phone: '10086777',       
            //     sex: '男',
            //     school: '大连民族大学',
            //     company: 'running man',
            //     work: '前端开发工程师',
            //     address: '北京市回龙观',
            // };
 		}
		function queryMylab() {
			var params = {};
 			params.id = vm.id;
			homeApiService.querylab(params, function(result){

                if(result.code == 200){
                    var mylab = result.data;
                    vm.mylab = mylab;              
                }
            });
            // vm.mylab = [
            //     {
            //     	kinName: '校园生活',
            //     	tittle: '大四的你和我',
            //     	id: 22,
            //     	kindId: 22,
            //     	time: '2012.4.3'
            //     },
            //     {
            //     	kinName: '校园生活',
            //     	tittle: '留书给最爱的你，我们毕业了',
            //     	time: '2012.4.3'
            //     },
            //     {
            //     	kinName: '考研专区',
            //     	tittle: '金石滩校区金石明珠求研友',
            //     	time: '2012.4.3'
            //     },
            //     {
            //     	kinName: '校园生活',
            //     	tittle: '大四的你和我'
            //     }

            // ];
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
        }
        function cheacklogin() {
            // var copy = angular.copy(vm.user);
            // copy.requestTime = new Date().getTime();
            homeApiService.user(null, {}, function(result){

                if(result.code === 200){
                    var user = result.data;
           
		            vm.user = user;
		            if(!vm.user.name) {
		            	vm.log = false;
		            	vm.user.name = '游客';
		            }
                    
                }
            });
        }
        function _initialization() {
        	vm.isCollapsed = {
        	};
        	vm.newArticle= {};
            vm.newArticle.is_comment = true;
        	// vm.user = '游客';
        }
    }
})();