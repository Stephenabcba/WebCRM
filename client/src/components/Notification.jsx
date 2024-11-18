import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Toast from 'react-bootstrap/Toast';

const Notification = (props) => {
    const { show, setShow, notifications } = props


    const handleClose = () => setShow(false);
    return <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Notifications</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {notifications.map((notification, idx) => {
                    return <Toast key={idx} className="mb-3">
                        <Toast.Header>
                            <strong className="me-auto">Followup Reminder</strong>
                        </Toast.Header>
                        <Toast.Body>{notification}</Toast.Body>
                    </Toast>
                })}
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default Notification