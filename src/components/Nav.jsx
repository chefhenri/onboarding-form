import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { User } from "feather-icons-react/build/IconComponents";

const Nav = () => {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar disableGutters sx={{ height: '6rem' }}>
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography component="div" variant="h4" sx={{ fontWeight: 700, pointerEvents: 'none' }}>
                        opentext™
                    </Typography>
                    <Button variant="text" startIcon={<User />} sx={{ fontWeight: 700, color: "inherit" }}>
                        My Account
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
