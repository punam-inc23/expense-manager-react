import "../css/Login.css"
import expenseLogo from "../assets/images/expense-logo.png";
import profileIcon from "../assets/icons/profile.png";
import lockIcon from "../assets/icons/lock.png";
import googleIcon from "../assets/images/google.png";

function Login(){
    return(
        <div className="login-background">
            <img src={expenseLogo} alt="" />
            <h1 className="login-heading">Expense Manager</h1>
            <p className="login-subheading">Empowering your academic financial journey.</p>
            <div className="form-div">
                <form action="">
                    <h2>Welcome back</h2>

                    <label htmlFor="username">User Name</label>
                    <div className="input-form">
                        <img src={profileIcon} alt="profile" />
                        <input type="text" id="username" placeholder="John Doe" />
                    </div>

                    <div className="password-div">
                        <label htmlFor="password">Password</label>
                        <p>Forgot Password?</p>
                    </div>
                    <div className="input-form">
                        <img src={lockIcon} alt="lock" />
                        <input type="password" id="password" placeholder="**********" />
                    </div>

                    <div className="remember-div">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember this device</label>
                    </div>
                    

                    <button className="signin-btn">Sign In</button>

                    <div className="option-form">
                        <hr />
                        OR
                        <hr />
                    </div>

                    <button className="google-btn">
                        <img src={googleIcon} alt="google" />
                        Sign in with Google
                    </button>

                </form>
            </div>

            <p className="sinup-option">Don't have an account? <span> Sign Up for Free</span></p>

        </div>
    )
}

export default Login;