import {makeStyles} from "@mui/styles";

export const styles = makeStyles((theme) => ({
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
    },
    popover: {
        width: '15rem',
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2)
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: 'gray',
        marginLeft: theme.spacing(1)
    },
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    slider: {
        marginRight: theme.spacing(2)
    },
    input: {
        width: '3rem',
        marginRight: '1rem'
    }
}))
