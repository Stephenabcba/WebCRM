import Container from "react-bootstrap/esm/Container"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import Contacts from "./Contacts"
import ContactForm from "./ContactForm"
import ContactDetail from './ContactDetail';
import ContactUpdate from './ContactUpdate';
import {
    Switch,
    Route
} from "react-router-dom"
import Notification from "./Notification"


const MainView = (props) => {
    let history = useHistory()

    const [contacts, setContacts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/contacts')
            .then(res => {
                setContacts(res.data.contacts);
                setLoaded(true)
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = contactId => {
        setContacts(contacts.filter(contact => contact._id != contactId));
    }

    const addToDom = (newContact) => {
        setContacts([
            ...contacts,
            newContact
        ])
    }

    return (
        <Container>
            <Switch>
                <Route path="/contact/:id/edit">
                    <ContactUpdate></ContactUpdate>
                </Route>
                <Route path="/contact/:id">
                    <ContactDetail></ContactDetail>
                </Route>
                <Route path="/">
                    <Container className="py-2">
                        {!loaded && <p>Loading contacts...</p>}
                        {loaded && <Contacts contacts={contacts} removeFromDom={removeFromDom}></Contacts>}
                        <ContactForm addToDom={addToDom}></ContactForm>
                    </Container>

                </Route>
            </Switch>
            <Notification show={props.show} setShow={props.setShow} notifications={props.notifications}></Notification>
        </Container>
    )
}

export default MainView