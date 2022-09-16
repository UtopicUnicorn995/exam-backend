const Event = require('../schema/Event');
console.log("Connected to Event Controller");


module.exports.newEvent = (req, res) => {

    let newEvent = new Event({
        eventName: req.body.eventName
    })
    newEvent.save()
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

module.exports.viewEvents = (req, res) => {

    Event.find({})
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

module.exports.viewSingleEvent = (req, res) => {

    Event.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

module.exports.updateEvent = (req, res) => {

    console.log(req.params.id)
    
    let update = {
        eventName: req.body.eventName
    }
    
    Event.findByIdAndUpdate(req.params.id, update, {new: true})
    .then(result => res.send(result))
    .catch(error => console.log(error));
}

module.exports.deleteEvent = (req, res) => {
    
    Event.findByIdAndDelete(req.params.id, {new: true})
    .then(result => res.send(result))
    .catch(error => res.send(error))
}