import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { ChangeEvent, FC, useState } from "react";

import classes from "./myaccount.module.css";
import class1 from "../DeleteAccount/delete.module.css"
import UserIcon from "./userIcon";
import useAuth from "../../../../../hooks/useAuth";
import Confirmation from "../DeleteAccount/Confirmation";
import DeleteAccount from "../DeleteAccount/Delete";
import ReusableDialog from "../DeleteAccount/ResusableDialog";
import {
  CANCEL,
  DELETE_INSTRUCTION,
  SURE_DELETE,
  YES_DELETE,
} from "../../../../../constants";
import { deleteAccount } from "../../../../../slices/account";

export interface MyAccountProps {
  handleClose: () => void;
  accountDialog: boolean;
}

const MyAccount: FC<MyAccountProps> = ({ handleClose, accountDialog }) => {
  const { user, logout } = useAuth();
  const email = user?.email.split("@")[0] || "";
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isFinalConfirmationDialogOpen, setFinalConfirmationOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [reasonData, setReasonData] = useState('');

  const handleReasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReason((event.target as HTMLInputElement).value);
  };

  const handleReasonDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReasonData((event.target as HTMLInputElement).value);
  };

  const handleDialagOpen = () => {
    setDialogOpen(true);
    handleClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDeleteDialagOpen = () => {
    setDeleteDialogOpen(true);
    handleDialogClose();
  };

  const handleDeleteDialagClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleDelete = () => {
    setFinalConfirmationOpen(true);
    handleDeleteDialagClose();
  }

  const handleFinalClose = () => {
    setFinalConfirmationOpen(true)
  }

  const handleDeleteSuccess = () => {
    //api call
    deleteAccount({reason, reasonData})
  }

  const handleSignOut = () => {
    logout();
  };

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
                <Typography className={classes.signout}>SIGN OUT</Typography>
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
          <Button className={classes.deleteAccount} onClick={handleDialagOpen}>
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
        <Confirmation
          handleDeleteDialagOpen={handleDeleteDialagOpen}
          handleDialogClose={handleDialogClose}
        />
      </Dialog>

      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleDeleteDialagClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            maxHeight: 1000,
            maxWidth: "500px",
          },
        }}
      >
        <DeleteAccount 
        reason={reason}
        reasonData={reasonData}
        handleReasonChange={handleReasonChange}
        handleReasonDataChange={handleReasonDataChange}
        handleDeleteDialagClose={handleDeleteDialagClose} 
        handleDelete={handleDelete}
        />
      </Dialog>

      <Dialog
        open={isFinalConfirmationDialogOpen}
        onClose={handleFinalClose}
        fullWidth
        maxWidth="xs"
      >
        <ReusableDialog
          title={SURE_DELETE}
          content={DELETE_INSTRUCTION}
          success={YES_DELETE}
          failure={CANCEL}
          fCN={class1.continue}
          sCN={class1.cancel}
          handleClose={handleFinalClose}
          handleSuccess={handleDeleteSuccess}
        />
      </Dialog>
    </>
  );
};

export default MyAccount;
