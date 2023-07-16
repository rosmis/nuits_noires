// webpack.mix.js

let mix = require('laravel-mix');

mix.sass("src/styles/app.scss", "dist").setPublicPath("dist").options({
    processCssUrls: false,
});