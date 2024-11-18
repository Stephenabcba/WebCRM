import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/esm/Container"
import { useHistory } from "react-router-dom"

const Messages = (props) => {
    const { messages } = props
    return <Container>
        <Table hover responsive>
            <thead>
                <tr>
                    <th>Message Title</th>
                    <th>Message Date</th>
                </tr>
            </thead>
            <tbody>
                {props.messages.map((message, idx) => {
                    return <tr key={idx}>
                        <td>{message.messageTitle}</td>
                        <td>{message.createdAt.slice(0, 10)}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    </Container>
}

export default Messages