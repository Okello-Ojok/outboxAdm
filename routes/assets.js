var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const Assets = mongoose.model('Assets');


//Routes and Endpoints for Assets

//Get all assets
router.get('', (req, res, next) => {
  Assets.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data);
    }
  });
});




//Get asset by id
router.get('/:id', (req, res, next) => {
  if (req.params && req.params.id) {
    Assets.findById(req.params.id, (err, data) => {
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




//Add asset
router.post('/assets', (req, res, next) => {
  let addAsset = new Assets({

    tagNumber: req.body.tagNumber,
    serialNumber: req.body.serialNumber,
    assetClass: req.body.assetClass,
    itemName: req.body.itemName,
    manufacturerSeller: req.body.manufacturerSeller,
    color: req.body.color,
    numberOfItems: req.body.numberOfItems,
    itemDescription: req.body.itemDescription,
    owner: req.body.owner,
    category: req.body.category,
    dateOfPurchase: req.body.dateOfPurchase,
    purchasePrice: req.body.purchasePrice
  })
  addAsset.save((err, data) => {
    if (err) {
      res.send("Failed to add asset");
    } else {
      res.send("Asset successfully added");
    }
  });
});





//Update asset
router.put('/edit/:id', (req, res, next) => {
  if (!(req.params && req.params.id)) {
    res.status(404).send("Invalid ID");
  } else {
    let edit = {
      tagNumber: req.body.tagNumber,
      serialNumber: req.body.serialNumber,
      assetClass: req.body.assetClass,
      itemName: req.body.itemName,
      manufacturerSeller: req.body.manufacturerSeller,
      color: req.body.color,
      numberOfItems: req.body.numberOfItems,
      itemDescription: req.body.itemDescription,
      owner: req.body.owner,
      category: req.body.category,
      dateOfPurchase: req.body.dateOfPurchase,
      purchasePrice: req.body.purchasePrice
    };
    Assets.findByIdAndUpdate(req.params.id, {
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

// END OF Routes and Endpoints for Assets

//Delete assets


module.exports = router;
