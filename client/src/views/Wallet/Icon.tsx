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
import { useState } from "react";

import classes from "./wallet.module.css";
import { ICONS } from "../../constants/icons";

interface IconProps {
  id: number;
  image: string;
}

const Icon = () => {
  const [isIconDialogOpen, setIconDialogOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<IconProps>(ICONS[0]);

  const handleIconBoxClick = () => {
    setIconDialogOpen((prevState) => !prevState);
  };

  const handleIconSelection = (value: IconProps) => {
    setSelectedIcon(value);
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
                  onClick={() => handleIconSelection(icon)}
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
