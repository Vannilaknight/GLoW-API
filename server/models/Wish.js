var mongoose = require('mongoose');

var wishSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!'},
    img: {type: String, required: '{PATH} is required!'},
    vendor: {type: String, required: '{PATH} is required!'},
    url: {type: String, required: '{PATH} is required!'},
    price: {type: String, required: '{PATH} is required!'},
    userid: {type: String, required: '{PATH} is required!'},
    quantity: {type: Number, required: '{PATH} is required!'},
    rank: {type: Number, required: '{PATH} is required!'},
    colorGroup: {type: Number, required: '{PATH} is required!'}
});
var Wish = mongoose.model('Wish', wishSchema);

function createDefaultWishs() {
    Wish.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Wish.create({
                title: 'made2envy Crochet Lace Open Back Vintage Dress',
                vendor: 'Amazon',
                url: 'http://www.amazon.com/made2envy-Crochet-Vintage-Dress-Black/dp/B00L02V4BG/ref=sr_1_6?s=apparel&ie=UTF8&qid=1428977022&sr=1-6&keywords=cocktail+dress',
                price: '35.99',
                userid: '552c6d68b36a38242ac8ba3f',
                quantity: 1,
                rank: 1,
                colorGroup: 1
            });
        }
    })
}

exports.createDefaultWishs = createDefaultWishs;