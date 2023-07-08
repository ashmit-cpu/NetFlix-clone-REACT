import React from 'react'
import '../../styles/HomeFooter.css'

function HomeFooter() {
    return (
        <div className='HomeFooter'>
            <div className="container">
                <h5>Questions? Call 000-800-919-1694</h5>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li><a href="#/">Faq</a></li>
                            <li><a href="#/">Media Centre</a></li>
                            <li><a href="#/">Ways to Watch</a></li>
                            <li><a href="#/">Cookie preferences</a></li>
                            <li><a href="#/">Speed Test</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><a href="#/">Help Centre</a></li>
                            <li><a href="#/">Investor Relations</a></li>
                            <li><a href="#/">Terms of Use</a></li>
                            <li><a href="#/">Corporate Information</a></li>
                            <li><a href="#/">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li><a href="#/">Account</a></li>
                            <li><a href="#/">Jobs</a></li>
                            <li><a href="#/">Privacy</a></li>
                            <li><a href="#/">Contact Us</a></li>
                            <li><a href="#/">Only on Netflix</a></li>
                        </ul>
                    </div>

                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/profile.php?id=100008369855021" target="_blank"><span class="social-media"><i
                        class="fa-brands fa-facebook"></i></span></a>
                    <a href="https://instagram.com/ashmithkacheri?igshid=ZDdkNTZiNTM=" target="_blank"><span class="social-media"><i
                        class="fa-brands fa-instagram"></i></span></a>
                    <a href="https://github.com/ashmit-cpu"><span class="social-media" target="_blank"><i
                        class="fa-brands fa-github"></i></span></a>
                    <a href="https://www.linkedin.com/in/ashmit-kacheri-492310264/" target="_blank"><span class="social-media"><i
                        class="fa-brands fa-linkedin"></i></span></a>
                </div>


            </div>

        </div>
    )
}

export default HomeFooter