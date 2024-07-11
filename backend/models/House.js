const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');


const houseSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Owner',
        required: true,
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },

    name: {
        type: String,
        required: [true, 'Please tell bus name!'],
        trim: true,
        maxlength: [25, 'A bus name must have less or equal then 25 characters'],
        minlength: [6, 'A bus name must have more or equal then 6 characters'],
        unique: true
    },

    province: {
        type: String,
        trim: true,
        required: true,
    },

    city: {
        type: String,
        trim: true,
        required: true,
    },

    lat: {
        type: String,
    },

    lng: {
        type: String,
    },

    postalCode: {
        type: String,
    },

    housePhone: {
        type: String,
    },

    meters: {
        type: Number,
    },

    description: {
        type: String,
    },

    year: {
        type: Number,
    },

    capicity: {
        type: Number,
    },

    startDay: {
        type: Date,
    },

    endDay: {
        type: Date,
    },

    cover: {
        type: String,
    },

    images: [{type:String}],

    houseRoles: {
        type: String,
    },

    critrias: {
        type: String,
    },

    houseType: {
        type: String,
        enum: ["cottage", "apartment", "garden", "villa", "room"]
    },

    floor: {
        type: String,
    },

    options: [{
        type: String,
    }],

    heating: {
        type: String,
    },

    cooling: {
        type: String,
    },

    parking: {
        type: String,
    },

    bill: {
        type: String,
    },

    price: {
        type: String,
    },

    houseNumber: {
        type: String,
    },

    hobbies: {
        type: String,
    },

    enviornment: {
        type: String,
    },

    ownerType: {
        type: String,
    },

    active: {
        type: Boolean,
        default: false,
        required: true
    },
}, { timestamps: true });


const House = mongoose.model('House', houseSchema);

module.exports = House;