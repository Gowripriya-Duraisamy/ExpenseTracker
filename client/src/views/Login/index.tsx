import {
  CardContent,
  Card,
  Grid,
  Typography,
  Divider,
  Button
} from "@mui/material";
import GoogleLogin from "./GoogleLogin";

import classes from "./login.module.css";

const Login = () => {
  return (
    <Grid className={classes.grid}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.header}>Log In</Typography>
          <Grid container>
            <Grid className={classes.itemGrid} item xs={5.8}>
            <Typography className={classes.socialHeader}>Using social networking accounts</Typography>
            <GoogleLogin />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid className={classes.itemGrid} item xs={5.8}>
              <Typography className={classes.fieldHeader}>Using Expense Tracker Account</Typography>
                <input placeholder="Email" className={classes.field} />
                <input placeholder="Password" className={classes.field} />
              <Typography className={classes.password}>Forgot Password</Typography>
              <Button className={classes.loginButton} type="submit">Login</Button>
              <Typography>Don't have an account? <span className={classes.resgister}>Register</span></Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
