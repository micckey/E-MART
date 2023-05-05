import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {  
    
    const navigate = useNavigate()
    const register = () => {
        navigate('/user/register')
    }

    const [passwordVisible, setPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setPasswordVisible((prevState) => !prevState);
    }

    return (
        <div className="containerCust">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                            <label>Username</label>
                    </div>
                    <div className="passwordWrapper">
                        <div className="user-box">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                required
                            />

                            <label htmlFor="password">Password</label>
                            <div>
                                <span
                                    className={`toggle-password ${passwordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'}`}
                                    onClick={togglePasswordVisibility}
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div className="buttonCont">
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        LOGIN
                    </a>
                    <div  className="signAlt mt-auto" >or Sign up <p onClick={() => {register()}}>here</p> </div>                        
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginScreen