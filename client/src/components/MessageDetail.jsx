import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import React from "react"
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button'
import Stack from 'react-bootstrap/Stack';
import axios from 'axios'

const MessageDetail = (props) => {
    const { messageId } = props
    const [message, setMessage] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/messages/' + messageId)
            .then(res => {
                setMessage(res.data.message)
            })
            .catch(err => console.error(err))
    }, [messageId])
    return <Container className="my-3 bg-secondary p-3 rounded">
        {message.associatedContact ? (
            <Container>
                <h4>Message Title: {message.messageTitle}</h4>
                <p>Sent Date: {message.createdAt.slice(0, 10)}</p>
                <p>Message: {message.messageBody}</p>
            </Container>
        ) : (<p>Loading...</p>)}
    </Container>
}

export default MessageDetail