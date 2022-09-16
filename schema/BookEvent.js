const mongoose = require('mongoose');

const bookEventSchema = new mongoose.Schema({

    eventId:{
        type: String,
        required: [true, "Event Id is required"]
    },
    userId:{
        type: String,
        required: [true, "User ID is required"]
    },
    desiredTime:{
        type: Number,
        required: [true, "Desired Time is required"]
    },
    endTime:{
        type: Number,
        required: [true, "Event end time is required"]
    }
})

module.exports = mongoose.model('BookEvent', bookEventSchema)