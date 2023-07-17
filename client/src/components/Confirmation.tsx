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
}

const Confirmation: FC<ConfirmationProps> = ({
  name,
  className,
  title,
  content,
  failure,
  success,
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
        variant="outlined"
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
          <Button onClick={handleClose}>{failure}</Button>
          <Button onClick={handleSuccessAction}>{success}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Confirmation;
