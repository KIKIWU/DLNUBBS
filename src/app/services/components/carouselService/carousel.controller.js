(function() {
    'use strict';

    angular
        .module('app')
        .controller('CarouselController', CarouselController);

    CarouselController.$inject = ['$scope', '$uibModalInstance', 'carouselData', 'utilService'];

    /* @ngInject */
    function CarouselController($scope, $uibModalInstance, carouselData, utilService){
        var vm = this;

        vm.slidesData = carouselData.slidesData;
        vm.slideIndex = 0;
        vm.slideItem = carouselData.slidesData[0];
        vm.titleKey = carouselData.titleKey;
        vm.urlKey = carouselData.urlKey;

        /*
        * function
        */
        var _rotate = _rotate;
        var _zoom = _zoom;
        vm.close = close;
        vm.nextImage = nextImage;
        vm.prevImage = prevImage;
        vm.rotateLeft = rotateLeft;
        vm.rotateRight = rotateRight;
        vm.zoomIn = zoomIn;
        vm.zoomOut = zoomOut;


        function close() {
            $uibModalInstance.dismiss();
        }

        function nextImage() {
            vm.slideIndex = (vm.slideIndex + 1) % vm.slidesData.length;
            vm.slideItem = vm.slidesData[vm.slideIndex];
        }

        function prevImage() {
            vm.slideIndex = (vm.slideIndex - 1 + vm.slidesData.length) % vm.slidesData.length;
            vm.slideItem = vm.slidesData[vm.slideIndex];
        }

        function rotateLeft() {
            _rotate(-1);
        }

        function rotateRight() {
            _rotate(1);
        }

        function zoomIn() {
            _zoom(1);
        }

        function zoomOut() {
            _zoom(-1);
        }

        function _rotate(type) {
            var eleAttr = 'rotate(0deg)scale(1)';
            var ele = document.querySelector('.slide-' + vm.slideIndex);
            var attr = ele.style.transform || eleAttr;

            var rotateDeg = parseInt((/rotate\((\S+)deg\)/).exec(attr)[1]) + 90*type;
            var newRotateDeg = "rotate(" + rotateDeg + "deg)";
            var newAttr = attr.replace(/rotate\((\S+)deg\)/, newRotateDeg);

            utilService.setCompatibleStyle(ele, 'transform', newAttr);
        }

        function _zoom(type) {
            var eleAttr = 'rotate(0deg)scale(1)';
            var ele = document.querySelector('.slide-' + vm.slideIndex);
            var attr = ele.style.transform || eleAttr;

            var zoonInRate = parseFloat((/scale\((\S+)\)/).exec(attr)[1]) + 0.1*type;
            zoonInRate = zoonInRate < 1 ? 1 : zoonInRate;
            var newzoonInRate = "scale(" + zoonInRate + ")";
            var newAttr = attr.replace(/scale\((\S+)\)/, newzoonInRate);

            utilService.setCompatibleStyle(ele, 'transform', newAttr);
        }
    }
})();
