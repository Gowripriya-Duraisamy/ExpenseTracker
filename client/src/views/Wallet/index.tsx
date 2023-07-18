import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";

import Header from "../../components/CommonHeader";
import { CREATE, MY_WALLET, WALLET_CREATE } from "../../constants";
import WalletCard from "./walletCard";
import { useDispatch } from "../../store";
import { saveWallet, Wallet } from "../../slices/wallet";

const MyWallet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleArrowAction = () => {
    navigate("/expense/transactions");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (data: Wallet) => {
    dispatch(saveWallet(data));
    handleClose();
    navigate("/expense/wallet/details")
}

  return (
    <>
      <Header
        name={MY_WALLET}
        handleArrowAction={handleArrowAction}
      />
      <Dialog open={open} >
        <WalletCard handleClose={handleClose} title={WALLET_CREATE} type={CREATE} handleSave={handleSave} />
      </Dialog>
    </>
  );
};

export default MyWallet;
