const ContactController = require('../controllers/contact.controller')

module.exports = (app) => {
    app.get('/hello', (req, res) => res.json({ message: "Hello World" }))
    app.post('/api/contacts', ContactController.createNewContact)
    app.get('/api/contacts', ContactController.findAllContacts)
}