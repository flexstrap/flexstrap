process.on('uncaughtException', console.log)

var babelify         = require('babelify'),
    browserify       = require('browserify'),
    chalk            = require('chalk'),
    clean            = require('gulp-clean'),
    concat           = require('gulp-concat'),
    fs               = require('fs'),
    glob             = require('glob'),
    gulp             = require('gulp'),
    gutil            = require('gulp-util'),
    livereload       = require('gulp-livereload'),
    minimist         = require('minimist'),
    mocha            = require('gulp-mocha'),
    nib              = require('nib'),
    nodemon          = require('gulp-nodemon'),
    path             = require('path'),
    runSequence      = require('run-sequence'),
    sh               = require('execSync'),
    source           = require('vinyl-source-stream'),
    sourcemaps       = require('gulp-sourcemaps'),
    stylus           = require('gulp-stylus')

var argv     = minimist(process.argv.slice(2)),
    dest     = gulp.dest,
    sequence = runSequence,
    src      = gulp.src

var watching = function() {

  if(argv._.indexOf('w') > -1 || argv._.indexOf('watch') > -1 || argv._.indexOf('watchify') > -1) {
    return true
  }

  return false

}

gulp.task('b', ['build', 'styles'])

gulp.task('build', function(done) {

  var bundler = browserify({
    bundleExternal: true,
    cache: {},
    debug: true,
    entries: [
      './src/index.js',
    ],
    extensions: [],
    fullPaths: true,
    insertGlobals: false,
    packageCache: {},
    standalone: 'Flexstrap'
  })

  bundler
    .transform(babelify.configure({
      blacklist: ["useStrict"]
    }))
    .bundle()
    .on('error', function() {
      console.log(arguments)
    })
    .pipe(source('flexstrap.js'))
    .pipe(gulp.dest('dist/js/'))
    .on('end', function() {
      console.log('dist/js/flexstrap.js created.')
      done()
    })

})

gulp.task('clean', function(done) {

  /*
  Note, the gulp-clean task is janky
  */
  //src('./dist/**/*', {read: false}).pipe(clean())

  sh.run('rm -rf dist')

  done()

})

gulp.task('styles', ['stylus'])

/*
Note: external sourcemaps are funky atm so they are disabled
*/
gulp.task('stylus', function () {

  return src([
    './bower_components/normalize.css/normalize.css',
    './src/grid/index.styl'
    ])
    .pipe(stylus({
      cache: false,
      import: [
        'nib',
        //path.join(__dirname, './src/gradients/_definitions.styl')
      ],
      /*sourcemap: {
      basePath: 'public/css',
      inline: true,
      sourceRoot: '/'
    },*/
    use: [nib()]
  }))
  /*.pipe(sourcemaps.init({
  loadMaps: true
  }))*/
  .pipe(concat('flexstrap.css'))
  /*.pipe(sourcemaps.write('./public/css', {
  includeContent: false,
  sourceRoot: '/app'
  }))*/
  .pipe(dest('./dist/css'))

})
