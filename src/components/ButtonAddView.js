import React from 'react'
import Fab from '@material-ui/core/Fab'
import CreateIcon from '@material-ui/icons/Create'

const ButtonAddView = ({handleClickAddCounter}) => {
    return (
        <>
            <Fab aria-label="add" size="small">
                <CreateIcon onClick={handleClickAddCounter}/>
            </Fab>
        </>
    )
}
export default ButtonAddView 