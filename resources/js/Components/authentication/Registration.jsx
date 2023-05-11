import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const RegisterScreen = () => {

    const navigate = useNavigate()
    const login = () => {
        navigate('/login')
    }

    const [passwordVisible, setPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setPasswordVisible((prevState) => !prevState);
    }

    //REGISTER LOGIC
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        await fetch('/api/user/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                fname, lname, email, phone, gender, password
            })
        }).then((response) => {
            if (response.ok) {
                // Redirect to login page on success
                redirect('/login')
            }
        });
    }




    return (
        <div className="containerCust">
            <div className="login-box">
                <h2>Register</h2>
                <form onSubmit={submit}>
                    <div className="user-box">
                        <input type="text" name="" required onChange={e => setFName(e.target.value)} />
                        <label>First name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required onChange={e => setLName(e.target.value)} />
                        <label>Last name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required onChange={e => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required onChange={e => setPhone(e.target.value)} />
                        <label>Phone No</label>
                    </div>
                    <div className="dropBox">
                        <div><p>Gender: </p></div>
                        <div className="selectBox">
                            <select name="" required onChange={e => setGender(e.target.value)}>
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
                                onChange={e => setPassword(e.target.value)}
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
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            SIGN UP
                        </button>
                        <div className="signAlt mt-auto" >or Log in <p onClick={() => { login() }}>here</p> </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen