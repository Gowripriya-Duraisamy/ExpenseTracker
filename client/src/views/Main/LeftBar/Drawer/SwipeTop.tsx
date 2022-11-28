import { Avatar, Box, Typography } from "@mui/material";

import classes from "./drawer.module.css";

const SwipeTop = () => {
  return (
    <>
      <Avatar className={classes.avatar}>G</Avatar>
      <Box className={classes.badge}>
        <Typography className={classes.badgeName}>Basic Account</Typography>
      </Box>
      <Typography className={classes.username}>Gowripriyaa0707</Typography>
      <Typography className={classes.mail}>gowripriyaa0707@gmail.com</Typography>
    </>
  );
};

export default SwipeTop;
