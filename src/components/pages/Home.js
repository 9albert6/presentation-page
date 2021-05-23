import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Video from './Video';
function Home () {
    return (
        <>
            <HeroSection id='home'/>
            <Video id='video'/>
        </>
    )
}

export default Home;