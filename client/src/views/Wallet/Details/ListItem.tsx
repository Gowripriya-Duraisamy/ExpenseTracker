import {
  Avatar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ICONS } from "../../../constants/icons";
import classes from "./details.module.css";
import { useDispatch } from "../../../store";
import { deleteWallet, editWallet, Wallet } from "../../../slices/wallet";
import useAuth from "../../../hooks/useAuth";
import Balance from "./Balance";

export interface ListItemProps {
  wallet: Wallet | null;
  handleWalletDetail: (wallet: Wallet | null) => void;
  walletsLen: number;
}

const ListItem: FC<ListItemProps> = ({
  wallet,
  handleWalletDetail,
  walletsLen,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(wallet);

  const handleDeleteButton = () => {
    selectedWallet?._id && dispatch(deleteWallet(selectedWallet._id));
    walletsLen === 1
      ? navigate("/expense/wallet", { replace: true })
      : setSelectedWallet(null);
  };

  const handleExcludeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedWallet((prevState) => {
      if (prevState) {
        return { ...prevState, isTotalExcluded: event.target.checked };
      }
      return prevState;
    });
    selectedWallet?._id &&
      dispatch(
        editWallet(selectedWallet._id, {
          ...selectedWallet,
          isTotalExcluded: event.target.checked,
        })
      );
  };

  const handleArchiveCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedWallet((prevState) => {
      if (prevState) {
        return { ...prevState, isArchived: event.target.checked };
      }
      return prevState;
    });
    selectedWallet?._id &&
      dispatch(
        editWallet(selectedWallet._id, {
          ...selectedWallet,
          isArchived: event.target.checked,
        })
      );
  };
  return (
    selectedWallet && (
      <Grid item xs={6}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container className={classes.headerGrid}>
              <Grid item xs={6} className={classes.iconGrid}>
                <IconButton
                  aria-label="close"
                  onClick={() => handleWalletDetail(null)}
                  sx={{
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <Close />
                </IconButton>
                <Typography className={classes.detailHeader}>
                  Wallet Details
                </Typography>
              </Grid>
              <Grid className={classes.buttonGrid} item xs={6}>
                <Button onClick={handleDeleteButton} className={classes.delete}>
                  Delete
                </Button>
                {!selectedWallet.isArchived && (
                  <Button className={classes.balance}>Edit</Button>
                )}
              </Grid>
            </Grid>
          </CardContent>
          <Divider orientation="horizontal"></Divider>
          <CardContent>
            <Grid container className={classes.detailsGrid}>
              <Grid item>
                <IconButton className={classes.detailIcon}>
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    src={ICONS[selectedWallet.imageId - 1].image}
                  />
                </IconButton>
              </Grid>
              <Grid item className={classes.nameGrid}>
                <Typography className={classes.detailName}>
                  {selectedWallet.name}
                </Typography>
                <Typography className={classes.detailBalance}>
                  {selectedWallet.currency}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Divider orientation="horizontal"></Divider>
          <CardContent>
            <Grid container className={classes.detailsGrid}>
              <Grid item>
                <IconButton className={classes.detailIcon}>
                  <Avatar className={classes.avatar}>
                    {user?.email.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Grid>
              <Grid item className={classes.nameGrid}>
                <Typography className={classes.walletName}>
                  {user?.email.split("@")[0]}
                </Typography>
                <Typography className={classes.walletBalance}>
                  {user?.email}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Divider orientation="horizontal"></Divider>
          <CardContent className={classes.checkBoxCard}>
            <FormGroup className={classes.formGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    disabled={selectedWallet.isArchived}
                    checked={selectedWallet.isTotalExcluded}
                    onChange={handleExcludeCheckBox}
                  />
                }
                label="Excluded from Total"
              />
              <FormHelperText className={classes.formHelper}>
                Ignore this wallet and its balance in the "Total" mode
              </FormHelperText>
            </FormGroup>
            <FormGroup className={classes.formGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedWallet.isArchived}
                    onChange={handleArchiveCheckBox}
                  />
                }
                label="Archived"
              />
              <FormHelperText className={classes.formHelper}>
                Freeze this wallet and stop generating bills & recurring
                transactions.
              </FormHelperText>
            </FormGroup>
          </CardContent>
          {!selectedWallet.isArchived && (
            <Balance
              initialBalance={selectedWallet.initialBalance}
              selectedWallet={selectedWallet}
              handleExcludeCheckBox={handleExcludeCheckBox}
            />
          )}
        </Card>
      </Grid>
    )
  );
};

export default ListItem;
