// async function wait () {
//   Events
//     .find()
//     .populate('attendee', 'eventname')
//     .select('eventname attendee');
// }

// router.get('/test', async function(req, res){
  
  
  
//   res.send(await wait());
// });

// router.get('/test', async function(req, res){
//   console.log('before wait', new Date());
//   await wait(5 * 1000);
//   console.log('after wait', new Date())
//   res.send('hello world');
// });


// router.get('/all', (req, res, next) => {
//     const events = await Events
//     .find()
//     .populate('attendee')
//     .select('eventname attendee');
//     console.log(events);
// });
