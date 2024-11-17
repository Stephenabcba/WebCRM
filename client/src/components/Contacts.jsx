import { Redirect } from "react-router-dom"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/esm/Container"
import { useHistory } from "react-router-dom"


const Contacts = (props) => {
    let history = useHistory()
    const viewContact = (contactID) => {
        history.push("/contact/" + contactID)
    }

    return (
        <Container className="py-2">

            <Table hover responsive>
                <thead>
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
                    <tr onClick={(e) => viewContact(1)}>
                        <td>Stephen</td>
                        <td>John Doe</td>
                        <td>HP</td>
                        <td>johnd@gmail.com</td>
                        <td>2024-09-03</td>
                        <td>123-456-789</td>
                        <td>10</td>
                        <td>Small</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Contacts