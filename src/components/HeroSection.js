import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
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
