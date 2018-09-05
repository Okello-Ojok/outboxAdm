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
router.post('', (req, res, next) => {
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
router.put('/:id', (req, res, next) => {
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
    
  }
})






//Routes and Endpoints for Branding










//Routes and Endpoints for Consumption








//Routes and Endpoints for Events








//Routes and Endpoints for Utilities







//Routes and Endpoints for Payments








//Routes and Endpoints for Services









module.exports = router;
