import { Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default RenderRoutes;
