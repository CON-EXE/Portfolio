import DropDownNav from "./DropDownNav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [open, setOpen] = useState(false);

    return(
        <header className="container">
            <div className="flex justify-between">
                <h1>Connor Hall</h1>
                <nav className="header-nav">
                    <ul className="flex">
                        <li><a href="#about">About me</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact me</a></li>
                    </ul>
                </nav>
                <button onClick={() => setOpen((prev) => !prev)} className="bars">
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>

            {open && <DropDownNav />}
        </header>
    );
}

export default Header;