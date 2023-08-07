import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { FC, useState } from "react";

import classes from "./myaccount.module.css";
import UserIcon from "./userIcon";
import Confirmation from "./Confirmation";
import useAuth from "../../../../hooks/useAuth";

export interface MyAccountProps {
  handleClose: () => void;
}

const MyAccount: FC<MyAccountProps> = ({ handleClose }) => {
  const { user } = useAuth();
  const email = user?.email.split('@')[0] || '';
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialagOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
          <Grid item xs={4} className={classes.avatarGrid}>
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
            {email?.charAt(0).toUpperCase() + email?.slice(1)}
            </Typography>
            <Typography className={classes.mail}>
            {user?.email}
            </Typography>
          </Grid>
        </Grid>
        <Grid display={"flex"} justifyContent={"flex-end"}>
          <Button
            className={classes.deleteAccount}
            onClick={handleDialagOpen}
          >
            Delete Account
          </Button>
          <Dialog
            open={isDialogOpen}
            onClose={handleDialogClose}
            fullWidth
            maxWidth="xs"
          >
            <Confirmation onClose={handleDialogClose} />
          </Dialog>
        </Grid>
      </DialogTitle>
    </>
  );
};

export default MyAccount;
