(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeDetailController', HomeDetailController);

    HomeDetailController.$inject = [
        '$scope',
        '$stateParams',
        'dialogService', 
        'homeApiService',
        'homeConfigService'
    ];

    /* @ngInject */
    function HomeDetailController($scope, $stateParams, dialogService, homeApiService, homeConfigService) {
        var vm = this;
        var _initialization = _initialization;
        vm.headerView = '/app/layout/layoutViews/headerLogin.html';
        vm.footerView = '/app/layout/layoutViews/footer.html';
        vm.id = $stateParams.id;

        vm.cheacklogin = cheacklogin;
        //获取文章数据
        vm.getArticle = getArticle;
        vm.oprReply = oprReply;
        vm.oprLike = oprLike;
        vm.oprTipOff = oprTipOff;
        vm.oprComment = oprComment;
        
        activate();

        ////////////////

        function activate() {
            _initialization();
            vm.cheacklogin();
            vm.getArticle(vm.id);
        }

        function oprComment(record, id) {

            var params = {           
            };
            params.artile_id = vm.id;
            params.reply_to = id;
            params.content = record;
            homeApiService.reply(params, function(result){

                if(result.code == 200){
                    var tips = {
                        title: '回复成功',
                        message: result.msg
                    };
                    dialogService.alert(tips); 
                    vm.getArticle(vm.id); 
                    vm.commentContent = '';                
                }
            });
        }
        function oprReply(record) {
            var templateUrl = '/app/home/dialogTemplate/reply.html';
            var data = {
                title: '回复评论',
                content: ''               
            };
            dialogService.open(templateUrl, data, 'sm', true).result.then(function(data) {
                var params = {};
                params.artile_id = vm.id;
                // params.reply_to = record.id;
                params.content = data.content;
                homeApiService.reply(params, function(result){

	                if(result.code == 200){
	                    var tips = {
                            title: '回复成功',
                            message: result.msg
                        };
                        dialogService.alert(tips); 
                        vm.getArticle(vm.id);                   
    	            }
	            });

            });

        }
        function oprLike(index) {
        	vm['likeIcon' + index] = !vm['likeIcon' + index];
            var params = {           
            };
            params.artile_id = vm.id;
            homeApiService.like(params, function(result){

                if(result.code == 200){
                    console.log("点赞成功");
                    // vm.getArticle(vm.id);                 
                }
            });
        }
        function oprTipOff() {
            var params = {           
            };
            params.artile_id = vm.id;
            homeApiService.report(params, function(result){

                if(result.code == 200){
                    var tips = {
                        title: '已举报',
                        message: result.msg
                    };
                    dialogService.alert(tips);                 
                }
            });
        }

        function getArticle(id) {
        	
        	var params = {};
        	params.id = id;
        	homeApiService.detail(params, function(result){

                if(result.code == 200){
                    // console.log("登录成功");
                    var article = result.data;
                    vm.article = article;
                    angular.forEach(vm.article.commentes, function(data,index,array){
                        data.index = index + 1;         
                    });
                    for (var i = 1; i <= vm.article.commentCount; i++) {
                        vm.isCollapsed['rpy' + i] = true;
                        vm['likeIcon' + i] = false;
                    };
                    vm.likeIcon0 = false;
                    console.log(vm.article.commentes.children);
                }
            });
            
        }
        function cheacklogin() {
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
        	vm.commentContent = '';
           
        }
    }
})();