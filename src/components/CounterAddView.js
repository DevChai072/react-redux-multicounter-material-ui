import React from 'react'
import TitleView from './TitleView'
import ButtonAdd from '../components/ButtonAddView'
import {Grid,} from '@material-ui/core'

const AddCounter = ({handleClickAddCounter}) => {
    return (
        <>
            <Grid item container direction="row" alignItems="center">
                <Grid item lg={10}>
                    <TitleView titleName="Multi Counter"/>
                </Grid>
                <Grid item lg={2}>
                    <ButtonAdd handleClickAddCounter={handleClickAddCounter}/>
                </Grid>
            </Grid>
        </>
    )
}
export default AddCounter