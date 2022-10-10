const {src, dest, series, watch } = require('gulp');
const concat =require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


//создаем первую таск (задачу) для стилей 

const styles = () => {
    return src('src/style/**/*.css')
    .pipe(concat('style.css'))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist'));
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}
// exports.html = htmlMinify;
// exports.styles = styles;
exports.default = series(styles, htmlMinify);

// экспортируем тасков 
// npm i gulp gulp-cli --save-dev
// npm i -D gulp-concat
//npx gulp styles
//npx gulp html
//создаем задачу для html

//задача на некст пару инициализировать проект, создать сорс и по макету определится по секциям
//у всех должна быть десктопная версия, в первую очередь на телефон 
