import React, {Fragment} from "react";
import {List, ListItem, ListItemText, ListSubheader, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    list: {
        position: 'relative',
        width: '100%',
        maxHeight: 300,
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
                {/* FIXME: Wording? */}
                Please verify the information is correct.
            </Typography>

            {props.sectionData.map((section, idx) => (
                <Fragment>
                    <Typography variant="h5" component="h2">
                        {section.header}
                    </Typography>
                    <List className={classes.list} subheader={<li/>}>
                        {section.fields.map((field, idx) => (
                            <li key={`${section.id}-heading`} className={classes.section}>
                                <ul className={classes.items}>
                                    {field.type === 'heading' ? (
                                        <ListSubheader>{field.text}</ListSubheader>
                                    ) : (
                                        // TODO: Cross-reference field data with field info
                                        <ListItem key={`${field.id}-item`}>
                                            <ListItemText primary={`${field.text}: placeholder`}/>
                                        </ListItem>
                                    )}
                                </ul>
                            </li>
                        ))}
                    </List>
                </Fragment>
            ))}
        </div>
    )
}
