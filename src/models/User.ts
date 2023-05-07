const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: {
        type: String,
        default: ''
    },
    username: String,
    status: {
        type: Boolean,
        default: true,
    },
    interests: {
        type:  Array,
        default: [],
    },
    about: {
        type: Object,
        default: {}
    },
    paired: {
        type: Boolean,
        default: false,
    },
    partner: {
        type: String,
        default: '',
    },
    oldPartners: {
        type: Array,
        default: []
    },
    lastLogin: {
        type: String,
        default: Date.now,
    },
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    number: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model("users", userSchema);
