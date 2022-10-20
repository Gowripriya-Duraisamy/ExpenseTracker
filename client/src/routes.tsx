import { Routes, Route } from "react-router-dom";

import Login from "./views/Login";


const RenderRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
        </Routes>
    )
}

export default RenderRoutes;