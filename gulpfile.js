var gulp = require ("gulp");
var plumber = require ("gulp-plumber")
var postcss = require ("gulp-postcss");
var autoprefixer = require ("autoprefixer");
var minify = require ("gulp-csso");
var rename = require ("gulp-rename")

gulp.task ("style", function() {
  gulp.src ("./style.css")
    .pipe (postcss([
      autoprefixer()
    ]))
    .pipe (gulp.dest ("./cssmin"))
    .pipe (minify ())
    .pipe (rename ("style.min.css"))
    .pipe (gulp.dest ("./cssmin")) 
})