import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "../Components/screens/Index";
import NotFound from "../Components/screens/Notfound";
import Login from "../Components/authentication/Login";
import Register from "../Components/authentication/Registration";



const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default Router;