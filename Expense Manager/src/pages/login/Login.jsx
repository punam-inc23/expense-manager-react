import "../login/Login.css"
import expenseLogo from "../../assets/images/expense-logo.png";
import profileIcon from "../../assets/icons/profile.png";
import lockIcon from "../../assets/icons/lock.png";
import googleIcon from "../../assets/images/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../utils/userStorage";
import { loadUserData } from "../../redux/store";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        const userData = authenticateUser(username, password);

        if (!userData) {
            alert("Incorrect username or password");
            return;
        }

        loadUserData(userData);
        navigate("/homepage");
    };


    return(
        <div className="login-background">

            <img src={expenseLogo} alt="logo" />

            <h1 className="login-heading">Expense Manager</h1>
            <p className="login-subheading">Empowering your academic financial journey.</p>

            <div className="form-div">
                <form onSubmit={handleLogin}>
                    <h2>Welcome back</h2>

                    <label htmlFor="username">User Name</label>
                    <div className="input-form">
                        <img src={profileIcon} alt="profile" />
                        <input type="text" id="username" placeholder="John Doe" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="password-div">
                        <label htmlFor="password">Password</label>
                        <p>Forgot Password?</p>
                    </div>
                    <div className="input-form">
                        <img src={lockIcon} alt="lock" />
                        <input type="password" id="password" placeholder="**********" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="remember-div">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember this device</label>
                    </div>
                    

                    <button type="submit" className="signin-btn">Sign In</button>

                    <div className="option-form">
                        <hr />
                        OR
                        <hr />
                    </div>

                    <button type="button" className="google-btn">
                        <img src={googleIcon} alt="google" />
                        Sign in with Google
                    </button>

                </form>
            </div>

            <p className="sinup-option">Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up for Free</span></p>

        </div>
    )
}

export default Login;