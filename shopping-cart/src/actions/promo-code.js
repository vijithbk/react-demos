import { PROMO_CODE } from './types'

export const handleChange = e => dispatch => {
    console.log('handlechange ' + e.target.value + ';')
    dispatch({
        type: PROMO_CODE,
        payload: e.target.value
    })
}