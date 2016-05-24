(function () {
    'use strict';
    angular
        .module('app')
        .factory('homeApiService', homeApiService);

    homeApiService.$inject = ['$resource'];

    /* @ngInject */
    function homeApiService($resource){

//        var preUrl = '/msc/mt/settle_config/travel/:action';
       // var baseUrl = '/msc/mt/:tra/:path';
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
                // url: 'url/web/Artile/detail',
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
            }
        });
        // return {
        //     'login': $resource('http://www.dlnubbs.com/web/Auth/login', null, {method: 'post', ignoreLoadingBar: true}),    
        //     'register': $resource('http://www.dlnubbs.com/web/Auth/register', null, {}),
        //     'user': $resource('http://www.dlnubbs.com/web/Auth/getUserInfo', null, {method: 'post'}),
        //     'getArticleKinds': $resource('http://www.dlnubbs.com/web/ArtileKind/getKind', null, {method: 'post'}),
        //     'getHotArticles': $resource('http://www.dlnubbs.com/web/index/getHotArtile', null, {method: 'post'}),
        //     'detail': $resource('http://www.dlnubbs.com/web/Artile/detail', {}, {method: 'post'}),
        //     'reply': $resource('http://www.dlnubbs.com/web/Artile/replyTo', {}, {method: 'post'}),
        //     'like': $resource('http://www.dlnubbs.com/web/Artile/agree', {}, {method: 'post'}),
        //     'report': $resource('http://www.dlnubbs.com/web/Artile/report', {}, {method: 'post'}),
        //     'getArticleByKind': $resource('http://www.dlnubbs.com/web/Artile/artileList?page=:pagesize', {'pagesize': '@pagesize'}, {method: 'post'})
        // };
    }
})();
