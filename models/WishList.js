const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    nama_buku: {
        type: String,
        required: true
    },
    penulis: {
        type: String,
        required: true
    },
    tahun: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('WishList', gameSchema);