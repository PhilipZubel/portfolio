import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const SERVICE_ID = "service_fpo9d1r";
const TEMPLATE_ID = "template_nqfeor4";
const PUBLIC_KEY = "p59NvE2vsTRP4_esU"

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="user" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">Send</button>
    </form>
    );
};

export default ContactUs;