import uuid from 'uuid'
import * as Constants from '../constants/constants'

export const addCounter = () => ({
    type: Constants.ADD_COUNTER,
    id: uuid()
})

export const changeScore = (id, score) => ({
    type: Constants.CHANGE_SCORE,
    payload: {
        id: id,
        score: score
    }
})

export const incrementCounter = (id, count) => ({
    type: Constants.INCREMENT,
    payload: {
        id: id,
        count: count
    }
})

export const decrementCounter = (id, count) => ({
    type: Constants.DECREMENT,
    payload: {
        id: id,
        count: count
    }
})

export const deleteCounter = (id) => ({
    type: Constants.DELETE_COUNTER,
    id
})