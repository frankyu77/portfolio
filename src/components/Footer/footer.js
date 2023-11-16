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
                <a href='https://github.com/frankyu77'>
                    <img src={GithubIcon} alt='GitHub' className='icon'/>
                </a>
                <a href='https://linkedin.com/in/frankyu77'>
                    <img src={LinkedInIcon} alt='LinkedIn' className='icon'/>
                </a>
                <a href='https://open.spotify.com/user/frankkaiwen.yu?si=a0eeeb02a7b84c51'>
                    <img src={SpotifyIcon} alt='Spotify' className='icon'/>
                </a>
                
            </div>
        </section>
        
        
    );
}

export default Footer;