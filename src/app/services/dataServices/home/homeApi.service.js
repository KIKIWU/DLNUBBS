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
            /**
            * 获取文章列表
            */
            getArticles: {
                url: 'http://www.dlnubbs.com/web/Artile/getList',
                method: 'POST',
            },
            /**
            *获取文章类型 POST
            */
            getArticleKinds: {
                url: 'http://www.dlnubbs.com/web/ArtileKind/getKind',
                method: 'POST',
            }
        });
    }
})();
