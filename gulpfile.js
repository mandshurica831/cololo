const gulp = require('gulp');
const concat = require("gulp-concat");

gulp.task('js', function() {
  //views
  gulp.src('./src/js/views/**/*.js')
  .pipe(concat('views.js'))
  .pipe(gulp.dest('./public/js/'));
  //common
  gulp.src('./src/js/common/**/*.js')
  .pipe(concat('common.js'))
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['js']);
