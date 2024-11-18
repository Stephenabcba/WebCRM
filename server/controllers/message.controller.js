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
        .catch(err => res.status(400).json(err))
}

module.exports.deleteMessage = (req, res) => {
    Message.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json(err))
}

module.exports.checkFollowups = (req, res) => {
    Contact.find()
        .then(allContacts => {
            const filteredContacts = allContacts.filter((contact) => contact.followup)
            let output = []
            const promises = filteredContacts.map((contact, idx) => {
                return new Promise(resolve => {
                    Message.find({ associatedContact: contact._id }).sort({ _id: -1 }).limit(1)
                        .then(lastMessage => {
                            console.log(contact.contactName)
                            console.log(lastMessage.length)
                            if (lastMessage.length > 0) {
                                const now = Date.now().valueOf()
                                const messageDate = new Date(lastMessage[0].createdAt)
                                const messageTime = messageDate.valueOf()
                                if (now - messageTime > 1000 * 60 * 60 * 24 * 7) {
                                    output.push(contact.contactName)
                                }
                            } else {
                                output.push(contact.contactName)
                            }
                            resolve(true)
                            return
                        })
                        .catch(err => res.status(400).json(err))
                })
            })
            Promise.all(promises)
                .then(() => {
                    return res.json({ followups: output })
                }
                )
        })
        .catch(err => res.status(400).json(err))
}