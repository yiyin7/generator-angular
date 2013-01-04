'use strict';

angular.module('<%= grunt.util._.camelize(appname) %>App.services')
  .service('<%= _.camelize(name) %>', ['version', function <%= _.camelize(name) %>(version) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
