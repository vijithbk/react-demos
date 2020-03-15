import React from 'react'

import { Row, Col } from 'react-bootstrap'

function TaxesFees(props) {
    return (
        <Row>
            <Col md={6}>
                Est. taxes & fees (Based on 94085)
            </Col>
            <Col md={6}>
                {`$${props.taxes}`}
            </Col>
        </Row>
    )
}

export default TaxesFees
