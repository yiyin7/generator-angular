'use strict';

myApp.directive('<%= _.camelize(name) %>', [function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        link: function postLink(scope, element, attrs) {
            element.text('this is the <%= _.camelize(name) %> directive');
        }
    };
}]);