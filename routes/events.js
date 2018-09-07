var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const Events = mongoose.model('Events');

// register new event
router.post('/add',(req, res) =>{
  // read form the form
  var eventName = req.body.eventName
  var eventDate = req.body.eventDate
  var eventTime = req.body.eventTime
  var speaker = req.body.speaker

  // create a document instance from the model
  var events = new Events({
    eventname:eventName,
    eventDate:eventDate,
    eventTime:eventTime,
    speakerId: speaker
  })
  // save the instance
  events.save((err, docs)=>{
  if (err) throw err
  res.json({"results":docs})
  })
});

router.get('/', function(req, res, next){
  var result = Events.find({},function(err, docs){
    // if (err) throw err
    res.send(docs)
  })
});












module.exports = router;
