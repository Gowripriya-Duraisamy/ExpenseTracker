import { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  //   Slide,
  DialogContentText,
  Divider,
} from "@mui/material";
import classes from "./confirmation.module.css"

export interface ConfirmationProps {
  name: string;
  className: string;
  title: string;
  content: string;
  success: string;
  failure: string;
  handleSuccessAction : () => void;
  successCN: string;
  failureCN: string;
}

const Confirmation: FC<ConfirmationProps> = ({
  name,
  className,
  title,
  content,
  failure,
  success,
  successCN,
  failureCN,
  handleSuccessAction
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        className={className}
        onClick={handleClickOpen}
      >
        {name}
      </Button>
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth={"xs"}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <Divider className={classes.divider} />
        <DialogContent >
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={failureCN} onClick={handleClose}>{failure}</Button>
          <Button className={successCN} onClick={handleSuccessAction}>{success}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Confirmation;
