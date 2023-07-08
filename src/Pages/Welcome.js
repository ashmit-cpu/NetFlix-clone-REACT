import React from 'react'
import TopBanner from '../Components/WelcomeTopBanner/TopBanner'
import EnjoySection from '../Components/EnjoySection/EnjoySection'
import Download from '../Components/DownloadSection/Download'
import Watch from '../Components/WatchSection/Watch'
import Create from '../Components/CreateSection/Create'
import Frequently from '../Components/FrequentlySection/Frequently'
import Footer from '../Components/Footer/Footer'

function Welcome() {
  return (
    <div className='Welcome'>
        <TopBanner/>
        <EnjoySection/>
        <Download/>
        <Watch/>
        <Create/>
        <Frequently/>
        <Footer/>
    </div>
  )
}

export default Welcome