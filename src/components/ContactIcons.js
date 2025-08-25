import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactIcons() {
    return(
        <>
            <p>Heres where to find <span>me</span></p>
            <div class="contact-icons flex align justify-between">
                <div class="grid-center align">
                    <a href="https://github.com/CON-EXE">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
                <div class="grid-center">
                    <a href="https://www.linkedin.com/in/connor-hall-5a24b0357/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default ContactIcons;