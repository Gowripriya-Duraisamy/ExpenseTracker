import { CardContent, Card, Grid, Typography, Divider } from "@mui/material";
import GoogleLogin from "./GoogleLogin";

import classes from "./login.module.css";
import ManualLogin from "./ManualLogin";

const Login = () => {
  return (
    <Grid className={classes.grid}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.header}>Log In</Typography>
          <Grid container>
            <Grid className={classes.itemGrid} item xs={5.8}>
              <Typography className={classes.socialHeader}>
                Using social networking accounts
              </Typography>
              <GoogleLogin />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid className={classes.itemGrid} item xs={5.8}>
              <ManualLogin />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
