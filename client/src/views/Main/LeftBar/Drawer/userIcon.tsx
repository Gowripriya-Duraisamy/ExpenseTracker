import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";

export interface  UserIconProps {
    badgeLeft: string;
    badgeRight: string;
    badgeName: string;
    badge: string;
    avatar: string;
}

const UserIcon: FC<UserIconProps> = ({avatar, badgeLeft, badgeRight, badge, badgeName}) => {
  return (
    <>
      <Avatar className={avatar}>G</Avatar>
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
