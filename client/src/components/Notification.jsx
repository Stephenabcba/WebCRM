import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Notification = (props) => {
    const { show, setShow, notifications } = props

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Notifications</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Test {notifications.length}</p>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default Notification