const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    type: Array,
    discription: String,
    vote: Number,
    comments: Array
})

module.exports = mongoose.model('products', productSchema);