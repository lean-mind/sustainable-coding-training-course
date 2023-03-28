const replace = require('replace-in-file')
const options = {
    files: ['build/src/app.js', 'build/src/init.js'],
    from: ['controller";', 'app";'],
    to:   ['controller.js";', 'app.js";']
}
replace.sync(options)