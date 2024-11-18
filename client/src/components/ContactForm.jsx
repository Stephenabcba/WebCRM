import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/esm/Container"

const ContactForm = (props) => {
    const { addToDom } = props
    //keep track of what is being typed via useState hook
    const [contactName, setContactName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [email, setEmail] = useState("")
    const [associatedEmployee, setAssociatedEmployee] = useState("Stephen")
    const [followup, setFollowup] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")
    const [companyScale, setCompanyScale] = useState("Small")
    //handler when the form is submitted
    const editScale = e => {
        const choices = new Set(["Small", "Medium", "Large"])
        if (choices.has(e.target.value)) {
            setCompanyScale(e.target.value)
        }
    }

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        console.log("submitted")
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/contacts', {
            contactName,
            companyName,
            email,
            associatedEmployee,
            followup,
            phoneNumber,
            location,
            companyScale
        })
            .then(res => {
                console.log(res)
                addToDom(res.data.contact)
                setContactName("")
                setCompanyName("")
                setEmail("")
                setAssociatedEmployee("Stephen")
                setFollowup(true)
                setPhoneNumber("")
                setLocation("")
                setCompanyScale("Small")
            })
            .catch(err => console.log(err))
    }
    //onChange to update contactName and lastName
    return (
        <Container className='px-5'>
            <h2>Create a new contact</h2>
            <Form onSubmit={onSubmitHandler} className="p-3">
                <Form.Group className="mb-3" controlId="formBasicAssociatedEmployee">
                    <Form.Label>Associated Employee</Form.Label>
                    <Form.Control placeholder="Enter name of the employee associated with this contact" onChange={(e) => setAssociatedEmployee(e.target.value)} value={associatedEmployee} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicContactName">
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control placeholder="Enter Contact Name" onChange={(e) => setContactName(e.target.value)} value={contactName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control placeholder="Enter Company Name" onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="johndoe@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Contact Phone Number</Form.Label>
                    <Form.Control placeholder="4081234567" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Contact location</Form.Label>
                    <Form.Control placeholder="San Jose" onChange={(e) => setLocation(e.target.value)} value={location} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSelectCompanyScale">
                    <Form.Label>Company Scale</Form.Label>
                    <Form.Select aria-label="Company Scale Selection" onChange={(e) => editScale(e)} value={companyScale}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFollowup">
                    <Form.Check
                        type="switch"
                        onChange={(e) => setFollowup(e.target.value)}
                        label="Would you like to receive followup notifications for this contact?"
                        value={followup}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
            </Form>
        </Container>
    )
}
export default ContactForm;