var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const UserReg = mongoose.model('UserReg');
const UserInfo = mongoose.model('UserInfo');
const Admin = mongoose.model('Admin');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});


/* Routes and Endpoints for UserReg */

//get userRegInfo
router.get('/userReg', (req, res, next) => {
  UserReg.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data);
    }
  });
});


/* END OF Routes and Endpoints for UserReg */





/* Routes and Endpoints for Admin */



/* END OF Routes and Endpoints for Admin */





/* Routes and Endpoints for UserInfo */



/* END OF Routes and Endpoints for UserInfo */




module.exports = router;