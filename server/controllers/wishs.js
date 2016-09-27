var Wish = require('mongoose').model('Wish');

exports.getWishs = function (req, res) {
    Wish.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};

exports.getWishById = function (req, res) {
    Wish.findOne({_id: req.params.id}).exec(function (err, wish) {
        res.send(wish);
    })
};

exports.updateWish = function (req, res) {
    var wishData = req.body;
    console.log(JSON.stringify(req.body) + ' <-- Console thing');

    Wish.update(
        {title: wishData.title},
        {
            title: wishData.title,
            img: wishData.img,
            vendor: wishData.vendor,
            url: wishData.url,
            price: wishData.price,
            userid: wishData.userid,
            quantity: wishData.quantity,
            rank: wishData.rank,
            colorGroup: wishData.colorGroup
        },
        {},
        function (err, record) {
            if (err) {
                console.log(err)
            }
            console.log(record + " <--record create");
        }
    );
    res.send(wishData);
};

exports.createWish = function (req, res) {
    var wishData = req.body;
    wishData = countWishes(wishData);

    setTimeout(function () {
        Wish.create(wishData, function (err) {
            if (err) {
                console.log("Shit Broke");
                res.status(400);
                console.error(err.toString());
                return res.send({reason: err.toString()});
            }
        });
    }, 2000);
    res.send("Finished");
};

exports.removeWish = function (req, res) {
    var wishData = req.body;

    setTimeout(function () {
        Wish.find({_id: wishData.id}).remove().exec(function () {
            fixWishes(wishData.userid);
        });
    }, 2000);
    res.send(wishData);
};