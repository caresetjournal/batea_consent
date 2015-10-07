var gulp    = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    fallback: 'index.html',
    port: 8999
  });
});