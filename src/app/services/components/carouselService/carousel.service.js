(function () {
    'use strict';
    angular
        .module('app')
        .factory('carouselService', carouselService);

    carouselService.$inject = ['$uibModal'];

    /* @ngInject */
    function carouselService($uibModal){
        var exports = {
            open: open
        };


        return exports;

        var _makeCarousel = _makeCarousel;
        ////////////////

        function open(data, templateUrl, titleKey, urlKey) {
            var templateUrl = templateUrl || '/app/services/components/carouselService/carousel.html';
            var data = {
                slidesData: data,
                titleKey: titleKey,
                urlKey: urlKey
            }

            return _makeCarousel(templateUrl, data);
        }

        function _makeCarousel(templateUrl, data, size, animationsEnabled){
            var modalInstance = $uibModal.open({
                animation: animationsEnabled || false,
                //template: $templateCache.get(templateUrl),
                templateUrl: templateUrl,
                controller: 'CarouselController',
                controllerAs: 'Carousel',
                size: size || "md",
                resolve: {
                    carouselData: function () {
                        return data;
                    }
                }
            });

            return modalInstance;
        }
    }
})();
