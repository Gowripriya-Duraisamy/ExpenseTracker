import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import classes from "./topBar.module.css";

const TopBar  = () => {
    return <Box>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton>
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
}

export default TopBar;