(function () {
    'use strict';
    angular
        .module('app')
        .factory('homeApiService', homeApiService);

    homeApiService.$inject = ['$resource'];

    /* @ngInject */
    function homeApiService($resource){

        return $resource('', {}, {
            /**
            * 登录  POST
            */
            login: {
                url: ' http://www.dlnubbs.com/web/Auth/login',
                method: 'POST',
                ignoreLoadingBar: true
            },
            /**
            * 注册  POST
            */
            register: {
                url: 'http://www.dlnubbs.com/web/Auth/register',
                method: 'POST',
            },
            user: {
                url: 'http://www.dlnubbs.com/web/Auth/getUserInfo',
                method: 'POST',
            },
            /**
            * 获取文章列表
            */
            getArticles: {
                // url: 'http://www.dlnubbs.com/web/Artile/getList',
                url: 'aasss/app/getList',
                method: 'POST',
            },
            /**
            *获取文章类型 POST
            */
            getArticleKinds: {
                url: 'http://www.dlnubbs.com/web/ArtileKind/getKind',
                method: 'POST',
            },
            getHotArticles: {
                url: 'http://www.dlnubbs.com/web/index/getHotArtile',
                method: 'POST',
            },
            detail: {
                url: 'http://www.dlnubbs.com/web/Artile/detail',
                method: 'POST',
            },
            reply: {
                url: 'http://www.dlnubbs.com/web/Artile/replyTo',
                method: 'POST'
            },
            getArticleByKind: {
                url: 'http://www.dlnubbs.com/web/Artile/artileList',
                method: 'POST'
            },
            like: {
                url: 'http://www.dlnubbs.com/web/Artile/agree',
                method: 'POST'
            },
            report: {
                url: 'http://www.dlnubbs.com/web/Artile/report',
                method: 'POST'
            },
            //发表
            publish: {
                url: 'http://www.dlnubbs.com/web/Artile/report',
                method: 'POST'
            },
            
            changeMessage: {
                url: 'http://www.dlnubbs.com/web/auth/changeUserInfo',
                method: 'POST'
            },
            saveInfo: {
                url: 'url/web/Artile/report',
                method: 'POST'
            },
            //我发布的帖子
            querylab: {
                url: 'url/web/Artile/report',
                method: 'POST'
            }
        });
    }
})();
