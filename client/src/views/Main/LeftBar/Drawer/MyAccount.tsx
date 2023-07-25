import {
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { FC } from "react";

import classes from "./account.module.css";

export interface MyAccountProps {
  handleClose: () => void;
}

const MyAccount: FC<MyAccountProps> = ({ handleClose }) => {
  return (
    <>
      <DialogTitle>
        <Grid container>
          <Grid item>
            <IconButton>
              <CloseOutlinedIcon
                className={classes.close}
                onClick={handleClose}
              />
            </IconButton>
            <Typography>My Account</Typography>
          </Grid>
          <Grid item>
            <Typography>SIGN OUT</Typography>
          </Grid>
        </Grid>

        <Divider />
      </DialogTitle>
    </>
  );
};

export default MyAccount;
