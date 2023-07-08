import React from 'react'
import '../../styles/EnjoySection.css'

function EnjoySection() {
    return (
        <div className='EnjoySection'>
            <div className="container">
                <div className="left-col">
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="right-col">
                    <div className="image-container">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                        <video autoPlay muted loop playsInline src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnjoySection