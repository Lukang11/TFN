import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return <>
        <nav>
            <ul>
                <li><Link to="about">About</Link></li>
                <li><Link to="services">services</Link></li>
                <li><Link to="contact">contact</Link></li>
                <li><Link to="contact/us">contact/us</Link></li>
                <li><Link to="contact/pl">contact/pl</Link></li>
                <li><Link to="contact/de">contact/de</Link></li>
            </ul>  
        </nav>
    </>
}
export default Home;