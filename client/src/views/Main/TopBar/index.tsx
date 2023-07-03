import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { CalendarToday, Search } from "@mui/icons-material";

import AddTransaction from "../../Transaction/AddTransaction";
import classes from "./topBar.module.css";
import ReusableIcon from "../../../components/ReusableIcon";
import WalletDropdown from "./WalletDropdown";

const TopBar = () => {
  return (
    <Box>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <WalletDropdown />
          <Grid container justifyContent={"flex-end"}>
            <Box className={classes.calendarBox}>
              <Typography className={classes.dateValue}>
                {new Date().getDate()}
              </Typography>
              <IconButton>
                <CalendarToday
                  className={classes.dateIcon}
                  fontSize={"small"}
                />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <ReusableIcon
                  image="/static/view.png"
                  className={classes.icon}
                />
              </IconButton>
            </Box>
            <Box className={classes.searchBox}>
              <IconButton>
                <Search />
              </IconButton>
            </Box>

            <AddTransaction />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
