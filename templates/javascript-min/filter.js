'use strict';

myApp.filter('<%= _.camelize(name) %>', ['version', function(version) {
    return function(input) {
        return input;
    };
}]);