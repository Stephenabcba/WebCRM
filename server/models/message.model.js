const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    associatedContact: {
        type: mongoose.ObjectId
    },
    messageTitle: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    messageBody: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    toContact: {
        type: Boolean
    }
}, { timestamps: true })

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message