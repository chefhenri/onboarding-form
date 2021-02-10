import React from "react";
import {List, ListItem, ListItemText, ListSubheader, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    list: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
    },
    section: {
        backgroundColor: 'inherit'
    },
    items: {
        backgroundColor: 'inherit',
        padding: 0
    }
}))

export default function Finish(props) {
    const classes = styles()

    return (
        <div>
            <Typography variant="h4" component="h2">
                Information Summary
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {/* FIXME: Change wording? */}
                Please verify the information is correct.
            </Typography>

            {/* TODO: Display section data under subsection headings */}
            <List className={classes.list} subheader={<li/>}>
                {['company-info', 'owner-info', 'security-privacy-info'].map(headingId => (
                    <li key={`${headingId}-heading`} className={classes.section}>
                        <ul className={classes.items}>
                            <ListSubheader>Subsection Header</ListSubheader>
                            {Object.values(props.account).map((data, idx) => (
                                <ListItem key={`${headingId}-item-${idx}`}>
                                    <ListItemText primary={`${data.label}: ${data.value}`}/>
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
        </div>
    )
}
