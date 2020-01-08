import React from 'react'
import { connect } from 'react-redux'
import CounterAddView from '../components/CounterAddView'
import {addCounter} from '../actions/CounterAction'

const AddCounter = ({dispatch}) => {

    const handleClickAddCounter = () => {
        dispatch(addCounter())
    }
    
    return (
        <CounterAddView handleClickAddCounter={handleClickAddCounter}/>
    )
}
export default connect()(AddCounter)