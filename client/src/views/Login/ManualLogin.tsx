import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { Form, Formik } from "formik";

import classes from "./login.module.css";
import { useDispatch } from "../../store";
import { login, register } from "../../slices/login/action";

const ManualLogin = () => {
  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(false);

  const handleButtonClick = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        if (values.email && values.password) {
          !isLogin && dispatch(register(values.email, values.password));
          isLogin && dispatch(login(values.email, values.password));
        }
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form>
          <Typography className={classes.fieldHeader}>
            Using Expense Tracker Account
          </Typography>
          <input
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={classes.field}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={classes.field}
          />
          {!!isLogin && <Typography className={classes.password}>Forgot Password</Typography>}
          {!!isLogin && (
            <>
              <Button className={classes.loginButton} type="submit">
                LOGIN
              </Button>
              <Typography
                onClick={() => {
                  handleButtonClick();
                  setFieldValue("email", "");
                  setFieldValue("password", "");
                }}
              >
                Don't have an account?{" "}
                <span className={classes.register}>Register</span>
              </Typography>
            </>
          )}
          {!isLogin && (
            <>
              <Button className={classes.loginButton} type="submit">
                REGISTER
              </Button>
              <Typography
                onClick={() => {
                  handleButtonClick();
                  setFieldValue("email", "");
                  setFieldValue("password", "");
                }}
              >
                Have an account?{" "}
                <span className={classes.register}>Sign In</span>
              </Typography>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ManualLogin;
