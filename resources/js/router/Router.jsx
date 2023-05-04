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
                <Route path="/user/login" element={<Login />} />
                <Route path="/user/register" element={<Register />} />
                <Route path="/*" element={<NotFound />} />                
            </Routes>
        </div>
    )
}

export default Router;