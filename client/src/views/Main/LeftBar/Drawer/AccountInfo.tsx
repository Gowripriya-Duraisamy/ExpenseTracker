import { Typography } from "@mui/material";

import classes from "./drawer.module.css";
import UserIcon from "./userIcon";
import useAuth from "../../../../hooks/useAuth";

const AccountInfo = () => {
  const { user } = useAuth();
  const email = user?.email.split('@')[0] || '';
  return (
    <>
      <UserIcon avatar={classes.avatar} badgeLeft={classes.badgeLeft} badgeRight={classes.badgeRight} badge={classes.badge} badgeName={classes.badgeName}/>
      <Typography className={classes.username}>{email?.charAt(0).toUpperCase() + email?.slice(1)}</Typography>
      <Typography className={classes.mail}>{user?.email}</Typography>
    </>
  );
};

export default AccountInfo;
