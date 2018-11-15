var mongoose = require('mongoose');
// var Schema = mongoose.Schema;



var registrationSchema = new mongoose.Schema({

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
    eventAtt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }
});



var utilitySchema = new mongoose.Schema({

    item: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    dateOfPurchase: {
        type: Date,
        default: Date.now,
        required: true
    },
    quantityConsumed: {
        type: Number,
        required: true
    },
    availabity: {
        type: Number,
        required: true
    }

});




var eventSchema = new mongoose.Schema({

    // _id: mongoose.Schema.Types.ObjectId,
    // _id: Schema.Types.ObjectId,

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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserReg'
    },

    attendedEvent: {
        type: String,
        enum: ["Yes", "No"]
    },
    facilitators: {
        type: String
    }


});



var assetSchema = new mongoose.Schema({

    tagNumber: {
        type: String
    },
    serialNumber: {
        type: String
    },
    assetClass: {
        type: String
    },
    itemName: {
        type: String,
        required: true
    },
    manufacturerSeller: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    numberOfItems: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String
    },
    owner: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateOfPurchase: {
        type: Date
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        enum: ["Good", "Very Good", "Poor", "Very Poor"],
        required: true
    },
    commentsCurrent: {
        type: String,
        required: true
    },
    itemsTaken: {
        type: String,
        enum: ["Yes", "No"],
        required: true
    },
    dateTaken: {
        type: Date
    },
    dateReturned: {
        type: Date
    },
    commentsonReturn: {
        type: String,
        required: true
    }

});





mongoose.model('UserReg', registrationSchema, 'users');
mongoose.model('Utilities', utilitySchema, 'utilities');
mongoose.model('Events', eventSchema, 'events');
mongoose.model('Assets', assetSchema, 'assets');
