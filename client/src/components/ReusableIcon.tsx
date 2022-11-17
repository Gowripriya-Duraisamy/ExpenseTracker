import { Box } from "@mui/material";
import { FC } from "react";

export interface IconProps {
    className: string;
    onClick?: () => void;
    image: string;
}

const ReusableIcon: FC<IconProps> = ({
    className, 
    onClick,
    image
}) => {
  return (
    <Box
      className={className}
      onClick={() => {
        return onClick ? onClick() : false;
      }}
    >
      <img src={image} alt="icon" />
    </Box>
  );
};

export default ReusableIcon;
