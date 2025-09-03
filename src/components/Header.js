import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    function dropDown() {
        
    }


    return(
        <header className="container">
            <div className="flex justify-between">
                <h1>Connor Hall</h1>
                <nav>
                    <ul class="flex">
                        <li><a href="#about">About me</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact me</a></li>
                    </ul>
                </nav>
                <button onClick={dropDown} className="bars">
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>
        </header>
    );
}

export default Header;