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
  addUserReg.save();
  res.status(201).json({
    message: "success"
  });
});

//geting user by id
router.get('/userReg/:id', (req, res, next) => {
  UserReg.findById(req.params.id, (err, issues) => {
      if(err)
          console.log(err);
      else 
          res.send(issues);
  });
});

//updateing userinfo
router.put('/userReg/edit/:id', (req, res, next) => {
  //UserReg.findByIdAndUpdate(req.params.id, (err, data) => {
  if (!(req.params && req.params.id)) {
    res.status(404).send("Invalid ID");
  } else {
    var edit = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone,
      altphone: req.body.altphone,
      idType: req.body.idType,
      idNumber: req.body.idNumber,
      company: req.body.company
    };

    UserReg.findByIdAndUpdate(req.params.id, { $set: edit }, {new: true}, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.json(data);
      }
    })

    }
  //);
  });


/* END OF Routes and Endpoints for UserReg */





/* Routes and Endpoints for Admin */



/* END OF Routes and Endpoints for Admin */





/* Routes and Endpoints for UserInfo */



/* END OF Routes and Endpoints for UserInfo */




module.exports = router;