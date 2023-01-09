import {AppBar, Container, Toolbar, Typography} from "@mui/material";

const Nav = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Container fixed>
                        <Typography component="div" variant="h6" sx={{flexGrow: 1}}>
                            OpenText
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
    )
}

export default Nav
