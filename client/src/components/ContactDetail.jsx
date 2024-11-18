import Container from "react-bootstrap/esm/Container"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import Button from 'react-bootstrap/esm/Button'
import Stack from 'react-bootstrap/Stack';
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
        <Container className="mt-3">
            {loaded && <Container>
                <Stack direction="horizontal" gap={3} className="justify-content-center mb-3">
                    <h3 className="my-0 me-3">{contact.contactName}</h3>
                    <p className="my-0"><a href={"mailto:" + contact.email}>{contact.email}</a></p>
                    <h4 className="ms-auto my-0">Company: {contact.companyName} ({contact.companyScale} sized company)</h4>
                </Stack>
                <p>Phone Number: ({contact.phoneNumber.slice(0, 3)}){contact.phoneNumber.slice(3, 6)}-{contact.phoneNumber.slice(6, 10)}</p>
                <p>Want Followups: {contact.followup ? "Yes" : "No"}</p>
                <p>Location: {contact.location}</p>
                <p>Message Count: {contact.messages.length}</p>
                <p>Associated Employee: {contact.associatedEmployee}</p>
                <Button onClick={e => history.push("/contact/" + contact._id + "/edit")}>Edit</Button>
            </Container>
            }
            {!loaded && <p>Loading...</p>}
        </Container >
    )
}

export default ContactDetail