import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function HeroContent() {
    return(
        <div className="hero-content overlay flex grid-center">
            <div>
                <p className="left">Hey! I'm</p>
                <h2><span>Connor Hall</span></h2>
                <p className="right">I make things work</p>
            </div>
            <FontAwesomeIcon icon={faArrowDown} className='arrow'/>
        </div>
    );
}

export default HeroContent;