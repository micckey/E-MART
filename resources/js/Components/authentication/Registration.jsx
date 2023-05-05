import React, { useState } from "react";

const RegisterScreen = () => {


    const [passwordVisible, setPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setPasswordVisible((prevState) => !prevState);
    }

    return (
        <div className="containerCust">
            <div className="login-box">
                <h2>Register</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="fname" id="fname" required="" />
                        <label htmlFor="fname">First name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Last name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Phone No</label>
                    </div>
                    <div className="dropBox">
                        <div><p>Gender: </p></div>
                        <div className="selectBox">
                            <select name="" required>
                                <option value="">Select your gender  </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Non-Binary">Non-Binary</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>


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


                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        SIGN UP
                    </a>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen