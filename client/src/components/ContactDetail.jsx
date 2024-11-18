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

import MessageForm from './MessageForm'
import Messages from './Messages'
import MessageDetail from "./MessageDetail"

const ContactDetail = (props) => {
    let history = useHistory()
    const [contact, setContact] = useState({})
    const [messages, setMessages] = useState([])
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams()

    const useQuery = () => {
        const { search } = useLocation()

        return React.useMemo(() => new URLSearchParams(search), [search])
    }

    let query = useQuery()

    useEffect(() => {
        axios.get('http://localhost:8000/api/contacts/' + id)
            .then(res => {
                setContact(res.data.contact)
                axios.get('http://localhost:8000/api/messages/contact/' + id)
                    .then(res => {
                        setMessages(res.data.messages)
                        setLoaded(true)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }, [])

    const updateDomMessages = (message) => {
        setContact({
            ...contact,
            messageCount: contact.messageCount + 1
        })
        setMessages([
            ...messages,
            message
        ])
        props.setUpdateNotif(props.updateNotif + 1)
    }
    return (
        <Container className="mt-3">
            {loaded && <Container>
                <Stack direction="horizontal" gap={3} className="justify-content-center mb-3">
                    <h3 className="my-0 me-3">{contact.contactName}</h3>
                    <p className="my-0"><a href={"mailto:" + contact.email}>{contact.email}</a></p>
                    <p className="me-auto my-0">({contact.phoneNumber.slice(0, 3)}){contact.phoneNumber.slice(3, 6)}-{contact.phoneNumber.slice(6, 10)}</p>
                </Stack>
                <Container>
                    <Row>
                        <Col>
                            <p className="">Company: {contact.companyName} ({contact.companyScale} sized company)</p>
                            <p>Location: {contact.location}</p>
                            <p>Receive Followup Reminders: {contact.followup ? "Yes" : "No"}</p>
                            <p>Associated Employee: {contact.associatedEmployee}</p>
                            <Button onClick={e => history.push("/contact/" + contact._id + "/edit")}>Edit</Button>
                        </Col>
                        <Col>
                            <h4 className="mx-3">MESSAGES</h4>
                            <Messages messages={messages} contactName={contact.contactName}></Messages>
                            <p className="mx-3">Message Count: {contact.messageCount}</p>
                            {query.get("message") ? (
                                <Container>
                                    <Button onClick={(e) => history.push("/contact/" + id)}>Send New Message</Button>
                                    <MessageDetail messageId={query.get("message")}></MessageDetail>
                                </Container>
                            ) : (
                                <Container className="px-0 mt-3">
                                    <MessageForm contactName={contact.contactName} updateDomMessages={updateDomMessages}></MessageForm>
                                </Container>
                            )
                            }
                        </Col>
                    </Row>
                </Container>
            </Container>
            }
            {!loaded && <p>Loading...</p>}
        </Container >
    )
}

export default ContactDetail