<<<<<<< HEAD
var gulp = require ("gulp"),
	livereload = require('gulp-livereload'),
	connect = require ("gulp-connect"),
	opn = require ("opn");
=======
'use strict';
var gulp = require ("gulp"),
	livereload = require('gulp-livereload'),
	connect = require ("gulp-connect"),
	opn = require ("opn"),
	sass = require('gulp-sass');
>>>>>>> 4682ba919081cc30d5203f690011a93e8d7ddf0f

//Запуск сервера с Live Reload
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true,
		port: 8888
<<<<<<< HEAD
});
=======
	});
>>>>>>> 4682ba919081cc30d5203f690011a93e8d7ddf0f
	opn('http://localhost:8888');
});

//Работа с HTML
<<<<<<< HEAD
	gulp.task('html', function (){
	gulp.src('./app/*.html')
		.pipe(connect.reload());	
});
//Работа с CSS
	gulp.task('css', function (){
=======
gulp.task('html', function (){
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});
//Работа с CSS
gulp.task('css', function (){
>>>>>>> 4682ba919081cc30d5203f690011a93e8d7ddf0f
	gulp.src('./app/css/*.css')
		.pipe(connect.reload());
});
//Работа с JS
<<<<<<< HEAD
	gulp.task('js', function (){
=======
gulp.task('js', function (){
>>>>>>> 4682ba919081cc30d5203f690011a93e8d7ddf0f
	gulp.src('./app/js/*.js')
		.pipe(connect.reload());
});

<<<<<<< HEAD
=======
//Sass компиляция

gulp.task('sass', function () {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});



>>>>>>> 4682ba919081cc30d5203f690011a93e8d7ddf0f
//Watch
gulp.task('watch', function() {
	var server = livereload();
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
<<<<<<< HEAD
=======
	gulp.watch('./app/scss/**/*.scss', ['sass']);
>>>>>>> 4682ba919081cc30d5203f690011a93e8d7ddf0f
});

//Задача по умолчанию
gulp.task('default', ['connect', 'watch']);