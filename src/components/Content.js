import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}))

export default function Content(props) {
    const classes = styles()

    return (
        <div>
            {props.section}
            <div>
                <Button disabled={props.active === 0} onClick={props.back} className={classes.button}>
                    Back
                </Button>
                {props.optional(props.active) && (
                    <Button variant="contained" color="primary" onClick={props.skip}
                            className={classes.button}>
                        Skip
                    </Button>
                )}
                <Button variant="contained" color="primary" onClick={props.next}
                        className={classes.button}>
                    {props.active === props.length ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    )
}
