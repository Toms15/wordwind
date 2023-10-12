const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-webp');

mix.webpackConfig({
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    }
});

mix.ImageWebp({
    from: 'resources/images',
    to: 'images',
})

mix.js("resources/js/home.js", "js");
mix.postCss("resources/css/app.css", "css", [require("tailwindcss")]);
    
// mix.browserSync({
//    proxy: 'https://packword.test', /* Change with your local domain */
//    files: [
//           'css/**/*',
//           'js/**/*'
//    ],
// });

// Enable only for production
// mix.minify('css/app.css');