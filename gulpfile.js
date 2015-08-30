var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('uglify', function() {
  gulp.src('lib/scramble.js')
    .pipe(uglify())
    .pipe(concat('scramble.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['uglify']);
