const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const {eventSchema} = require('./event');


const personSchema = new mongoose.Schema({


    firstname: {
        type: String,
        required: "FullName can\'t be empty"
    },
    lastname: {
        type: String,
        required: "FullName can\'t be empty"
    },
    email: {
        type: String,
        required: "Email can\'t be empty",
        unique: true
    },   
    password: {
        type: String, 
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 characters long']
    },
    saltSecret: String 

});

//email verification
// Custom validation for email
personSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

personSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            user.saltSecret = salt;
            next();
        });
    });
});

module.exports = mongoose.model('Person', personSchema, 'auth');
// exports.personSchema = {personSchema};
