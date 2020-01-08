import React from 'react'
import { connect } from 'react-redux'
import CounterListView from '../components/CounterListView'
import CounterSumScore from '../containers/CounterSumScore'
import {
    changeScore,
    incrementCounter,
    decrementCounter,
    deleteCounter
} from '../actions/CounterAction'

const CounterList = ({counts, dispatch}) => {

    const handleClickIncrement = (id, score) => {
        if (score != 0) {
            dispatch(incrementCounter(id, score))
        }
    }

    const handleClickDecrement = (id, score) => {
        if (score != 0) {
            dispatch(decrementCounter(id, score))
        }
    }

    const handleChangeInput = (id, score) => {
        if (!isNaN(score)) {
            dispatch(changeScore(id, score))
        }
    }

    const handleClickDeleteCounter = (id) => {
        dispatch(deleteCounter(id))
    }

    const propsEvent = {
        handleChangeInput: handleChangeInput,
        handleClickIncrement: handleClickIncrement,
        handleClickDecrement: handleClickDecrement,
        handleClickDeleteCounter: handleClickDeleteCounter
    }
    
    return (
        <>
            {counts.map((item, index) =>
                <CounterListView key={index} {...item} propsEvent={propsEvent}/>
            )}
        </>
    )
}
export default connect()(CounterList)