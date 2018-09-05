var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const Utilities = mongoose.model('Utilities');
const Consumption = mongoose.model('Consumption');
const Events = mongoose.model('Events');
const Assets = mongoose.model('Assets');
const Services = mongoose.model('Services');
const Payments = mongoose.model('Payments');
const Branding = mongoose.model('Branding');
/*const UserReg = mongoose.model('UserReg');*/
/*const Admin = mongoose.model('Admin');*/
/*const UserInfo = mongoose.model('UserInfo');*/

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });






module.exports = router;
