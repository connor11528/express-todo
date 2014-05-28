'use strict';

// use Grunt to inject bower libraries.. that's it. for now.
// ==========================================================

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take
  require('time-grunt')(grunt);

  grunt.initConfig({

    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'public'
    },

    // inject bower libraries into index.html
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    }
  });

  grunt.registerTask('build', [
    'bower-install'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
