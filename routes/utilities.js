var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const Utilities = mongoose.model('Utilities');



//Routes and Endpoints for Utilities

//Get all Utilities
router.get('/', (req, res, next) => {
    Utilities.find((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.json(data);
      }
    });
  });
  
  
  
  
  //Get Utilities by id
  router.get('/:id', (req, res, next) => {
    if (req.params && req.params.id) {
        Utilities.findById(req.params.id, (err, data) => {
        if (data) {
          res.json(data);
        } else {
          res.send(err)
        }
      })
    } else {
      res.send("ID not found");
    }
  });
  
  
  
  
  //Add Utilities
  router.post('/', (req, res, next) => {
    let addUtility = new Utilities({
  
      item: req.body.item,
      unitPrice: req.body.unitPrice,
      quantity: req.body.quantity,
      dateOfPurchase: req.body.dateOfPurchase,
      quantityConsumed: req.body.quantityConsumed,
      availabity: req.body.availabity
     
    })
    addUtility.save((err, data) => {
      if (err) {
        res.send("Failed to add Utility");
      } else {
        res.send("Utility successfully added");
      }
    });
  });
  
  
  
  
  
  //Update Utility
  router.put('/edit/:id', (req, res, next) => {
    if (!(req.params && req.params.id)) {
      res.status(404).send("Invalid ID");
    } else {
      let edit = {
        item: req.body.item,
        unitPrice: req.body.unitPrice,
        quantity: req.body.quantity,
        dateOfPurchase: req.body.dateOfPurchase,
        quantityConsumed: req.body.quantityConsumed,
        availabity: req.body.availabity
      };
      Utilities.findByIdAndUpdate(req.params.id, {
        $set: edit
      }, {
        new: true
      }, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      })
  
    }
  })

  //Delete Utility
router.delete('/delete/:id', (req, res, next) => {
    if (!(req.params && req.params.id)) {
      res.status(400).json({'message': 'Bad request'});
    } else {
      Utilities.findByIdAndRemove(req.params.id, (err, data) => {
        if (data) {
          res.status(200).json('Utility successfully deleted');
        } else {
          res.send(err);
        }
      })
    }
  })
  
  // END OF Routes and Endpoints for Utility


module.exports = router;