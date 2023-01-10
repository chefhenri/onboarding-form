import {AppBar, Toolbar, Typography} from "@mui/material";

const Nav = () => {
    return (
            <AppBar position="static">
                <Toolbar sx={{ width: '75%', alignSelf: 'center' }}>
                    <Typography component="div" variant="h6" sx={{flexGrow: 1}}>
                        OpenText
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Nav
