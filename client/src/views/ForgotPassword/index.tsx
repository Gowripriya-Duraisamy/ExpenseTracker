import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./password.module.css";

const ForgotPassword = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleBackButton = (type: string) => {
    navigate(`/user/${type}`);
  }

  const handleConfirmation = async () => {
    try {
      if (emailRef?.current && emailRef.current.value) {
        const response = await axios.post(
          "http://localhost:5000/api/user/forgotPassword",
          { email: emailRef.current.value },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data) {
          setConfirm("Confirmed");
        }
      }
    } catch (error) {
      setConfirm("NotConfirmed");
    }
  };

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
          {!confirm && (
            <>
              <input
                ref={emailRef}
                placeholder="Email"
                name="email"
                className={classes.field}
              />
              <Button className={classes.button} onClick={handleConfirmation}>
                Confirm
              </Button>
            </>
          )}
          {confirm === "Confirmed" && (
            <Typography>
              Please check your email account for further instructions
            </Typography>
          )}
          {confirm === "NotConfirmed" && (
            <Typography>
              Please Register your email, your email is not yet Registered.
            </Typography>
          )}
          <Typography>
            <span onClick={() => handleBackButton("login")} className={classes.redirect}>Back to Login</span>
            <span> or </span>
            <span onClick={() =>handleBackButton("register")} className={classes.redirect}>Create Account</span>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ForgotPassword;
