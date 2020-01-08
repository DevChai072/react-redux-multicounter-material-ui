import React from 'react'

import { Grid } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    contentCenter: {
        justifyContent: "center",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    gridMargin: {
        margin: "5px"
    },
    labelScore: {
        border: "1px solid",
        borderRadius: "4px",
        padding: "15px",
        width: "50px",
        textAlign: "center",
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "1rem",
        fontWeight: "bold",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    }
}));

const CounterListView = ({id, count, score, propsEvent}) => {
    
    const classes = useStyles();
    const {handleChangeInput, handleClickIncrement, handleClickDecrement, handleClickDeleteCounter} = propsEvent

    return (
        <>
            <Divider/>
            <Grid container direction="row" className={classes.contentCenter} alignItems="center">

                <Grid item className={classes.gridMargin} >
                    <Fab color="primary" aria-label="add" size="small">
                        <AddIcon onClick={() => handleClickIncrement(id, score)}/>
                    </Fab>
                </Grid>

                <Grid item className={classes.gridMargin}>
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{shrink: true,}}
                        variant="outlined"
                        onChange={(evt) => handleChangeInput(id, evt.target.value)}
                        value={score}
                    />
                </Grid>

                <Grid item className={classes.gridMargin}>
                    <Fab color="secondary" aria-label="add" size="small">
                        <RemoveIcon onClick={() => handleClickDecrement(id, score)}/>
                    </Fab>
                </Grid>

                <Grid item className={classes.gridMargin}>
                    {/* <div className={classes.labelScore}>{Math.round(count * 100) / 100}</div> */}
                    <div className={classes.labelScore}>{count}</div>
                </Grid>

                <Grid item className={classes.gridMargin}>
                    <Fab color="inherit" aria-label="add" size="small">
                        <DeleteIcon onClick={() => handleClickDeleteCounter(id)}/>
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}
export default CounterListView