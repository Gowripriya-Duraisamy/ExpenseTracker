import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import ResetPassword from "./views/ResetPassword";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/user/login" />} />
      <Route path="/user/:type" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword/:userId" element={<ResetPassword />} />
    </Routes>
  );
};

export default RenderRoutes;
