const mongoose = require('mongoose');
const {personSchema} = require('./person')

const eventSchema = new mongoose.Schema({

    eventname: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        default: Date.now
        // required: true
    },
    
    eventPaid: {
        type: String,
        enum: ["Yes", "No"]
    },
    attendee: {
        type: new mongoose.Schema({
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
            occupation: {
                type: String,
                enum: ["Student", "Proffessional", "Other"]
            }
        })
    },

    attendedEvent: {
        type: String,
        enum: ["Yes", "No"]
    },
    facilitators: {
        type: String
    }

});

mongoose.model('Events', eventSchema, 'events');
exports.eventSchema = eventSchema;