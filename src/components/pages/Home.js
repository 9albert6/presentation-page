import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HistoryComponent from '../HistoryComponent';
import Video from './Video';
function Home () {
    return (
        <>
        <div id='home'>
            <HeroSection />
        </div>
            <Video />
            <HistoryComponent />
        </>
    )
}

export default Home;