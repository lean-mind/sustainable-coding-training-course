const replace = require('replace-in-file')
const options = {
    files: ['build/src/*.js'],
    from: new RegExp(' from "(.*)";', 'g'),
    to: (match) =>  [match.replace('";', "") + '.js";']
}
replace.sync(options)