import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { FC, useState } from "react";

import classes from "./wallet.module.css";
import { ICONS } from "../../constants/icons";

export interface IconProps {
  id: number;
  image: string;
}

interface IconComponentProps {
  selectedIcon: IconProps,
  handleIconSelection: (value: IconProps) => void;
}

const Icon: FC<IconComponentProps> = ({selectedIcon, handleIconSelection}) => {
  const [isIconDialogOpen, setIconDialogOpen] = useState(false);
  

  const handleIconBoxClick = () => {
    setIconDialogOpen((prevState) => !prevState);
  };

  const handleSelectedIcon = (value: IconProps) => {
    handleIconSelection(value);
    handleIconBoxClick();
  };

  return (
    <>
      <Grid item xs={3} onClick={handleIconBoxClick} className={classes.iconGrid}>
        <IconButton>
          <Avatar src={selectedIcon.image} />
        </IconButton>
        <KeyboardArrowDown />
      </Grid>
      <Dialog open={isIconDialogOpen} fullWidth maxWidth="xs">
        <DialogTitle className={classes.dialogTitle}>
          {" "}
          <IconButton
            aria-label="close"
            onClick={handleIconBoxClick}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
          <Typography className={classes.currencyHeader}>
            Select icon
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Tabs value={"basic"} centered>
            <Tab label="Basic" value="basic" />
          </Tabs>
          <Box className={classes.iconOuterBox}>
            {ICONS.map((icon) => {
              return (
                <Avatar
                key={icon.id}
                  onClick={() => handleSelectedIcon(icon)}
                  className={classes.avatar}
                  src={icon.image}
                />
              );
            })}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Icon;
