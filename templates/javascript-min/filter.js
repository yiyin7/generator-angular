'use strict';

angular.module('<%= grunt.util._.camelize(appname) %>App.filters', [])
.filter('<%= _.camelize(name) %>', ['version', function(version) {
    return function(input) {
        return input;
    };
}]);