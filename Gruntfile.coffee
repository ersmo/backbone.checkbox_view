
module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    concat:
      dist:
        src: [
          'lib/item_template.js'
          'lib/item_view.js'
          'lib/list_template.js'
          'lib/list_view.js'
        ]
        dest: 'dist/<%= pkg.name %>.js'

    uglify:
      dist:
        src: '<%= concat.dist.dest %>'
        dest: 'dist/<%= pkg.name %>.min.js'

    coffee:
      compile:
        files:
          'lib/item_view.js': 'src/item_view.coffee'
          'lib/list_view.js': 'src/list_view.coffee'

    watch:
      scripts:
        files: ['src/*.coffee', 'src/*.jade']
        tasks: ['coffee', 'jade', 'concat']

    clean: [
      'lib'
      'dist'
    ]

    jade:
      item:
        options:
          client: true
          compileDebug: false
          processName: (filename) ->
            'checkboxItem'
        files:
          'lib/item_template.js': 'src/item_template.jade'
      list:
        options:
          client: true
          compileDebug: false
          processName: (filename) ->
            'checkboxList'
        files:
          'lib/list_template.js': 'src/list_template.jade'


  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-jade'

  grunt.registerTask 'build', [
    'clean'
    'coffee'
    'jade'
    'concat'
    'uglify'
  ]

  grunt.registerTask 'default', [
    'watch'
  ]
