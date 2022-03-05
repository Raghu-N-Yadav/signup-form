import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="bg-secondary p-3 mt-0">
            <div className="bg-secondary d-flex justify-content-between">
                <span className="fw-light text-white fs-5">A Place to find Talkative people. Open your Heart and Talk freely</span>
                <div className="d-flex gap-1 justify-content-center flex-column flex-sm-row">
                    <Link className="text-white nav-link" to="/">Home</Link>
                    <Link className="text-white nav-link" to="/about">About</Link>
                    <Link className="text-white nav-link" to="/signUp">SignUp</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;