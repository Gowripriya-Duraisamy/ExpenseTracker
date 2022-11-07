import { Button, Card, CardContent, Typography } from "@mui/material";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import classes from "./reset.module.css";

const ResetPassword = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { userId } = params;

  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleResetButton = async () => {
    const condition =
      passwordRef?.current &&
      confirmPasswordRef?.current &&
      passwordRef.current.value === confirmPasswordRef.current.value;
    if (condition) {
      const response = await axios.post(
        "http://localhost:5000/api/user/resetPassword",
        { userId, password: passwordRef.current?.value },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response && navigate("/user/login");
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.fieldHeader}>
          Reset your Password
        </Typography>
        <input
          placeholder="password"
          type="password"
          name="password"
          ref={passwordRef}
          className={classes.field}
        />
        <input
          placeholder="confirm Password"
          type="password"
          name="confirmPassword"
          ref={confirmPasswordRef}
          className={classes.field}
        />
        <Button className={classes.button} onClick={handleResetButton}>
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
