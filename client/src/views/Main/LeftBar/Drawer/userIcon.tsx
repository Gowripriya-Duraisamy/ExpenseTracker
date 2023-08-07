import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";
import useAuth from "../../../../hooks/useAuth";

export interface  UserIconProps {
    badgeLeft: string;
    badgeRight: string;
    badgeName: string;
    badge: string;
    avatar: string;
}

const UserIcon: FC<UserIconProps> = ({avatar, badgeLeft, badgeRight, badge, badgeName}) => {
  const {user} = useAuth();
  return (
    <>
      <Avatar className={avatar}>{user?.email.charAt(0).toUpperCase()}</Avatar>
      <img
        src="/static/icons/svg/badge-left.svg"
        alt="badge-left"
        className={badgeLeft}
      />
      <Box className={badge}>
        <Typography className={badgeName}>Basic Account</Typography>
      </Box>
      <img
        src="/static/icons/svg/badge.svg"
        alt="badge-left"
        className={badgeRight}
      />
    </>
  );
};

export default UserIcon;
