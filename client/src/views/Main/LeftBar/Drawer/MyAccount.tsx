import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { ChangeEvent, FC, useState } from "react";

import classes from "./myaccount.module.css";
import UserIcon from "./userIcon";
import useAuth from "../../../../hooks/useAuth";
import {
  CONFIRMATION,
  DELETE_ACCOUNT_CONFIRMATION_CONTENT,
  DELETE_BOLD_STATEMENT,
  DELETE_ACCOUNT,
  CANCEL,
  CONTINUE,
} from "../../../../constants";

export interface MyAccountProps {
  handleClose: () => void;
  accountDialog: boolean;
}

const MyAccount: FC<MyAccountProps> = ({ handleClose, accountDialog }) => {
  const { user, logout } = useAuth();
  const email = user?.email.split("@")[0] || "";
  const [fieldValue, SetFieldValue] = useState("");

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    SetFieldValue(event.target.value);
  };

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialagOpen = () => {
    setDialogOpen(true);
    handleClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSignOut = () => {
    logout();
  }

  return (
    <>
      <Dialog
        open={accountDialog}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle className={classes.title}>
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
              <Box onClick={handleSignOut}>
              <Typography className={classes.signout} >SIGN OUT</Typography>
              </Box>
            </Grid>
          </Grid>
          </DialogTitle>
          <Divider />
          <Grid container className={classes.badgeGrid}>
            <Grid item xs={5}>
              <UserIcon
                avatar={classes.avatar}
                badgeLeft={classes.badgeLeft}
                badgeRight={classes.badgeRight}
                badge={classes.badge}
                badgeName={classes.badgeName}
              />
            </Grid>
            <Grid className={classes.detailGrid}>
            <Typography className={classes.username}>
                {email?.charAt(0).toUpperCase() + email?.slice(1)}
              </Typography>
              <Typography className={classes.mail}>{user?.email}</Typography>
            </Grid>
          </Grid>
          <Grid display={"flex"} justifyContent={"flex-end"}>
            <Button
              className={classes.deleteAccount}
              onClick={handleDialagOpen}
            >
              Delete Account
            </Button>
          </Grid>
      </Dialog>
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>
          <Typography className={classes.title}>{CONFIRMATION}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>
            {DELETE_ACCOUNT_CONFIRMATION_CONTENT}{" "}
            <span className={classes.statement}>{DELETE_BOLD_STATEMENT}</span>
          </Typography>
          <TextField
            className={classes.field}
            fullWidth
            size="small"
            inputProps={{ style: { fontSize: 14 } }}
            onChange={handleFieldChange}
            placeholder={`${DELETE_ACCOUNT} ${user?.email}`}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.cancel} onClick={handleDialogClose}>
            {CANCEL}
          </Button>
          <Button className={classes.continue}>{CONTINUE}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyAccount;
