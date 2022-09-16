const BookEvent = require('../schema/BookEvent')
const Event = require('../schema/Event');
console.log('Connected to book controller')
const d = new Date();
    let hour = d.getHours()
    console.log(hour)


module.exports.book = (req, res) => {
    

    let newbooking = new BookEvent({

        eventId: req.body.eventId,
        userId: req.body.userId,
        desiredTime: req.body.desiredTime,
        endTime: req.body.endTime
    })
    if(req.body.desiredTime > req.body.endTime){
        console.log('You cannot book after the end time')
    }else if(req.body.desiredTime < 8 || req.body.endTime > 20){
        console.log('The selected time is invalid')
    }else if(req.body.desiredTime < hour || req.body.endTime < hour){
        console.log('Ohh no! Please choose another booking time')
    }else{
        console.log('success')
        newbooking.save()
        .then(result => res.send(result))
        .catch(error => res.sen(error))
    }
    
}

module.exports.view = (req, res) => {

    BookEvent.find({})
    .then(result => res.send(result))
    .then(result => console.log(result))
}