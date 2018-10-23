"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("build", gulp.series("css", "html"));
gulp.task("start", gulp.series("build", "server"));


var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
gulp.task("images", function () {
 return gulp.src("source/img/**/*.{png,jpg,svg}")
 .pipe(imagemin([
 imagemin.optipng({optimizationLevel: 3}),
 imagemin.jpegtran({progressive: true}),
 imagemin.svgo()
 ]))
 .pipe(gulp.dest("source/img"));
});

var gulp = require("gulp");
var webp = require("gulp-webp");
gulp.task("webp", function () {
 return gulp.src("source/img/**/*.{png,jpg}")
   .pipe(webp({quality: 90}))
   .pipe(gulp.dest("source/img"));
});

var gulp = require("gulp");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");

gulp.task("sprite", function () {
  return gulp.src("source/img/**/*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("source/img"));
});
