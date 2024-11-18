import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/esm/Container"
import { useHistory, useParams } from "react-router-dom"

const Messages = (props) => {
    let history = useHistory()
    const { id } = useParams()

    const { messages, contactName } = props
    return <Container>
        <Table hover responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Message Title</th>
                    <th>Message Date</th>
                </tr>
            </thead>
            <tbody>
                {props.messages.map((message, idx) => {
                    return <tr key={idx} onClick={e => history.push("/contact/" + id + "?message=" + message._id)}>
                        <td>{message.toContact ? ("To " + contactName) : ("From " + contactName)}</td>
                        <td>{message.messageTitle}</td>
                        <td>{message.createdAt.slice(0, 10)}</td>
                    </tr>
                })}
            </tbody>
        </Table>

    </Container>
}

export default Messages