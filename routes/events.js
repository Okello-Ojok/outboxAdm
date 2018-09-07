var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const Events = mongoose.model('Events');


router.post('/add',(req, res) =>{
  // register new event
  // read from the form
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
  //get all records in the database
  var result = Events.find({},function(err, docs){
    if (err) throw err
    res.send(docs)
  })
});

router.get('/:eventname', (req,res)=>{
  // get specific item
  // error handling
  var result = Events.findOne({eventname:req.params.eventname}, (err, doc)=>{
    res.json({"results":doc, "status":"success"})
  })
})

router.put('/edit/:id', (req, res) => {
  var results = Events.findByIdAndUpdate(req.params.id,
                                        {$set: {eventname:"Outbox"}},
                                        (err, doc) =>{
                                          if (err) throw err
                                          res.json({"results":doc})
                                        })

})

router.delete('/delete/:id',(req,res) =>{
  var results = Events.findByIdAndRemove(req.params.id, (err, doc) =>{
    if (err) throw err
    doc = "Event deleted"
    res.json({"message":doc})
  })
})







module.exports = router;
