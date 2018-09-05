var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const UserReg = mongoose.model('UserReg');



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
    company: req.body.company,
    userName: req.body.userName,
    password: req.body.password,
    roles: req.body.roles,
    dateJoined: req.body.dateJoined,
    dateOut: req.body.dateOut,
    memberShipPeriod: req.body.memberShipPeriod,
    cow: req.body.cow,
    locker: req.body.locker,
    key: req.body.key,
    lockerFee: req.body.lockerFee,
    accessKeyFee: req.body.accessKeyFee,
    monthlyFee: req.body.monthlyFee
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
      company: req.body.company,
      userName: req.body.userName,
      password: req.body.password,
      roles: req.body.roles,
      dateJoined: req.body.dateJoined,
      dateOut: req.body.dateOut,
      memberShipPeriod: req.body.memberShipPeriod,
      cow: req.body.cow,
      locker: req.body.locker,
      key: req.body.key,
      lockerFee: req.body.lockerFee,
      accessKeyFee: req.body.accessKeyFee,
      monthlyFee: req.body.monthlyFee
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

  //delete route
  router.delete('/userReg/delete/:id',(req, res) => {
    UserReg.findByIdAndRemove( req.params.id, (err, data) => {
     if(err)
             console.log(err);
         else 
             res.send(data);
    }) 
 });
;










module.exports = router;