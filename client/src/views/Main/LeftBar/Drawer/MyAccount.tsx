import {
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { FC } from "react";

import classes from "./account.module.css";
import UserIcon from "./userIcon";

export interface MyAccountProps {
  handleClose: () => void;
}

const MyAccount: FC<MyAccountProps> = ({ handleClose }) => {
  return (
    <>
      <DialogTitle>
        <Grid container className={classes.headerGrid}>
          <Grid item className={classes.firstHeader}>
            <IconButton>
              <CloseOutlinedIcon
                fontSize="medium"
                className={classes.close}
                onClick={handleClose}
              />
            </IconButton>
            <Typography className={classes.headerName}>My Account</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.signout}>SIGN OUT</Typography>
          </Grid>
        </Grid>

        <Divider />
        <Grid container className={classes.badgeGrid}>
          <Grid item xs={2}>
            <UserIcon
            avatar={classes.avatar}
              badgeLeft={classes.badgeLeft}
              badgeRight={classes.badgeRight}
              badge={classes.badge}
              badgeName={classes.badgeName}
            />
          </Grid>
          <Grid item xs={7} className={classes.detailGrid}>
            <Typography className={classes.username}>
              Gowripriyaa0707
            </Typography>
            <Typography className={classes.mail}>
              gowripriyaa0707@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </DialogTitle>
    </>
  );
};

export default MyAccount;
