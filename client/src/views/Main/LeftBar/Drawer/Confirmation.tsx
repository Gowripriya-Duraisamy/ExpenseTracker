import {
  DialogTitle,
  DialogActions,
  Typography,
  Button,
  DialogContent,
  TextField,
} from "@mui/material";
import { ChangeEvent, FC, useState } from "react";

import classes from "./confirmation.module.css";
import {
  CANCEL,
  CONFIRMATION,
  CONTINUE,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_CONFIRMATION_CONTENT,
  DELETE_BOLD_STATEMENT,
} from "../../../../constants";

export interface ConfirmationProps {
  onClose: () => void;
}

const Confirmation: FC<ConfirmationProps> = ({ onClose }) => {
  const [fieldValue, SetFieldValue] = useState("");

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    SetFieldValue(event.target.value);
  };

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
          placeholder={`${DELETE_ACCOUNT}`}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{CANCEL}</Button>
        <Button>{CONTINUE}</Button>
      </DialogActions>
    </>
  );
};

export default Confirmation;
