import React from 'react';
import "./navbar.css";
import logo from '../../pictures/fy_clear.png';
import contactImg from '../../pictures/contactIcon.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar"> 
            <img src={logo} alt='Logo' className='logo'/>
            {/* <div className='logo'>Frank Yu</div> */}
            <div className='navBarItem'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={1000} className='navBarList'>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={1000} className='navBarList'>About</Link>
                <Link className='navBarList'>Experience</Link>
                <Link className='navBarList'>Projects</Link>
            </div>
            <button className='navBarButton' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth', duration: '1000'});
            }}>
                <img src={contactImg} alt='' className='navBarImg'/> Contact Me
            </button>
        </nav>
    ) 
}

export default Navbar