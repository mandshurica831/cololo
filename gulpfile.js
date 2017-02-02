const gulp = require('gulp');
const concat = require("gulp-concat");

gulp.task('js', function() {
  gulp.src('./src/js/views/**/*.js')
  .pipe(concat('views.js'))
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['js']);
