var mongoose = require("mongoose");

// This will be the schema for the hands to save to the DB

var outcomeSchema = new mongoose.Schema({
   hand: String,
   board: String,
   hi_card: Number,
   pair: Number,
   two_pair: Number,
   three_kind: Number,
   straight: Number,
   flush: Number,
   full_house: Number,
   four_kind: Number,
   straight_flush: Number,
});

module.exports = mongoose.model("outcome", outcomeSchema);