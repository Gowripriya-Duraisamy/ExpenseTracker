import { ChangeEvent, FC } from "react";
import {
  DialogTitle,
  Typography,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import {
  CONFIRMATION,
  DELETE_ACCOUNT_CONFIRMATION_CONTENT,
  DELETE_BOLD_STATEMENT,
  DELETE_ACCOUNT,
  CANCEL,
  CONTINUE,
} from "../../../../../constants";
import classes from "./delete.module.css";
import useAuth from "../../../../../hooks/useAuth";

export interface ConfirmationProps {
  handleFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDialogClose: () => void;
  handleDeleteDialagOpen: () => void;
}

const Confirmation: FC<ConfirmationProps> = ({
  handleDialogClose,
  handleFieldChange,
  handleDeleteDialagOpen,
}) => {
  const { user } = useAuth();
  return (
    <>
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
        <Button className={classes.continue} onClick={handleDeleteDialagOpen}>
          {CONTINUE}
        </Button>
      </DialogActions>
    </>
  );
};

export default Confirmation;
