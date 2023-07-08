import React from 'react'
import '../../styles/Download.css'

function Download() {
    return (
        <div className='Download'>
            <div className="container">
                <div className="left-col">
                    <div className="image-container">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                        </div>
                        <div className="contents">
                            <div className="text">
                                <h4>Stranger Things</h4>
                                <p>Downloading...</p>
                            </div>
                        </div>
                        <div className="gif">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                            </div>
                    </div>

                </div>
                <div className="right-col">
                    <h2>Download your shows to watch offline</h2>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
        </div>
    )
}

export default Download