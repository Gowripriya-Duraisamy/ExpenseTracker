import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import ResetPassword from "./views/ResetPassword";
import Wallet from "./views/Wallet";
import Account from "./views/Account";
import AddTransaction from "./views/Transaction/AddTransaction";
import Categories from "./views/Categories";
import NavBar from "./views/Navbar";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/user/login" />} />
      <Route path="/user/:type" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword/:userId" element={<ResetPassword />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/account" element={<Account />} />
      <Route path="/addTransaction" element={<AddTransaction />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes>
  );
};

export default RenderRoutes;
