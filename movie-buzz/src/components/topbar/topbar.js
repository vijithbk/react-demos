import React from 'react'
import { Navbar } from 'react-bootstrap'

import { Row, Col } from 'react-bootstrap'

import './topbar.css';

function Topbar() {
    return (
        <Row>
            <Col className="topbar" md={12} bg="dark">
                <Navbar bg="dark" variant="dark" className="navbar">
                    <Navbar.Brand href="#home">
                    <i class="fas fa-film"></i>
                    {' '}
                    Movie Buzz
                    </Navbar.Brand>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Topbar