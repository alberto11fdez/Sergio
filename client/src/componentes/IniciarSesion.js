import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "../stylesheets/IniciarSesion.css"

function IniciarSesion(){
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUserCircle className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <RiLockPasswordFill className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="/">Forgot password?</a>
                </div>

                <button><a href="/" className="link">Login </a></button>
                
                <div className="register-link">
                    <p>Don't have an acount? <a href="/registroSesion">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default IniciarSesion;