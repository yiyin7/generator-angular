'use strict';

angular.module('<%= grunt.util._.camelize(appname) %>App.services')
  .service('<%= _.camelize(name) %>', function <%= _.camelize(name) %>() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
