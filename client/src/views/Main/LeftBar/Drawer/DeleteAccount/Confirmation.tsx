import { ChangeEvent, FC, useState } from "react";
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
  INVALID_INPUT,
} from "../../../../../constants";
import classes from "./delete.module.css";
import useAuth from "../../../../../hooks/useAuth";

export interface ConfirmationProps {
  handleDialogClose: () => void;
  handleDeleteDialagOpen: () => void;
}

const Confirmation: FC<ConfirmationProps> = ({
  handleDialogClose,
  handleDeleteDialagOpen,
}) => {
  const { user } = useAuth();
  const [fieldValue, setFieldValue] = useState("");
  const [fieldError, setFieldError] = useState(false);

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  const handleContinueClick = () => {
    const isErrorOccured = fieldValue !== `DELETE ACCOUNT ${user?.email}`;
    setFieldError(isErrorOccured);
    !isErrorOccured && handleDeleteDialagOpen();
  }

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
          error={fieldError}
          helperText={fieldError ? INVALID_INPUT : null}
          placeholder={`${DELETE_ACCOUNT} ${user?.email}`}
        />
      </DialogContent>
      <DialogActions>
        <Button className={classes.cancel} onClick={handleDialogClose}>
          {CANCEL}
        </Button>
        <Button className={classes.continue} onClick={handleContinueClick}>
          {CONTINUE}
        </Button>
      </DialogActions>
    </>
  );
};

export default Confirmation;
