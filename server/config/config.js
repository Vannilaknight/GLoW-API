var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/global-wish-list',
        rootPath: rootPath,
        port: process.env.PORT || 3031
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/global-wish-list',
        port: process.env.PORT || 80
    }
}
