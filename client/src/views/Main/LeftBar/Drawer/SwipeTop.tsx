import { Typography } from "@mui/material";

import classes from "./drawer.module.css";
import UserIcon from "./userIcon";

const SwipeTop = () => {
  return (
    <>
      <UserIcon avatar={classes.avatar} badgeLeft={classes.badgeLeft} badgeRight={classes.badgeRight} badge={classes.badge} badgeName={classes.badgeName}/>
      <Typography className={classes.username}>Gowripriyaa0707</Typography>
      <Typography className={classes.mail}>gowripriyaa0707@gmail.com</Typography>
    </>
  );
};

export default SwipeTop;
