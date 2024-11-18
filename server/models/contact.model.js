const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    companyName: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    email: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    associatedEmployee: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    lastContact: {
        type: Date
    },
    followup: {
        type: Boolean,
        required: [true, "{PATH} is required."],
    },
    phoneNumber: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    messages: {
        type: [mongoose.ObjectId],
        default: []
    },
    location: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [1, "{PATH} should not be empty."]
    },
    companyScale: {
        type: String,
        required: [true, "{PATH} is required."],
        enum: ["Small", "Medium", "Large"]
    }
}, { timestamps: true })

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact