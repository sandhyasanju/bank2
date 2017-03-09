var mongoose = require("mongoose");
var url = "mongodb://innobank:innobank@ds123400.mlab.com:23400/innobank2";
mongoose.Promise = require('bluebird');

//db connection
var db = mongoose.createConnection(url, function(err) {
    if (err) {
        console.log("error in connecting to database");
    } else {
        console.log("successfully connected to database");
    }
});

var inno_bank_data = mongoose.Schema({
    accountNumber: String,
    transfered: [{
        toAccountNumber: Number,
        toAccountHolderName: String,
        Amount: Number,
        date: Date,
    }],
    received: [{
        fromAccountNumber: Number,
        fromAccountHolderName: String,
        Amount: Number,
        date: Date,
    }],
});

var data = mongoose.model("inno_bank_data", inno_bank_data);
module.exports = data;