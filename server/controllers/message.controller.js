const { request } = require('express')
const Contact = require('../models/contact.model')
const Message = require('../models/message.model')

module.exports.createNewMessage = (req, res) => {
    updatedForm = {
        ...req.body,
        last_Message: null,
        messages: [],
    }
    Message.create(updatedForm)
        .then(newMessage => res.json({ message: newMessage }))
        .catch(err => res.status(400).json(err))
}

module.exports.findAllMessages = (req, res) => {
    // console.log("FindAll")
    Message.find()
        .then(allMessages => res.json({ messages: allMessages }))
        .catch(err => res.status(400).json(err))
}

module.exports.findOneMessageById = (req, res) => {
    Message.findOne({ _id: req.params.id })
        .then(foundMessage => res.json({ message: foundMessage }))
        .catch(err => res.status(400).json(err))
}

module.exports.findAllMessagesForContact = (req, res) => {
    Message.find({ associatedContact: req.params.contactId })
        .then(foundMessages => res.json({ messages: foundMessages }))
        .catch(err => res.status(400).json(err))
}

module.exports.updateExistingMessage = (req, res) => {
    Message.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMessage => res.json({ message: updatedMessage }))
}

module.exports.deleteMessage = (req, res) => {
    Message.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json(err))
}