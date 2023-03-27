const replace = require('replace-in-file')
const options = {
    files: 'build/src/app.js',
    from: 'controller";',
    to: 'controller.js";'
}

replace.sync(options)