import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import { useRef } from "react";
import classes from "./password.module.css";

const ForgotPassword = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  return (
    <Grid className={classes.grid}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.header}>Forgot Password</Typography>
          <Typography className={classes.hint}>
            {" "}
            Enter the email address you used to register, and we will send you
            an email to recover your password in no time.
          </Typography>
          <input
            ref={emailRef}
            placeholder="Email"
            name="email"
            className={classes.field}
          />
          <Button className={classes.button} type="submit">
            Confirm
          </Button>
          <Typography>
            <span className={classes.redirect}>Back to Login</span>
            <span> or </span>
            <span className={classes.redirect}>Create Account</span>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ForgotPassword;
