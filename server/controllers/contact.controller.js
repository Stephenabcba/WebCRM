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
    console.log("FindAll")
    Contact.find()
        .then(allContacts => res.json({ contacts: allContacts }))
        .catch(err => res.status(400).json(err))
}