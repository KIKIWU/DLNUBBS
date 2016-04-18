(function () {
    'use strict';
    angular
        .module('app')
        .factory('utilService', utilService);

    utilService.$inject = [];

    /* @ngInject */
    function utilService(){
        var exports = {
            cleanObj: cleanObj,
            datepickerOptions: datepickerOptions(),
            dateFormat: dateFormat,
            downloadByForm: downloadByForm,
            setCompatibleStyle: setCompatibleStyle
        };

        return exports;

        function cleanObj(params) {
            if(!params){
                return;
            }
            var cleanParams = params;

            angular.forEach(cleanParams, function(value, key) {
                if(!value) {
                    delete cleanParams[key];
                }
            });

            return cleanParams;
        }

        function datepickerOptions() {
            var datepickerOptions = {
                formatDay: 'dd',
                formatMonth: 'MMMM',
                formatYear: 'yyyy',
                formatDayHeader: 'EEE',
                formatDayTitle: 'yyyy/MM',
                formatMonthTitle: 'yyyy',
                datepickerMode: 'day',
                minMode: 'day',
                maxMode: 'year',
                showWeeks: true,
                startingDay: 0,
                yearRange: 20,
                minDate: null,
                maxDate: null,
                shortcutPropagation: false
            };

            return datepickerOptions;
        }

        function dateFormat(Date) {
            if(!Date) {
                return null;
            }

            var year = Date.getFullYear();
            var month = Date.getMonth() + 1;
            var date = Date.getDate();
            var str = year + '-' + month + '-' + date;

            return str;
        }

        function downloadByForm(url, params, target, method) {
            var params = cleanObj(params);
            var method = method || 'post';
            var form = angular.element('<form></form>').attr('action', url).attr('method', method).attr('target', target || '_blank');

            angular.forEach(params, function(value, key) {
                var input = angular.element('<input></input>').attr('type', 'hidden').attr('name', key).attr('value', value);
                form.append(input);
            });

            form.appendTo('body').submit().remove();
        }

        function setCompatibleStyle(ele, attrKey, attrValue) {
            ele.style[attrKey] = attrValue;
            ele.style['webkit' + attrKey] = attrValue;
            ele.style['ms' + attrKey] = attrValue;
            ele.style['Moz' + attrKey] = attrValue;
            ele.style['O' + attrKey] = attrValue;
        }
    }
})();
