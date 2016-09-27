var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://admin:pass@ds061691.mlab.com:61691/global-wish-list',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://vannilaknight:sonic365@ds061691.mongolab.com:61691/global-wish-list',
        port: process.env.PORT || 80
    }
}