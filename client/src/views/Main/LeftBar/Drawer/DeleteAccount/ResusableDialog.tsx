import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FC } from "react";
import classes from "./delete.module.css";

export interface ReusableProps {
  title: string;
  content: string;
  success: string;
  sCN: string;
  failure?: string;
  fCN?: string;
  handleClose: () => void;
  handleSuccess: () => void;
}

const ReusableDialog: FC<ReusableProps> = ({
  title,
  content,
  success,
  failure,
  sCN,
  fCN,
  handleSuccess,
  handleClose
}) => {
  return (
    <>
      <DialogTitle>
        <Typography className={classes.title}>{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography className={classes.content}>{content}</Typography>
      </DialogContent>
      <DialogActions>
        {failure && <Button className={fCN} onClick={handleClose}>{failure}</Button>}
        <Button className={sCN} onClick={handleSuccess}>{success}</Button>
      </DialogActions>
    </>
  );
};

export default ReusableDialog;
