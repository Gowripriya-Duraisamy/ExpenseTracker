import { Avatar, Box, Typography } from "@mui/material";

import classes from "./drawer.module.css";

const SwipeTop = () => {
  return (
    <>
      <Avatar className={classes.avatar}>G</Avatar>
      <img src="/static/icons/svg/badge-left.svg" alt="badge-left" className={classes.badgeLeft}/>
      <Box className={classes.badge}>
        <Typography className={classes.badgeName}>Basic Account</Typography>
      </Box>
      <img src="/static/icons/svg/badge.svg" alt="badge-left" className={classes.badgeRight}/>
      <Typography className={classes.username}>Gowripriyaa0707</Typography>
      <Typography className={classes.mail}>gowripriyaa0707@gmail.com</Typography>
    </>
  );
};

export default SwipeTop;
