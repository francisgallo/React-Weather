var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('notifier');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch')

// Format error messages

var notify = function(error){
  var massage = 'In': ;
  var title = 'Error';

  if (error.description){
    title += error.description;
  }
  else if (error.message){
    title += error.message;
  }
  if (error.filename){
    var file = error.filename.split('/');
    massage += file[file.length-1];
  }
  if (error.lineNumber){
    massage += '\n0n Line:' + error.lineNumber;
  }
  notifier.notify({title: title, message: message});
};

// Bundle settings

var bundler = watchify(browserify({
  entries: ['./src/app.jsx'],
  trandforms: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true,
}));

// bundle tasks

function bundle(){
  return bundler
  .bundle()
  .on ('error',notify)
  .pipe(source('main.js'))
  ,pipe(gulp.dest('./'))
}
bundler.on('update', bundle);

// Create bundle

gulp.task('build',function(){
  bundle()
});
