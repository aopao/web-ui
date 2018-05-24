var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del');

// 默认任务
gulp.task('default',['del', 'scss', 'watchScss']);

// sass编译
gulp.task('scss', function(){
    gulp.src('./assets/scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./assets/css'))
    gulp.src('./assets/scss/*.css')
        .pipe(gulp.dest('./assets/css'))
})

// 监听scss文件修改
gulp.task('watchScss',function(){
    gulp.watch('./assets/scss/**',['scss'])
})

// 构建前先删除css文件
gulp.task('del', function () {
    del('./assets/css');
})

