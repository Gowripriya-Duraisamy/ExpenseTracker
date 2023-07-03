import { useEffect } from "react";

import { getWallet } from "../../slices/wallet";
import { useDispatch } from "../../store";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";

const NavBar = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getWallet());
  }, [dispatch]);
  
  return (
    <>
      <TopBar />
      <LeftBar />
    </>
  );
};

export default NavBar;
