import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    titleStyle: {
        fontFamily: 'Permanent Marker',
        textAlign: "center",
        fontSize: props => props.fontSize,
    }
});

const TitleView = (props) => {

    const classes = useStyles(props);
    
    return (
        <>
            <h1 className={classes.titleStyle}>{props.titleName}</h1>
        </>
    )
}
export default TitleView