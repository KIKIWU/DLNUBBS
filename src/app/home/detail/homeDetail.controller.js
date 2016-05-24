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
                var params = {
                    
                };
                homeApiService.reply(params, function(result){

	                if(result.code === 200){
	                                        
	                }
	            });

            });

        }
        function oprLike(index) {
        	vm['likeIcon' + index] = !vm['likeIcon' + index];
        }
        function oprTipOff() {}

        function getArticle(id) {
        	console.log(id);
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
                    
                }
            });
   //          vm.article = {};
   //          vm.article.tittle = '这是一个测试数据的文章标题';
   //          vm.article.content = "5月12日晚8点，方励开始在自己的微博上直播与《百鸟朝凤》宣发相关的辛酸和感悟。他历数了宣发费用少、院线不配合的艰难，宣称：“这个电影出来就没指望票房多少，只是希望能有更多观众看到吴天明导演最后这部杰作。”他还为院线经理们做分析：“一年有五十来个周末可以让你们去赚钱，就这个周末为我们增加一点排片吧——这是我们最后的机会了。说到动情处，头发花白的方励放言：“如果你能够在这个周末给我们排一场黄金场，老方立马给你磕头，给你下跪，你信不信？……为了吴天明导演的心愿，为了观众，我愿意跪求你们";
			// vm.article.author = 'kikiwu';
			// vm.article.create_time = '2016年5月17日- 19:00';
			// vm.article.kinName = '校园生活';
			// vm.article.commentes = [
			// 	{
			// 		name: 'test1',
			// 		time: '2016年5月17日-19:20',
			// 		content: '我不知道要评论什么',
			// 		reply: [
			// 		{
			// 			a: '王玥',
			// 			b: 'kikiwu',
			// 			content: '你要上天呀',
			// 			time: '2016年5月18日-21:21'
			// 		},
			// 		{
			// 			a: '王玥',
			// 			b: 'kikiwu',
			// 			content: '你要上天呀',
			// 			time: '2016年5月18日-21:21'
			// 		}
			// 		]
			// 	},
			// 	{
			// 		name: 'test1',
			// 		time: '2016年5月17日-19:20',
			// 		content: '我不知道要评论什么',
			// 		reply: []
			// 	},
			// 	{
			// 		name: 'test1',
			// 		time: '2016年5月17日-19:20',
			// 		content: '我不知道要评论什么',
			// 		reply: []
			// 	}
			// ];
			// vm.article.commentCount = 3;
			
            
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
        	vm.commentContent = '';
            var user = {
                name: 'kikiwu' || '游客',
                level: '11'
            };
            vm.user = user;
           
        }
    }
})();