const { request } = require('express')
const Contact = require('../models/contact.model')

module.exports.createNewContact = (req, res) => {
    updatedForm = {
        ...req.body,
        last_contact: null,
        messages: [],
    }
    Contact.create(updatedForm)
        .then(newContact => res.json({ contact: newContact }))
        .catch(err => res.status(400).json(err))
}

module.exports.findAllContacts = (req, res) => {
    // console.log("FindAll")
    Contact.find()
        .then(allContacts => res.json({ contacts: allContacts }))
        .catch(err => res.status(400).json(err))
}

module.exports.findOneContactById = (req, res) => {
    Contact.findOne({ _id: request.params.id })
        .then(foundContact => response.json({ contact: foundContact }))
        .catch(err => res.status(400).json(err))
}

module.exports.updateExistingContact = (req, res) => {
    Contact.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedContact => res.json({ contact: updatedContact }))
}

module.exports.deleteContact = (req, res) => {
    Contact.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json(err))
}