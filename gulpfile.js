const gulp = require("gulp");
const themeKit = require("@shopify/themekit");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function (done) {
  gulp
    .src("styles/application.scss")
    .pipe(sass())
    .pipe(gulp.dest("assets"))
    .on("end", done)
    .on("error", done);
});

// Watch task
gulp.task("watch", function () {
  gulp.watch("styles/**/*.scss", gulp.series("sass"));
});

// Default task
gulp.task("default", gulp.series("sass", "watch"));
