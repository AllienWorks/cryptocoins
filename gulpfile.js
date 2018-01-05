//https://nodejs.org/api/fs.html
var fs = require("fs");

//https://github.com/sindresorhus/del
var del = require("del");

//https://github.com/gulpjs/gulp
var gulp = require("gulp");

//https://github.com/hparra/gulp-rename
var rename = require("gulp-rename");

//https://github.com/ben-eb/gulp-svgmin
var svgmin = require("gulp-svgmin");

//https://github.com/cjroth/gulp-filelist
var filelist = require("gulp-filelist");

//https://github.com/ThierrySpetebroot/gulp-fn
var gulpFn  = require("gulp-fn");

//https://github.com/coderhaoxin/gulp-file-include
var fileinclude = require("gulp-file-include");

//https://github.com/dlmanning/gulp-sass
var sass = require("gulp-sass");

//utility function for mass export of @quoid's master sketch file, naming convention is "<Name> <SYMBOL>"
gulp.task("rename", function() {
    gulp.src("./temp/**/*.svg")
    .pipe(rename(function(path) {
        var name = path.basename.split(" ")[0].toLowerCase();
        var symbol = path.basename.split(" ")[1].slice(1, -1).toLowerCase();
        if (path.dirname === "alt") {
            path.basename = name + "_" + symbol + "-alt";
        } else {
            path.basename = name + "_" + symbol;
        }
    }))
    .pipe(gulp.dest("./svg"))
});

gulp.task("optimize", function() {
    console.log("\x1b[32m%s\x1b[0m", "Optimizing SVG files...");
    gulp.src("./svg/**/*.svg")
    .pipe(svgmin({
        plugins: [{
            removeTitle: true
        }]
    }))
    .pipe(gulp.dest("./svg"));
});

gulp.task("json", function() {
    console.log("\x1b[32m%s\x1b[0m", "Creating filename array from files in /svg folder...");
    gulp.src("./svg/original/*.svg")
        .pipe(filelist("icons.json", {
            flatten: true,
            removeExtensions: true
        }))
        .pipe(gulp.dest("./src"));
});

gulp.task("coins2sass", function() {
    gulp.src("./src/icons.json")
        .pipe(gulpFn(function(file) {
            var data = JSON.parse(file.contents.toString("utf8"));
            var text = "";
            for (var key in data) {
                var coin = data[key];
                if (key == 0) {
                    text += '$coins:' + '"' + coin +'",';
                } else if (key == Object.keys(data).length - 1) {
                    text += '"' + coin +'";';
                } else {
                    text += '"' + coin +'",';
                }
            }
            fs.writeFile("./src/coins.scss", text, function(err) {
                if (err) {
                    console.log("\x1b[31m%s\x1b[0m", "Failed to write to coins.scss file");
                } else {
                    console.log("\x1b[32m%s\x1b[0m", "Sucessfully wrote to coins.sccs file");
                    gulp.start("coins2html");
                }
            })
        }));
});

gulp.task("coins2html", function() {
    gulp.src("./src/icons.json")
        .pipe(gulpFn(function(file) {
            var data = JSON.parse(file.contents.toString("utf8"));
            var el = "";
            for (var key in data) {
                var coin = data[key];
                var name = data[key].split("_")[0];
                var symbol = data[key].split("_")[1];
                el += '<div class="cc ' + symbol + '"><span>' + name + ' (' + symbol + ')</span></div><div class="cc ' + symbol + '-alt"><span>' + name + ' (' + symbol + ') alt</span></div>';
            }
            fs.writeFile("./src/coins.html", el, function(err) {
                if (err) {
                    console.log("\x1b[31m%s\x1b[0m", "Failed to write to coins.html file");
                } else {
                    console.log("\x1b[32m%s\x1b[0m", "Sucessfully wrote to coins.html file");
                    gulp.start("include");
                    gulp.start("sass");
                }
            })
        }));
});

gulp.task("include", function() {
    console.log("\x1b[32m%s\x1b[0m", "Including necessary files...");
    gulp.src(["./src/index.html"])
        .pipe(fileinclude({
            prefix: "@@",
            basepath: "@root"
        }))
        .pipe(gulp.dest("./demo"));
});

gulp.task("sass", function() {
    console.log("\x1b[32m%s\x1b[0m", "Converting SASS to CSS...");
    return gulp.src("./src/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./demo"));
});

gulp.task("clean", function() {
    console.log("\x1b[31m%s\x1b[0m", "Removing files...");
    return del([
        "./src/icons.json",
        "./src/coins.scss",
        "./src/coins.html",
        "./demo/index.html",
        "./demo/style.css"
    ]);
});

gulp.task("build", ["coins2sass"]);