const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    eventName:{
        type: String,
        required: [true, "Name of event is required"]
    }
})

module.exports = mongoose.model('Event', eventSchema)