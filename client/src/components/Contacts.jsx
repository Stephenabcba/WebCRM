import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/esm/Container"
import { useHistory } from "react-router-dom"



const Contacts = (props) => {
    let history = useHistory()
    const viewContact = (contactID) => {
        history.push("/contact/" + contactID)
    }

    return (
        <Container className="py-3 px-1 bg-white rounded">
            <h3 className="ms-2">Leads and Contacts</h3>
            <Table hover responsive >
                <thead >
                    <tr>
                        <th>Associated Employee</th>
                        <th>Contact Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Company Scale</th>
                        <th>Last Contact Time</th>
                        <th>Message Count</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts.map((contact, idx) => {
                        return <tr key={idx} onClick={(e) => viewContact(contact._id)}>
                            <td>{contact.associatedEmployee}</td>
                            <td>{contact.contactName}</td>
                            <td>{contact.companyName}</td>
                            <td>{contact.email}</td>
                            <td>({contact.phoneNumber.slice(0, 3)}){contact.phoneNumber.slice(3, 6)}-{contact.phoneNumber.slice(6, 10)}</td>
                            <td>{contact.companyScale}</td>
                            <td>N/A</td>
                            <td>{contact.messages.length}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Contacts