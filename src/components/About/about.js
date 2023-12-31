import React from 'react';
import "./about.css";


const About = () => {
    return (
        <section id='about'>
            <span className='aboutTitle'>About Me</span>
            <span className='aboutDescription'>I am currently a student at the <span className='school'>University of British Columbia</span>, pursuing a Bachelor's degree in Science with a <span className='degree'>major in Computer Science and  minor in Commerce</span>.</span>
            <span className='interests'>I began coding during my high school years in 2020, where my father started teaching me how to code in C++. Eventually, I slowly became more interested in the tech world and started to take coding courses that my high school offered. I am currently interested in mobile/web development, AI/Machine Learning, creating my own full stack project, and game development.</span>
            <span className='freeTime'>During my free time, you'll often find me at the gym, playing badminton or basketball, going out to eat, spending time with friends, or trying out new recipes for dinner.</span>
            <span className='checkoutMy'>Feel free to check out my <a href='https://drive.google.com/file/d/1hXkK8l61O0OZo68BzJHD5cCOMP3aGYv4/view?usp=drive_link' className='resumeLink'>resume</a>, or follow me on <a href='https://open.spotify.com/user/frankkaiwen.yu?si=a0eeeb02a7b84c51' className='spotifyLink'>Spotify</a> to see if we have the same music taste!</span>
        </section>
    );
}

export default About;