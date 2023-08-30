import { ChangeEvent, FC, useState } from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./delete.module.css";
import {
  CANCEL,
  DELETE,
  DELETE_CAMEL_CASE,
  DELETE_INSTRUCTION,
  PLACEHOLDER_VALUES,
  REASON_DELETE_ACCOUNT,
} from "../../../../../constants";

export interface DeleteAccountProps {
  handleDeleteDialagClose: () => void;
  handleDelete: () => void;
}

const DeleteAccount: FC<DeleteAccountProps> = ({ handleDeleteDialagClose, handleDelete }) => {
  const [reason, setReason] = useState("");
  const [reasonData, setReasonData] = useState('');

  const handleReasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReason((event.target as HTMLInputElement).value);
  };

  const handleReasonDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReasonData((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <DialogTitle>
        <Typography className={classes.title}>{DELETE_CAMEL_CASE}</Typography>
      </DialogTitle>
      <Typography className={classes.instruction}>
        {DELETE_INSTRUCTION}
      </Typography>
      <DialogContent style={{ overflow: "hidden" }}>
      <FormLabel className={classes.radioLabel}>
            {REASON_DELETE_ACCOUNT}*:
          </FormLabel>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={reason}
            onChange={handleReasonChange}
          >
            <FormControlLabel
              value="1"
              control={<Radio sx={{
                "&.Mui-checked": {
                  color: "green"
                }
              }} />}
              label="It's hard to use."
            />
            <FormControlLabel
              value="2"
              control={<Radio  sx={{
                "&.Mui-checked": {
                  color: "green"
                }
              }}/>}
              label="I don't find Money Lover useful."
            />
            <FormControlLabel
              value="3"
              control={<Radio sx={{
                "&.Mui-checked": {
                  color: "green"
                }
              }} />}
              label="I find Money Lover was impractical."
            />
            <FormControlLabel
              value="4"
              control={<Radio sx={{
                "&.Mui-checked": {
                  color: "green"
                }
              }} />}
              label="I have privacy concern."
            />
            <FormControlLabel
              value="5"
              control={<Radio  sx={{
                "&.Mui-checked": {
                  color: "green"
                }
              }} />}
              label="Other reason."
            />
          </RadioGroup>
        </FormControl>

        {reason && (
          <Box className={classes.textBox}>
            <TextField
              id="outlined-multiline-flexible"
              size="small"
              variant="standard"
              placeholder={`${PLACEHOLDER_VALUES[+reason - 1]}`}
              onChange={handleReasonDataChange}
              name="property.description"
              fullWidth
              multiline={true}
              rows={4}
              value={reasonData}
              inputProps={{
                maxLength: 3000,
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Typography className={reasonData.length === 3000
                    ? classes.adornmentDanger
                    : classes.adornment
                }>{reasonData.length}/ 3000</Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button className={classes.cancel} onClick={handleDeleteDialagClose}>
          {CANCEL}
        </Button>
        <Button className={classes.continue} disabled={!reason} onClick={handleDelete}>
          {DELETE}
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteAccount;
