import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import HistoryComponent from '../HistoryComponent';
import TworcyComponent from '../TworcyComponent';
import Video from './Video';
function Home () {
    return (
        <>
        <div id='home'>
            <HeroSection />
        </div>
            <Video />
            <HistoryComponent />
            <TworcyComponent />
            <Footer />
        </>
    )
}

export default Home;