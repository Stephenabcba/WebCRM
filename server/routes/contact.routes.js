const ContactController = require('../controllers/contact.controller')

module.exports = (app) => {
    app.get('/hello', (req, res) => res.json({ message: "Hello World" }))
    app.post('/api/contacts', ContactController.createNewContact)
    app.get('/api/contacts', ContactController.findAllContacts)
    app.get('/api/contacts/:id', ContactController.findOneContactById)
    app.put('/api/contacts/:id', ContactController.updateExistingContact)
    app.delete('/api/contacts/:id', ContactController.deleteContact)
}