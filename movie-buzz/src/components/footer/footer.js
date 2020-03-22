import React from 'react'

import { Row, Col } from 'react-bootstrap'

import './footer.css'

function footer() {
    return (
        <Row >
            <Col className="footer" md={12}>&copy; Movie Buzz - Demo application built with ReactJS and Redux</Col>
        </Row>
    )
}

export default footer
