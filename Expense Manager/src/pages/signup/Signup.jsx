import "../login/Login.css";
import expenseLogo from "../../assets/images/expense-logo.png";
import profileIcon from "../../assets/icons/profile.png";
import lockIcon from "../../assets/icons/lock.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/userStorage";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();

        if (!username || !password || !confirmPassword) {
            alert("Please complete all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const created = registerUser({
            username,
            password,
            expense: [],
            category: [],
            isLoggedIn: false
        });

        if (!created) {
            alert("That username is already registered");
            return;
        }

        alert("Account created. Please sign in.");
        navigate("/login");
    };

    return (
        <div className="login-background">
            <img src={expenseLogo} alt="Expense Manager logo" />
            <h1 className="login-heading">Expense Manager</h1>
            <p className="login-subheading">Create your account and take control of your spending.</p>

            <div className="form-div">
                <form onSubmit={handleSignup}>
                    <h2>Create account</h2>

                    <label htmlFor="signup-username">User Name</label>
                    <div className="input-form">
                        <img src={profileIcon} alt="" />
                        <input
                            type="text"
                            id="signup-username"
                            placeholder="John Doe"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>

                    <label htmlFor="signup-password">Password</label>
                    <div className="input-form">
                        <img src={lockIcon} alt="" />
                        <input
                            type="password"
                            id="signup-password"
                            placeholder="**********"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className="input-form">
                        <img src={lockIcon} alt="" />
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="**********"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="signin-btn">Sign Up</button>
                </form>
            </div>

            <p className="sinup-option">Already have an account? <span onClick={() => navigate("/login")}>Sign In</span></p>
        </div>
    );
}

export default Signup;
