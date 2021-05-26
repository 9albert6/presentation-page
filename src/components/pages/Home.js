import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Video from './Video';
function Home () {
    return (
        <>
        <div id='home'>
            <HeroSection />
        </div>
            <Video />
        </>
    )
}

export default Home;