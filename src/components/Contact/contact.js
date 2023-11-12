import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className='contactSection'>
            <div id='contact'>
                <h1 className='contactTitle'>Contact Me</h1>
                <span className='contactDescription'>Feel free to fill out the form below to discuss anything with me!</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Name'/>
                    <input type='email' className='email' placeholder='Email'/>
                    <textarea className='msg' name='message' rows={5} placeholder='Message'></textarea>
                    <button type='submit' value='send' className='submitButton'>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;