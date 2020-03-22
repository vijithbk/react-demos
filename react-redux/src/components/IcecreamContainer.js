import React from 'react'
import { connect } from 'react-redux'

import { buyIcecream } from '../redux'

function IcecreamContainer(props) {
    return (
        <div>
            <h2>No of Icecreams: {props.noOfIcecreams}</h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfIcecreams: state.icecream.noOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)
