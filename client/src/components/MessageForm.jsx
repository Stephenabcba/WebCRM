import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container"

const MessageForm = (props) => {
    const { id } = useParams()
    const { contactName, updateDomMessages } = props

    const [messageTitle, setMessageTitle] = useState("")
    const [messageBody, setMessageBody] = useState("")
    const [realEmail, setRealEmail] = useState(false)


    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("message sent")
        axios.post('http://localhost:8000/api/messages', {
            messageTitle,
            messageBody,
            toContact: true,
            associatedContact: id,
            contactEmail: props.contactEmail,
            realEmail
        })
            .then(resMessage => {
                // console.log(res)
                setMessageTitle("")
                setMessageBody("")
                setRealEmail(false)
                axios.put('http://localhost:8000/api/contacts/' + id, {
                    $inc: { messageCount: 1 }
                })
                    .then(res => {
                        updateDomMessages(resMessage.data.message)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    return <Container>
        <h5>Send a new message to {contactName}:</h5>
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className='my-3' controlId="formBasicMessageTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder='Enter the title for the message' onChange={(e) => setMessageTitle(e.target.value)} value={messageTitle} />
            </Form.Group>
            <Form.Group className='my-3' controlId="formBasicMessageBody">
                <Form.Label>Message Body</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Body of the Message' onChange={(e) => setMessageBody(e.target.value)} value={messageBody} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSendEmail">
                <Form.Check
                    type="switch"
                    onChange={(e) => setRealEmail(e.target.checked)}
                    label="Send the message as actual email?"
                    checked={realEmail}
                />
            </Form.Group>
            <Button vairant="primary" type="submit">Send Message</Button>
        </Form>
    </Container>
}

export default MessageForm