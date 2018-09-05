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

//Add userRegInfo
router.post('/userReg/add', (req, res, next) => {
  const addUserReg = new UserReg({

    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    altphone: req.body.altphone,
    idType: req.body.idType,
    idNumber: req.body.idNumber,
    company: req.body.company

  });

  addUserReg.save((err, data) => {
    if (err) {
      res.send("Failed to add user reg info");
    } else {
      res.send("User successfully added");
    }
  });

});


/* END OF Routes and Endpoints for UserReg */





/* Routes and Endpoints for Admin */



/* END OF Routes and Endpoints for Admin */





/* Routes and Endpoints for UserInfo */



/* END OF Routes and Endpoints for UserInfo */




module.exports = router;