var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var _ = require('lodash');


const UserReg = mongoose.model('UserReg');
const Events = mongoose.model('Events');


// Endpoint to create an event

router.post('/create-event', (req, res, next) => {

  let event = new Events({
    // _id: mongoose.Types.ObjectId(),
    eventname: req.body.eventname,
    eventDate: req.body.eventDate,
    eventPaid: req.body.eventPaid,
    facilitators: req.body.facilitators,
    attendee: req.body.attendee
  })

  let newDate = new Date(event.eventDate)
  newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset() * -1);
  event.eventDate = newDate;


  event.save((err, data) => {
    if (err) {
      res.send({
        message: "Failed to add event"
      })
    } else {
      res.send({
        message: "Event successfully added"
      });
    }
  })
})


//Endpoint to Update events
router.put('/edit-event/:id', (req, res, next) => {
  if (!(req.params && req.params.id)) {
    res.status(404).send("Invalid ID");
  } else {
    let edit = {
      eventname: req.body.eventname,
      eventDate: req.body.eventDate,
      eventPaid: req.body.eventPaid,
      facilitators: req.body.facilitators
    };
    Events.findByIdAndUpdate(req.params.id, {
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

// Get all events data
router.get('', (req, res, next) => {
  Events.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data);
      console.log(data)
    }
  }).sort('eventDate');
});



//Get events of first five dates from now

const eventsProjection = 'eventname eventDate';

// GET list of public events starting in the future
router.get('/five', (req, res) => {
  Events.find({
    eventDate: {
      $gte: new Date()
    }
  }, eventsProjection, (err, events) => {
    let eventsArr = [];
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (events) {
      events.forEach(event => {
        eventsArr.push(event);
      });
    }
    res.send(eventsArr);
  }).sort('eventDate').limit(5);
});


// Count all events created
router.get('/countevents', (req, res, next) => {
  Events.countDocuments({}, (err, total) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    if (total) {
      console.log(total)
      res.send((total).toString())

    }
  })

})


//Delete event only and leave attendees
// router.delete('/:id', (req, res, next) => {
//     if (!(req.params && req.params.id)) {
//         res.status(400).json({
//             'message': 'Bad request'
//         });
//     } else {
//         Events.findByIdAndRemove(req.params.id, (err, data) => {
//             if (data) {
//                 res.status(200).json('Event successfully deleted');
//             } else {
//                 res.send(err);
//             }
//         })
//     }
// });


// Delete event and all associated attendees
router.delete('/event/:id', (req, res) => {
  Events.findById(req.params.id, (err, event) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    if (!event) {
      return res.status(400).send({
        message: 'Event not found'
      });
    }
    UserReg.find({
      eventAtt: req.params.id
    }, (err, attendees) => {
      if (attendees) {
        attendees.forEach(attendee => {
          attendee.remove();
        });
      }
      event.remove(err => {
        if (err) {
          return res.status(500).send({
            message: err.message
          });
        }
        res.status(200).send({
          message: 'Event and attendees successfully deleted.'
        })
      });
    });
  });
});



// Get event by id
// router.get("/id/:id", (req, res, next) => {
//   Events.findById(req.params.id).then(data => {
//     if (data) {
//       res.status(200).json(data);
//     } else {
//       res.status(404).json({
//         message: "Event not found!"
//       });
//     }
//   });
// });




// GET event by event ID
router.get('/event/:id', (req, res) => {
  Events.findById(req.params.id, (err, event) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      });
    }
    if (!event) {
      return res.status(400).send({
        message: 'Event not found.'
      });
    }
    res.send(event);
  });
});




///////////EVENT ATTENDEES



// Endpoint to create an attendee
router.post('/event-attendee', (req, res, next) => {


  let addAttendee = new UserReg({

    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    occupation: req.body.occupation,
    eventAtt: req.body.eventAtt
  });
  addAttendee.save((err, data) => {
    if (err) {
      res.send({
        message: "Failed to add attendee"
      });
      console.log(err.message);

    } else {
      res.send({
        message: "Attendee successfully added"
      });
      console.log(data);

    }
  });

});


//Endpoint to edit an existing attendee
router.put('/event-attendee/:id', (req, res, next) => {
  if (!(req.params && req.params.id)) {
    res.status(404).send("Invalid ID");
  } else {
    let edit = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      occupation: req.body.occupation
    };
    UserReg.findByIdAndUpdate(req.params.id, {
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


// Endpoint to get event attendees
router.get('/attendees', (req, res, next) => {
  UserReg.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data);
      console.log(data)
    }
  });
});



// GET Attendees by event ID
router.get('/:eventAtt/attendees', (req, res) => {

  UserReg.find({
      eventAtt: req.params.eventAtt
    }, (err, attendees) => {
      let attendeesArr = [];
      if (err) {
        return res.status(500).send({
          message: err.message
        });
      }
      if (attendees) {
        attendees.forEach(attendee => {
          attendeesArr.push(attendee);
          console.log(attendeesArr);
        });
      }
      res.send(attendeesArr);
    })
    // .populate('eventAtt')
    .select('firstname lastname email gender occupation phone');
});



// Check event date if it exists
// router.get('/checkdates', (req, res) => {

//     Date.prototype.addDays = function (days) {
//       let date = new Date(this.valueOf());
//       date.setDate(date.getDate() + days);
//       return date;
//     }

//     function getDates(startDate, stopDate) {
//       let dateArray = [];
//       let currentDate = startDate;
//       while (currentDate <= stopDate) {
//         dateArray.push(new Date(currentDate));
//         currentDate = currentDate.addDays(1);
//       }
//       return dateArray;
//     }

//     let dateArray = getDates(new Date(), (new Date()).addDays(30));
//     for (i = 0; i < dateArray.length; i++) {
//       console.log(dateArray[i]);
//     }
//    res.send(dateArray)



// })



// This returns an array with dates in the db
router.get('/dates', (req, res) =>{

    Events.find({}, 'eventDate -_id', (err, events) =>{
        let dates = [];
        let dateArr = []
        // events.eventDate= events;
        if (err) {
            return res.status(500).send({message: err.message});
        }
        if (events) {
            events.forEach(event => {
                // Object.values(event)
                dates.push(event);
                // dateArr = _.map(dates, 'eventDate')
                console.log(dates);   
            });
        }
        res.send(dates);
    })
})


  
// Count all number of attendences
router.get('/attendance', (req, res, next) => {

    UserReg.countDocuments({}, (err, total) => {
      if (err) {
        return res.status(500).send({
          message: err.message
        })
      }
      if (total) {
        console.log(total)
        res.send((total).toString())
  
      }
    })
  
  })
  








// router.get('/:id', async (req, res, next) => {
//   try {
//     if (req.params && req.params.id) {
//       const events = await Events
//       .findById(req.params.id, (err, data) => {
//         if (data) {
//           res.json(data);
//         } else {
//           res.send(err)
//         }
//       })
//       .populate('attendee')
//       .select('firstname lastname attendee')
//       res.send(events)
//     } else {
//       res.send("ID not found");
//     }
//   } catch (error) {
//     next(error)
//   }
// if (req.params && req.params.id) {
//   Events.findById(req.params.id, (err, data) => {
//     if (data) {
//       res.json(data);
//     } else {
//       res.send(err)
//     }
//   })
// } else {
//   res.send("ID not found");
// }
//});





module.exports = router;
