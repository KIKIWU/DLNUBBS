(function () {
    'use strict';

    angular
        .module('app')
        .constant('$', window.$)
        .constant('_', window._)
        .run(['$state', '$stateParams', '$rootScope', initializeApp])
        .config(['$stateProvider', '$urlRouterProvider', '$provide', '$httpProvider', 'cfpLoadingBarProvider', configuration]);

    function initializeApp($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

    function configuration($stateProvider, $urlRouterProvider, $provide, $httpProvider, loadingBar) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'Home'
            })
            .state('home.detail', {
                url: '/detail/:id',
                templateUrl: '/app/home/detail/arcticleDetail.html',
                controller: 'HomeDetailController',
                controllerAs: 'HomeDetail'
            })
            
            .state('login', {
                url: '/login',
                templateUrl: '/app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'Login'  
            })
            .state('register', {
                url: '/register',
                templateUrl: '/app/register/register.html',
                controller: 'RegisterController',
                controllerAs: 'Register'  
            })
            .state('root', {
                url: '/msc',
                templateUrl: '/app/biz/bizroot.html'
            })
            .state('root.biz', {
                url: '/biz',
                views: {
                    'navView': {
                        templateUrl: '/app/layout/navigation/navigation.html',
                        controller: 'NavigationController',
                        controllerAs: 'Navigation'
                    },
                    'siderView': {
                        templateUrl: '/app/layout/sider/sider.html',
                        controller: 'SiderController',
                        controllerAs: 'Sider'
                    },
                }
            })


        $urlRouterProvider.otherwise("/home");

        $provide.factory("httpInterceptor", ["$q", 'httpRequestService', '$injector', function ($q, httpRequestService, $injector) {
            return {
                'request': function (config) {

                    var copyConfig = angular.copy(config);

                    copyConfig = httpRequestService.cleanRequestParams(copyConfig);

                    return copyConfig || $q.when(copyConfig);
                },
                'requestError': function (rejection) {
                    //console.log("requestError");
                    return $q.reject(rejection);
                },

                'response': function (response) {
                    var dialogService = $injector.get('dialogService');

                    if (response.data.code !== undefined) {
                        // not login
                        if (response.data.code === -2) {
                            window.location.href = "/msc/mt/login?continue=" + window.encodeURIComponent(window.location.href);
                        } else if (response.data.code === -3) {
                            dialogService.alert({title: '无访问权限', message: response.data.msg});
                        } else if (response.data.code === -1) {
                            dialogService.alert({title: '请求出错', message: response.data.msg});
                        }
                    }

                    return response || $q.resolve(response);
                },
                'responseError': function (rejection) {
                    //console.log(rejection.config);

                    var dialogService = $injector.get("dialogService");
                    if(rejection.status >= 500) {
                        dialogService.alert({title: '系统更新', message: '系统正在升级..., 请稍后访问'});
                    }

                    return $q.reject(rejection);
                }

            };
        }]);

        $httpProvider.interceptors.push('httpInterceptor');
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        // $httpProvider.defaults.transformRequest = function(data){
        //    if (data === undefined) {
        //        return data;
        //    }
        //    return $.param(data);
        // }

        loadingBar.spinnerTemplate = '<div class="loading-bar"><span class="fa fa-spinner loading-icon">加载中...</span></div>';
    }
})();
