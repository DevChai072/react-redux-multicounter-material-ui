import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    titleStyle: {
        fontFamily: 'Permanent Marker',
        textAlign: "center"
    }
});

const FooterView = ({sum}) => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.titleStyle}>SUM SCORE : [ {sum} ]</h1>
        </>
    )
}
export default FooterView