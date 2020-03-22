import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { buyCake } from '../redux'

function HooksCakeContainer() {
    const noOfStates = useSelector(state => state.noOfCakes)
    const disptach = useDispatch()

    return (
        <div>
            <h2>No of cakes: {noOfStates}</h2>
            <button onClick={() => disptach(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
