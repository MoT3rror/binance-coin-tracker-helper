const packager = require('launchui-packager')

packager({
    name: 'MyApp',
    version: '1.0.0',
    entry: './dist/main.min.js',
    out: './packages'
}, function (err, outPath) {
    console.log(err, outPath)
})