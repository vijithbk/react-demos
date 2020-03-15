import React from 'react'

import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'

import './pickup-savings.css'

function renderTooltip(props) {
    return <Tooltip {...props}>Picking up your order in the store helps cut costs, and we pass the savings on to you.</Tooltip>;
}

const PickupSavings = (props) => (
    <Row className="show-grid">
        <Col md={6}>
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                <div className="pickupSavings">Pickup Savings</div>
            </OverlayTrigger>
        </Col>
        <Col className="totalSavings">
            {`$${props.pickupSavings}`}
        </Col>
    </Row>
);

export default PickupSavings