import React from 'react'
import { connect } from 'react-redux'
import CounterAdd from '../containers/CounterAdd'
import CounterList from '../containers/CounterList'
import CounterSumScore from '../containers/CounterSumScore'
import FooterView from '../components/FooterView'

import {Container, Grid, Paper, Divider} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        '& > *': {
            margin: theme.spacing(1),
            width: "100%",
        }
    }
}));

const App = ({counts}) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Grid container>

                <Grid item lg={12}>
                    <Grid item className={classes.root}>
                        <Paper elevation={3}>
                            <CounterAdd/>
                            <CounterList counts={counts}/>
                            <Divider/>
                            <FooterView sum={(<CounterSumScore counts={counts}/>)} />
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) =>  ({
	message: 'This is message from mapStateToProps',
	counts: state.counterReducer
})
export default connect(mapStateToProps)(App)