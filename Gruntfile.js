
module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.initConfig({
    clean: {
      build: {
        src: ['dist'],
      },
    },
    jshint: {
      app: [
          'src/public/**/*.js'
        ]
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/*.js',
          dest: 'dist'
        }],
      }
    },
    jscs: {
      app: [
        'src/public/**/*.js',
      ],
      server: [
        'app.js',
      ],
      gruntfile: [
        'Gruntfile.js',
      ],
      options: {
        config: '.jscsrc',
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/*.html',
          dest: 'dist/',
        },
      ],
      },
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      options: {
        files: ['src/tests/**/*.js']
      }
    },
    protractor: {
      options: {
        configFile: 'protractor.conf.js', // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        },
        capabilities: {
          'browserName': 'Firefox'
        },
      },
      all: {// Grunt requires at least one target to run so you can simply put 'all: {}' here too.
      },
    },
  });
  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', [
    'clean', 'jshint', 'jscs', 'uglify', 'htmlmin'/*,'karma'*/,'protractor'
  ]);
};
