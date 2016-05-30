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
        vm.user = $stateParams.id;
        console.log(vm.kindId);

        vm.cheacklogin = cheacklogin;
        vm.query = query;
        
        //获取文章数据
        
        
        activate();

        ////////////////

        function activate() {
            _initialization();
            vm.cheacklogin();
            vm.query();
        }
 		function query() {
 			var params = {};
 			params.id = vm.id;
			homeApiService.userMessage(params, function(result){

                if(result.code == 200){
                    var message = result.data;
                    vm.message = message;              
                }
            });
            //假数据
            vm.message = {
            	name: 'gary',
            	mail: 'gary111@gmail.com',
                phone: '10086777',       
                sex: '男',
                school: '大连民族大学',
                company: 'running man',
                work: '前端开发工程师',
                address: '北京市回龙观',
            };
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