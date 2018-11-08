var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


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
    }).sort('-eventDate');
});


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


// GET Attendees by event ID
router.get('/:eventAtt/attendees', (req, res) => {
    
    UserReg.find({eventAtt: req.params.eventAtt}, (err, attendees) => {
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
    .select('firstname lastname email gender occupation phone') ;
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
    }).limit(5);
});



router.get("/:id", (req, res, next) => {
    Events.findById(req.params.id).then(data => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({
                message: "Event not found!"
            });
        }
    });
});



// router.get('/all/:get', async (req, res, next) => {
//   try {
//     const events = await UserReg
//       .find()
//       .populate('eventAtt')
//       .select('firstname lastname eventAtt');
//     console.log(events)
//     res.send(events)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/all/:id', async (req, res, next) => {
    // if ((req.params && req.params.id)){

        try {
            const events = await Events
                .find()
                .populate('attendee')
                // .select('eventname eventDate eventPaid attendee');
                .select('attendee firstname lastname');
            // console.log(events)
            // res.send(events)
for (let i=0;i<=events.length;i++)
{
    if (req.params.id ===events._id)
    {
        console.log(events.attendee.firstname)
    }
}
            
        } catch (err) {
            next(err)
        }
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
router.delete('/:id', (req, res) => {
    Events.findById(req.params.id, (err, event) => {
        if (err) {
            return res.status(500).send({message: err.message})
        }
        if (!event) {
            return res.status(400).send({message: 'Event not found'});
        }
        UserReg.find({eventAtt: req.params.id}, (err, attendees) => {
            if (attendees) {
                attendees.forEach(attendee => {
                    attendee.remove();
                });
            }
            event.remove(err => {
                if (err) {
                    return res.status(500).send({message: err.message});
                }
                res.status(200).send({message: 'Event and attendees successfully deleted.'})
            });
        });
    });
});



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
