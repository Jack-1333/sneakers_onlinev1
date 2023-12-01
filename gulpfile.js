const { src, dest, watch, series, parallel } = require('gulp'); //Llama los archivos de gulp

//Compilar css
const sass = require('gulp-sass')(require('sass')); //Llama a los archivos de gulp-sass y sass
const plumber = require('gulp-plumber');
// const cache = require('gulp-cache')
// const webp = require('gulp-webp')
// const avif = require('gulp-avif')
//Imagemin
const imagemin = require('gulp-imagemin');


function css( done ) {
    
    src('src/scss/app.scss') //Identificar archivo principal
        .pipe(plumber())//Si tiene problemas no se detiene
        .pipe( sass() )      //Compilar Sass
        .pipe( dest('build/css'))  //Exportar o guardar en una ubicacion

    done();
}
function imagenes( done ) {
    src('src/img/**/*')
        .pipe( imagemin({optimizationLevel: 3}) )
        .pipe( dest('build/img')) 

    done();
}
function dev(done) {
    // watch('src/scss/app.scss', css) //Escucha solo los cambios en app
    watch('src/scss/**/*.scss', css) //Escucha todos los archivos y carpetas de scss


    done();
}


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;

exports.default = series(imagenes, css, dev);
exports.dev = parallel(imagenes, dev);//ejecuntando la funcion dev e images en paralelo