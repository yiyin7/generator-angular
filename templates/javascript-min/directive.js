'use strict';

angular.module('<%= grunt.util._.camelize(appname) %>App.directives')
.directive('<%= _.camelize(name) %>', [function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        link: function postLink(scope, element, attrs) {
            element.text('this is the <%= _.camelize(name) %> directive');
        }
    };
}]);