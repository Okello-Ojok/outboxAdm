var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');

const UserReg = mongoose.model('Person');

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

router.post('/userReg/register', (req, res, next) => {
  const addUserReg = new UserReg({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
    
  });
  addUserReg.save((err, doc) => {
    if (!err) {
      res.send(doc);
  } else {
      if (err.code == 11000)
          res.status(422).send(['Duplicate email adrress found.']);
      else
          return next(err);
  }
  });
  
});

router.post('/authenticate', (req, res, next) => {

})

//geting user by id
router.get('/userReg/:id', (req, res, next) => {
  UserReg.findById(req.params.id, (err, issues) => {
      if(err)
          console.log(err);
      else 
          res.send(issues);
  });
});

//geting user by name
router.get('/userReg/fn/:fn', (req, res, next) => {
  UserReg.find({firstname: req.params.fn}, (err, issues) => {
      if(err)
          console.log(err);
      else 
          res.json(issues);
  });
});

//getting user by name
// router.get('/userReg/firstname', (req, res, next) => {
//   // var query = { 'firstname': req.params.firstname};
//   UserReg.findOne({ 'firstname': req.body.firstname }, (err, name) => {
//       if(err)
//           console.log(err);
//       else 
//           res.send(name);
//   });
// });

//updating userinfo
router.put('/userReg/edit/:id', (req, res, next) => {
  if (!(req.params && req.params.id)) {
    res.status(404).send("Invalid ID");
  } else {
    var edit = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
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