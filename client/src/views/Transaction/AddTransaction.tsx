import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { ChangeEvent, useState } from "react";
import moment from "moment";

import classes from "./transaction.module.css";
import Category from "./Category";
import { CategoryAttributes, CategoryInitial } from "../Categories/types";

const AddTransaction = () => {
  const [open, setOpen] = useState(false);
  const [addMoreDetails, setAddMoreDetails] = useState(false);
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("0");
  const [dateString, setDateString] = useState(moment().format("DD/MM/YYYY"));
  const [selectedCategory, setCategory] = useState<CategoryAttributes>(CategoryInitial);

  const handleCategorySelection = (value: CategoryAttributes) => {
        setCategory(value)
  }

  const handleAddTransactionButton = () => {
    setOpen((prevState) => !prevState);
  };

  const handleNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (newValue: string | null) => {
    newValue && setDateString(moment(newValue).format("DD/MM/YYYY"));
  };

  return (
    <Box>
      <Button className={classes.button} onClick={handleAddTransactionButton}>
        Add Transaction
      </Button>
      <Dialog fullWidth maxWidth="md" open={open}>
        <DialogTitle className={classes.transactionHeader}>
          Add Transaction
        </DialogTitle>
        <Divider className={classes.divider} />
        <DialogContent>
          <Grid container className={classes.containerGrid}>
            <Grid className={classes.containerBox} item xs={3.8}>
              <label className={classes.label}>Wallet</label>
            </Grid>
            <Category selectedCategory={selectedCategory} handleSelection={handleCategorySelection} />
            <Grid className={classes.containerBox} item xs={3.8}>
              <label className={classes.label}>Amount</label>
              <TextField
                variant="standard"
                className={classes.field}
                value={amount}
                onChange={handleAmountChange}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.containerGrid}>
            <Grid className={classes.containerBox} item xs={3.8}>
              <label className={classes.label}>Date</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  value={dateString ? moment(dateString).toDate() : ""}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      value={dateString}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      className={classes.field}
                      fullWidth
                      onClick={params.onClick}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid className={classes.containerBox} item xs={7.9}>
              <label className={classes.label}>Note</label>
              <TextField
                variant="standard"
                className={classes.field}
                value={note}
                placeholder="Note"
                onChange={handleNoteChange}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
          </Grid>
          <Typography
            onClick={() => {
              setAddMoreDetails((prevState) => !prevState);
            }}
            className={classes.moreDetails}
          >
            {!addMoreDetails ? "Add more details " : "Less"}
          </Typography>
          {addMoreDetails && (
            <>
              <Grid container justifyContent={"space-between"}>
                <Grid container xs={8.5}>
                  <Grid container className={classes.containerGrid1}>
                    <Grid className={classes.containerBox1} item xs={5.8}>
                      <label className={classes.label}>With</label>
                    </Grid>
                    <Grid className={classes.containerBox1} item xs={5.8}>
                      <label className={classes.label}>Reminder</label>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.containerGrid1}>
                    <Grid className={classes.containerBox1} item xs={5.8}>
                      <label className={classes.label}>Location</label>
                    </Grid>
                    <Grid className={classes.containerBox1} item xs={5.8}>
                      <label className={classes.label}>Event</label>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={3} className={classes.containerGrid1}>
                  <Box className={classes.photoBox}>
                    <label htmlFor="">Photo</label>
                  </Box>
                </Grid>
              </Grid>
              <FormGroup className={classes.formGroup}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Excluded from Report"
                />
                <FormHelperText className={classes.formHelper}>
                  Don't Include this transaction in reports such as overview
                </FormHelperText>
              </FormGroup>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAddTransactionButton}
            className={classes.cancelButton}
          >
            cancel
          </Button>
          <Button className={classes.button}>save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddTransaction;
