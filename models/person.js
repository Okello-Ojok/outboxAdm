const mongoose = require('mongoose');
const {eventSchema} = require('./event');


const personSchema = new mongoose.Schema({

    // _id: mongoose.Schema.Types.ObjectId,

    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    altphone: {
        type: String
    },
    idType: {
        type: String
    },
    idNumber: {
        type: String
    },
    company: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    occupation: {
        type: String,
        enum: ["Student", "Proffessional", "Other"]
    },

    roles: {
        type: String
    },
    dateJoined: {
        type: Date
    },
    dateOut: {
        type: Date
    },
    memberShipPeriod: {
        type: Number
    },
    cow: {
        type: String,
        enum: ["Yes", "No"]
    },
    locker: {
        type: String,
        enum: ["Yes", "No"]
    },
    key: {
        type: String,
        enum: ["Yes", "No"]
    },
    lockerFee: {
        type: Number
    },
    accessKeyFee: {
        type: Number
    },
    monthlyFee: {
        type: Number
    },
    event: {
        type: eventSchema
    }
    

});

mongoose.model('Person', personSchema, 'users');
exports.personSchema = personSchema;
