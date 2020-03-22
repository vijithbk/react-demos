import React from 'react';
import { Provider } from 'react-redux'

import { Row, Col } from 'react-bootstrap'

import Topbar from './components/topbar/topbar'
import Landing from './components/home/landing'
import Footer from './components/footer/footer'

import store from './store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Row className="container">
          <Col className="footer" md={12}>
            <Topbar />
            <Landing />
            <Footer />
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
