import React, { useState } from 'react'
import '../../styles/TopBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight ,faGlobe,faCaretDown} from '@fortawesome/free-solid-svg-icons';


function TopBanner() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='TopBanner'>
            <div className="container">
                <div className="bg-overlay">

                </div>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

                </div>

                <div className="buttons">
                    <div className={isOpen ? 'dropdown' : 'dropdown active'}>
                        <button onClick={toggleDropdown}><FontAwesomeIcon icon={faGlobe} /><span className='button-text'>English</span><span className='downicon'><FontAwesomeIcon icon={faCaretDown} /></span></button>
                        <div className="dropdown-content">
                            <a href="#/">English</a>
                            <a href="#/">Hindi</a>
                        </div>

                    </div>
                    <a className='signin-btn' href="/signin">Sign In</a>
                </div>
                <div className="contents">
                    <h2>Unlimited movies, TV shows and more</h2>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <div className="email-section">
                        <input type="text" placeholder='Email address' />
                        <button>Get Started<FontAwesomeIcon icon={faChevronRight} className='icon' /></button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default TopBanner