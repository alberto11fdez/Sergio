import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "../stylesheets/RegistrarSesion.css"

function RegistroSesion(){
    return (
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUserCircle className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <RiLockPasswordFill className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required/>
                    <RiLockPasswordFill className="icon"/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="email" required/>
                    <MdOutlineAlternateEmail className="icon"/>
                </div>

                <button><a href="/" className="link">Sign Up </a></button>
                
            </form>
        </div>
    );
}

export default RegistroSesion;