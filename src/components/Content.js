import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Account from "../sections/Account";
import Reseller from "../sections/Reseller";
import Information from "../sections/Information";
import Configuration from "../sections/Configuration";
import Comments from "../sections/Comments";

const styles = makeStyles(theme => ({
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

    const getSection = (idx) => {
        switch (idx) {
            case 0:
                return <Account header={props.sections[idx].header} fields={props.sections[idx].fields}/>
            case 1:
                return <Reseller header={props.sections[idx].header} fields={props.sections[idx].fields}
                                 hints={props.sections[idx].hints}/>
            case 2:
                return <Information header={props.sections[idx].header} fields={props.sections[idx].fields}
                                    hints={props.sections[idx].hints} options={props.sections[idx].options}/>
            case 3:
                return <Configuration header={props.sections[idx].header} fields={props.sections[idx].fields}
                                      hints={props.sections[idx].hints} options={props.sections[idx].options}/>
            case 4:
                return <Comments header={props.sections[idx].header} fields={props.sections[idx].fields}/>

            default:
                throw new Error('Unknown section')
        }
    }

    return (
        <div>
            {getSection(props.active)}
            <div>
                <Button disabled={props.active === 0} onClick={props.back} className={classes.button}>
                    Back
                </Button>
                {props.optional(props.active) && (
                    <Button variant="contained" color="primary" onClick={props.skip} className={classes.button}>
                        Skip
                    </Button>
                )}
                <Button variant="contained" color="primary" onClick={props.next} className={classes.button}>
                    {props.active === props.headers.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    )
}
