(function () {
    'use strict';

    angular
        .module('app')
        .directive('pwCheck', directive);

    directive.$inject = [];

    /* @ngInject */
    function  directive() {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                     ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
})();
