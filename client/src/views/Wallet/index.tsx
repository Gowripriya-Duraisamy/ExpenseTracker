import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import classes from "./wallet.module.css";

const Wallet = () => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.walletHeader}>
          Add a wallet First!
        </Typography>
        <Divider className={classes.divider} />
        <Grid className={classes.walletBox}>
          <label className={classes.label}>Wallet name</label>
          <TextField
            variant="standard"
            className={classes.field}
            placeholder="Your wallet name?"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
        <Grid container className={classes.containerGrid}>
          <Grid className={classes.walletBox} item xs={6.5}>
            <label className={classes.label}>Currency</label>
          </Grid>
          <Grid className={classes.walletBox} item xs={5}>
            <label className={classes.label}>Initial Balance</label>
            <TextField
              variant="standard"
              className={classes.field}
              value={0}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
        </Grid>
        <FormGroup className={classes.formGroup}>
          <FormControlLabel
            control={<Checkbox />}
            label="Excluded from Total"
          />
          <FormHelperText className={classes.formHelper}>
            Ignore this wallet and its balance in the "Total" mode
          </FormHelperText>
        </FormGroup>
        <Grid className={classes.buttonGrid}>
          <Button className={classes.button}>Save</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Wallet;
