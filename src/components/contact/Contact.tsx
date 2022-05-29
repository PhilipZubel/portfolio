import React from "react";
import ContactUs from "./ContactUs";

import EmailCard from "./cards/EmailCard";
import LinkedinCard from "./cards/LinkedinCard";
import GithubCard from "./cards/GithubCard";


const Contact = () => {
    return (
        <>
        <div className="section" id="contact">
          <span className="disable-select anchor-tag text-3xl tracking-wider text-yellow-400 pb-6 sm:pb-8">&lt;contact&gt;</span>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center content-center mb-6">
            <EmailCard />
            <LinkedinCard />
            <GithubCard />
          </div>
          <div style={{display: "block", marginLeft:'auto', marginRight:'auto'}}>
            <ContactUs/>
          </div>
          
          <span className="disable-select anchor-tag text-3xl tracking-wider mt-10 text-yellow-400">&lt;/contact&gt;</span>
        </div>
        </>
    )
    
};

export default Contact;
