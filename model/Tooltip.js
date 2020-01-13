const mongoose = require('mongoose');

// use mongoose to generate schema
const Schema = mongoose.Schema;

// create schema for webscrape deals model
const TooltipSchema = new Schema({
    note: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    }
});

// set Deals collection and export model
const Tooltip = mongoose.model('Tooltip', TooltipSchema);

module.exports = Tooltip;