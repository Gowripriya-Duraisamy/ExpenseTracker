import { FC } from "react";
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
import classes from "./myaccount.module.css";
import {
  CANCEL,
  DELETE,
  DELETE_CAMEL_CASE,
  DELETE_INSTRUCTION,
  REASON_DELETE_ACCOUNT,
} from "../../../../constants";

export interface DeleteAccountProps {
  handleDeleteDialagClose: () => void;
}

const DeleteAccount: FC<DeleteAccountProps> = ({ handleDeleteDialagClose }) => {
  return (
    <>
      <DialogTitle>
        <Typography className={classes.title}>{DELETE_CAMEL_CASE}</Typography>
      </DialogTitle>
      <Typography className={classes.instruction}>
        {DELETE_INSTRUCTION}
      </Typography>
      <DialogContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {REASON_DELETE_ACCOUNT}*:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="hard"
              control={<Radio />}
              label="It's hard to use."
            />
            <FormControlLabel
              value="not useful"
              control={<Radio />}
              label="I don't find Money Lover useful."
            />
            <FormControlLabel
              value="impractical"
              control={<Radio />}
              label="I find Money Lover was impractical."
            />
            <FormControlLabel
              value="privacy"
              control={<Radio />}
              label="I have privacy concern."
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other reason."
            />
          </RadioGroup>
        </FormControl>

        <Box className={classes.textBox}>
          <TextField
            id="outlined-multiline-flexible"
            size="small"
            variant="standard"
            placeholder="Start typing"
            // onChange={handlePropertyDescriptionChange}
            name="property.description"
            fullWidth
            multiline={true}
            rows={6}
            // value={property.description}
            inputProps={{
              maxLength: 500,
            }}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Typography className={classes.adornment}>0 / 3000</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button className={classes.cancel} onClick={handleDeleteDialagClose}>
          {CANCEL}
        </Button>
        <Button className={classes.continue} disabled>
          {DELETE}
        </Button>
      </DialogActions>
    </>
  );
};

export default DeleteAccount;
