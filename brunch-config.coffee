exports.config =
  paths:
    public: 'public'
  files:
    javascripts:
      joinTo:
        'app.js': /^app/

    stylesheets:
      joinTo:
        'app.css': /^app\/styles/

    templates:
      joinTo:
        'app.js'

  plugins:
    jshint:
      pattern: /^app\/.*\.js$/

  sourceMaps: true
