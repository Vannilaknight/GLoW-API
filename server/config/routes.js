var auth = require('./auth'),
    users = require('../controllers/users'),
    wishs = require('../controllers/wishs');

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/users',
        // auth.requiresRole('admin'),
        users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    //app.post('/api/newWish', wishs.createWish);
    //app.post('/api/removeWish', wishs.removeWish);
    //app.post('/api/updateWish', wishs.updateWish);

    //app.get('/api/wishs', wishs.getWishs);

    app.post('/login', function(req, res, next){
        auth.authenticate(req, res, next);
    });

    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });
};
