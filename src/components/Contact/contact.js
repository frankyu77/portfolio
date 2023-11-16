import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yt561oq', 'template_1p8x0il', form.current, '1JFP3fbjKbxgLq6wy')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='contactSection'>
            <div id='contact'>
                <h1 className='contactTitle'>Contact Me</h1>
                <span className='contactDescription'>Feel free to fill out the form below to discuss anything with me!</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Name' name='from_name'/>
                    <input type='email' className='email' placeholder='Email' name='from_email'/>
                    <textarea className='msg' name='message' rows={5} placeholder='Message'></textarea>
                    <button type='submit' value='send' className='submitButton'>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;