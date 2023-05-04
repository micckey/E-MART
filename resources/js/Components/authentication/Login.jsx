import React from "react";
// import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    return (
        <div className="containerCust">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                            <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" />
                            <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        LOGIN
                    </a>
                </form>
            </div>
        </div>

    )
}

export default LoginScreen