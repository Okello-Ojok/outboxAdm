var mongoose = require('mongoose');



var registrationSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    altphone: {
        type: String,
        required: true
    },
    idType: {
        type: String,
        required: true
    },
    idNumber: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    roles: {
        type: String,
        required: true
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

    eventname: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventTime: {
        type: String,
        required: true
    },
    speakerId: {
        type: String,
        required: true
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
