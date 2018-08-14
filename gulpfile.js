"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const changed = require("gulp-changed");
const minifyCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const src_scss = "./src/Assets/scss/**/*.scss";
const dest_css = "./src/Assets/css";

gulp.task("compile_scss", function() {
  return gulp
    .src(src_scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed(dest_css))
    .pipe(gulp.dest(dest_css));
});

gulp.task("watch_scss", function() {
  gulp.watch(src_scss, ["compile_scss"]);
});

gulp.task("default", ["watch_scss"]);
