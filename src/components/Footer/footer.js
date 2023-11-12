import React from 'react';
import './footer.css';
import GithubIcon from '../../pictures/githubIcon.png'
import LinkedInIcon from '../../pictures/linkedinIcon.png'
import SpotifyIcon from '../../pictures/spotifyIcon.png'

const Footer = () => {
    return (
        <section className='footerSection'>
            <div>
                <footer className='footer'> Created by Frank Yu</footer>
            </div>
            
            <div className='iconLinks'>
                <img src={GithubIcon} alt='GitHub' className='icon'/>
                <img src={LinkedInIcon} alt='LinkedIn' className='icon'/>
                <img src={SpotifyIcon} alt='Spotify' className='icon'/>
            </div>
        </section>
        
        
    );
}

export default Footer;