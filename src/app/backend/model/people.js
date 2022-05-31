const mongoose = require('mongoose');

const People = mongoose.model('People',{
    fname: { type: String },
    lname: { type: String },
    monum: { type: Number },
    email: { type: String },
    address: { type: String },
    pass: {type: String },
    address: { type: String },
    gender: { type: String, possibleValues: ['male','female','other'] },
    dob: { type: Date }

});

module.exports = People;