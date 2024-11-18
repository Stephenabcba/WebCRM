import Container from "react-bootstrap/esm/Container"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

import { useState, useEffect } from "react"
import Button from 'react-bootstrap/esm/Button'
import axios from 'axios'

const ContactDetail = (props) => {
    let history = useHistory()
    const [contact, setContact] = useState({})
    const [loaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/contacts/' + id)
            .then(res => {
                setContact(res.data.contact)
                setLoaded(true)
            })
            .catch(err => console.error(err))
    })
    return (
        <Container>
            {loaded && <Container>
                <h2>{contact.contactName}</h2>
                <h4>Company: {contact.companyName} ({contact.companyScale} sized company)</h4>
                <p>Email: <a href={"mailto:" + contact.email}>{contact.email}</a></p>
                <p>Want Followups: {contact.followup ? "Yes" : "No"}</p>
                <p>Phone Number: ({contact.phoneNumber.slice(0, 3)}){contact.phoneNumber.slice(3, 6)}-{contact.phoneNumber.slice(6, 10)}</p>
                <p>Message Count: {contact.messages.length}</p>
                <p>Location: {contact.location}</p>
                <p>Associated Employee: {contact.associatedEmployee}</p>
                <Button onClick={e => history.push("/contact/" + contact._id + "/edit")}>Edit</Button>
            </Container>
            }
            {!loaded && <p>Loading...</p>}
        </Container >
    )
}

export default ContactDetail