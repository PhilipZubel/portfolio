import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const SERVICE_ID = "service_fpo9d1r";
const TEMPLATE_ID = "template_nqfeor4";
const PUBLIC_KEY = "p59NvE2vsTRP4_esU"

export const ContactUs = () => {
    const form = useRef();

    const notifySuccess = () => toast.success("Thanks for the message!", {
        theme: "colored",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const notifyFail = () => toast.error("Failed to send message. Please try again later...", {
        theme: "colored",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                notifySuccess();
            }, (error) => {
                console.log(error.text);
                notifyFail();
            });
    };

    return (
    <>
    {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="user" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">Send</button>
    </form> */}
    <form className="w-[32rem]" ref={form} onSubmit={sendEmail}>
    <div className="flex flex-wrap mb-4">
        <div className="w-full">
        <label className="block uppercase tracking-wide text-yellow-600 text-xs font-bold mb-2" htmlFor="name">
            Name
        </label>
        <input 
            className="appearance-none block w-full bg-gray-200 text-gray-800 border border-yellow-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="name" 
            type="user" 
            name="user_name"
            required
            />
        </div>
    </div>
    <div className="flex flex-wrap mb-4">
        <div className="w-full">
        <label className="block uppercase tracking-wide text-yellow-600 text-xs font-bold mb-2" htmlFor="email">
            E-mail
        </label>
        <input 
            className="appearance-none block w-full bg-gray-200 text-gray-800 border border-yellow-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="email" 
            type="email"
            name="user_email"
            required
            />
        </div>
    </div>
    <div className="flex flex-wrap mb-4">
        <div className="w-full">
        <label className="block uppercase tracking-wide text-yellow-600 text-xs font-bold mb-2" htmlFor="message">
            Message
        </label>
        <textarea 
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-800 border border-yellow-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
            id="message"
            name='message'
            required
            ></textarea>
        </div>
    </div>
    <div className="text-center">
        <button 
            className="shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
            type="submit"
            value="Send"
            >
            Send Message
        </button>
    </div>
    </form>
    </>
    );
};

export default ContactUs;