'use strict';

angular.module('<%= grunt.util._.camelize(appname) %>App.filters')
.filter('<%= _.camelize(name) %>', function() {
    return function(input) {
        return input;
    };
});