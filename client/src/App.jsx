import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navigation from './components/Navigation';
import Main from './components/Main';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

// import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Container className="p-3">
      <Container className="p-5 bg-light rounded-3">
        <Navigation></Navigation>
        <Switch>
          <Route path="/toast">
            <ExampleToast>
              We now have Toasts
              <span role="img" aria-label="tada">
                🎉
              </span>
            </ExampleToast>
          </Route>
          <Route path="/contact/:id">
            <p>IN PROGRESS</p>
          </Route>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Container>
    </Container>
  </BrowserRouter>
);

export default App;
