import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import BackgroundSlider from 'react-background-slider'
import image1 from '../assets/entry-img2.png'
import image2 from '../assets/entry-img1.png'
function HeroSection() {
    return (
        <div className='hero-container'>
            <BackgroundSlider
            images={[image1, image2]}
            duration={10} transition={2} />
            <h1>
                JAK PTAK
            </h1>
            <p>
                <i>projekt licencjacki Agaty Małeckiej</i>
            </p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>OBEJRZYJ VIDEO
                        <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
