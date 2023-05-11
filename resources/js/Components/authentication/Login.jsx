import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";


const LoginScreen = () => {

    const navigate = useNavigate()
    const register = () => {
        redirect('/register')
    }

    const [passwordVisible, setPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setPasswordVisible((prevState) => !prevState);
    }

    // Login validation  
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState('')
    const submit = async (e) => {
        e.preventDefault()

        await fetch('/api/user/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email, password
            })
        }).then((response) => {
            if (response.ok) {
                // Redirect to login page on success
                navigate('/dashboard')
            }
            else {
                return response.json().then((data) => {
                    setErrors(data.errors)
                });
            }
        })
    }


    return (
        <div className="containerCust">
            <div className="login-box">
                <h2>Login</h2>
                {errors.length > 0 && (
                    <div className="alert">
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="user-box">
                        <input type="text" name="" onChange={e => setEmail(e.target.value)} required />
                        <label>Email</label>
                    </div>
                    <div className="passwordWrapper">
                        <div className="user-box">
                            <input
                                onChange={e => setPassword(e.target.value)}
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
                        <button type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            LOGIN
                        </button>
                        <div className="signAlt mt-auto" >or Sign up <p onClick={() => { register() }}>here</p> </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginScreen