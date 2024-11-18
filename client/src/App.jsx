import React from 'react';
import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import MainView from './components/MainView';
import { BrowserRouter } from "react-router-dom"

// import './App.css';

const App = () => {
  const [notifications, setNotifications] = useState(["test"])
  const [show, setShow] = useState(false)
  return (
    <BrowserRouter>
      <Container className="p-5">
        <Navigation setShow={setShow} notifications={notifications}></Navigation>
        <MainView show={show} setShow={setShow} notifications={notifications} setNotifications={setNotifications}></MainView>
      </Container>
    </BrowserRouter>
  )
};

export default App;
