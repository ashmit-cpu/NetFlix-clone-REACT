import React, { useState } from 'react'
import '../../styles/Frequently.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark,faChevronRight } from '@fortawesome/free-solid-svg-icons';





function Frequently() {
    const [activeSection, setActiveSection] = useState(null);
    const toggleAccordion = (section) => {
        setActiveSection(activeSection === section ? null : section)
    }
    return (
        <div className='Frequently'>
            <div className="container">

                <div className="accordion-section">
                    <h2>Frequently Asked Questions</h2>
                    <button className="accordion" onClick={() => toggleAccordion(1)}>What is Netflix?<span className="icon">{activeSection === 1 ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faPlus} />)}</span></button>

                    <div className={`panel ${activeSection == 1 ? 'active' : ''}`}>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </div>

                    <button className="accordion" onClick={() => toggleAccordion(2)}>How much does Netflix cost?<span className="icon">{activeSection === 2 ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faPlus} />)}</span></button>
                    <div className={`panel ${activeSection == 2 ? 'active' : ''}`}>
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                    </div>

                    <button className="accordion" onClick={() => toggleAccordion(3)}>Where can I watch?<span className="icon">{activeSection === 3 ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faPlus} />)}</span></button>
                    <div className={`panel ${activeSection == 3 ? 'active' : ''}`}>
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleAccordion(4)}>How do I cancel?<span className="icon">{activeSection === 4 ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faPlus} />)}</span></button>
                    <div className={`panel ${activeSection == 4 ? 'active' : ''}`}>
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleAccordion(5)}>What can I watch on Netflix?<span className="icon">{activeSection === 5 ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faPlus} />)}</span></button>
                    <div className={`panel ${activeSection == 5 ? 'active' : ''}`}>
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                    <button className="accordion" onClick={() => toggleAccordion(6)}>Is Netflix good for kids?<span className="icon">{activeSection === 6 ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faPlus} />)}</span></button>
                    <div className={`panel ${activeSection == 6 ? 'active' : ''}`}>
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>
                </div>
                <div className="email-section">
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <input type="text" placeholder='Email address' />
                    <button>Get Started<FontAwesomeIcon icon={faChevronRight} className='icon' /></button>
                </div>
            </div>
        </div>
    )
}

export default Frequently