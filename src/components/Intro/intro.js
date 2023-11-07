import React from 'react';
import './intro.css';
import bear from '../../pictures/bear.webp';
import {Link} from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Frank Yu</span> <br/></span>
                <p className='introParagraph'>I'm an aspiring software engineer, driven by a passion for problem-solving <br/> and a strong desire to innovate with technology.</p>
                <Link><button className='button'>BUTTON</button></Link>
            </div>
            <img src={bear} alt='Profile' className='bear'/>
        </section>
    )
}

export default Intro;