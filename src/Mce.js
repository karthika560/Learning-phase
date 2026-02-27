import React from 'react';
import './Login1.css';
const Mce=()=>{
    return(
        <div className="inside">
        <h2>Welcome back</h2>
        <form>
            <div className="email">📩<input type="email" placeholder="Email Address" required/>
            </div>
            <div className="password">🔐<input type="password" placeholder="Password" required/>
            </div>
             <div>
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit" className="submit-btn">Sign in</button>
            </div>
    
        <div className="signup">
            <p>   Don't have an account? <a href="#">Sign up</a></p>
        </div>
        </form>
        <div className="social-login">
            <div className="social-btn"><img src="https://cdn-icons-png.flaticon.com/128/104/104093.png"alt="Google"/></div>
            <div className="social-btn"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"alt="GitHub"/></div>
            <div className="social-btn"><img src="https://cdn-icons-png.flaticon.com/128/20/20837.png"alt="Facebook"/></div>
        </div>
    </div>
)
}
export default Mce