var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const UserReg = mongoose.model('UserReg');
const Events = mongoose.model('Events');


//Routes and Endpoints for Events

//Get all events data
router.get('', (req, res, next) => {
  Events.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data);
      console.log(data)
    }
  });
});



router.get("/:id", (req, res, next) => {
  Events.findById(req.params.id).then(data => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Event not found!" });
    }
  });
});



// Add event

router.post('/create-event', (req, res, next) => {
  let event = new Events({

    eventname: req.body.eventname,
    eventDate: req.body.eventDate,
    eventPaid: req.body.eventPaid,
    facilitators: req.body.facilitators
    //attendee: req.body.attendee
  })
  event.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send("Event successfully added");
    }
  })
})



router.post('/event-attendee', (req, res, next) => {


  let addAttendee = new UserReg({

    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    company: req.body.company,
    eventAtt: req.body.eventAtt
  });
  addAttendee.save((err, data) => {
    if (err) {
      res.send("Failed to add attendee");
      console.log(err.message);

    } else {
      res.send("Attendee successfully added");
      console.log(data);

    }
  });


});



router.get('/all/:get', async (req, res, next) => {
  try {
    const events = await UserReg
      .find()
      .populate('eventAtt')
      .select('firstname lastname eventAtt');
    console.log(events)
    res.send(events)
  } catch (err) {
    next(err)
  }
})





//Update events
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

// END OF Routes and Endpoints for Assets

//Delete assets
router.delete('/:id', (req, res, next) => {
  if (!(req.params && req.params.id)) {
    res.status(400).json({
      'message': 'Bad request'
    });
  } else {
    Events.findByIdAndRemove(req.params.id, (err, data) => {
      if (data) {
        res.status(200).json('Event successfully deleted');
      } else {
        res.send(err);
      }
    })
  }
})





// router.get('/all/:id', async (req, res, next) => {
//   if (req.params && req.params.id) {
//     try {
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
//     } catch (error) {
//       next(error)
//     }
//   }
//   else {
//        res.send("ID not found");
//      }
// })




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

//Get event by id
// router.get('/:id', (req, res, next) => {
//   if (req.params && req.params.id) {
//     Events.findById(req.params.id, (err, data) => {
//       if (data) {
//         res.json(data);
//       } else {
//         res.send(err)
//       }
//     })
//   } else {
//     res.send("ID not found");
//   }
// });





module.exports = router;
