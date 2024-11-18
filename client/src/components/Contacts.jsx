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
            <Table hover responsive >
                <thead >
                    <tr>
                        <th>Associated Employee</th>
                        <th>Contact Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Last Contact Time</th>
                        <th>Phone Number</th>
                        <th>Message Count</th>
                        <th>Company Scale</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts.map((contact, idx) => {
                        return <tr onClick={(e) => viewContact(contact._id)}>
                            <td>{contact.associatedEmployee}</td>
                            <td>{contact.contactName}</td>
                            <td>{contact.companyName}</td>
                            <td>{contact.email}</td>
                            <td>N/A</td>
                            <td>({contact.phoneNumber.slice(0, 3)}){contact.phoneNumber.slice(3, 6)}-{contact.phoneNumber.slice(6, 10)}</td>
                            <td>{contact.messages.length}</td>
                            <td>{contact.companyScale}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Contacts