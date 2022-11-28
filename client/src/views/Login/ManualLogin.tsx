import { Typography, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./login.module.css";
import useAuth from "../../hooks/useAuth";

const ManualLogin = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const { type } = params;

  const handleButtonClick = (type: string) => {
    navigate(`/user/${type}`);
  };

  const handlePasswordClick = () => {
    navigate("/forgotPassword");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        if (values.email && values.password) {
          type === "register" && register(values.email, values.password);
          type === "login" && login(values.email, values.password);
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
          {type === "login" && (
            <>
              <Typography
                onClick={handlePasswordClick}
                className={classes.password}
              >
                Forgot Password
              </Typography>
              <Button className={classes.loginButton} type="submit">
                LOGIN
              </Button>
              <Typography
                onClick={() => {
                  handleButtonClick("register");
                  setFieldValue("email", "");
                  setFieldValue("password", "");
                }}
              >
                Don't have an account?
                <span> </span>
                <span className={classes.register}>Register</span>
              </Typography>
            </>
          )}
          {type === "register" && (
            <>
              <Button className={classes.loginButton} type="submit">
                REGISTER
              </Button>
              <Typography
                onClick={() => {
                  handleButtonClick("login");
                  setFieldValue("email", "");
                  setFieldValue("password", "");
                }}
              >
                Have an account?
                <span> </span>
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
