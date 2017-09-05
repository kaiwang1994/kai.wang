


var gulp=require("gulp");
var htmlmin=require("gulp-htmlmin")
var uglify = require('gulp-uglify'); 
var bom = require('gulp-bom'); 
var minifyCss = require('gulp-minify-css'); 
var minifyHtml = require('gulp-minify-html'); 
var imagemin = require('gulp-imagemin'); 
var pngquant = require('imagemin-pngquant'); 
var rename = require('gulp-rename');  
var babel = require('gulp-babel');



/*gulp.task("jsTask",function(){
	 gulp.src("src/js/*")
	 	 .pipe(babel({"presets": ["es2015"]}))
	 	 .pipe(uglify())
	 	.pipe(gulp.dest("dest/js"));
});


gulp.task("default",["jsTask"]);
*/

gulp.task('cssTask', function(){
	gulp.src('src/css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});

gulp.task("default",["cssTask"]);
