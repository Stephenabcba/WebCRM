const MessageController = require('../controllers/message.controller')

module.exports = (app) => {
    app.get('/hellomsg', (req, res) => res.json({ message: "Hello World from Messages" }))
    app.post('/api/messages', MessageController.createNewMessage)
    app.get('/api/messages', MessageController.findAllMessages)
    app.get('/api/messages/:id', MessageController.findOneMessageById)
    app.get('/api/messages/contact/:contactId', MessageController.findAllMessagesForContact)
    app.put('/api/messages/:id', MessageController.updateExistingMessage)
    app.delete('/api/messages/:id', MessageController.deleteMessage)
}