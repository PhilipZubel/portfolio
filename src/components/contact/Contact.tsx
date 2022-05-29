import React from "react";
import ContactUs from "./ContactUs";

import EmailCard from "./cards/EmailCard";
import LinkedinCard from "./cards/LinkedinCard";
import GithubCard from "./cards/GithubCard";


const Contact = () => {
    return (
        <>
        <div className="section" id="contact">
          <span className="disable-select anchor-tag text-3xl tracking-wider pb-6 text-yellow-400">&lt;contact&gt;</span>
          <div className="grid grid-cols-1 xs:grid-cols-3 text-center content-center">
            <EmailCard/>
            <LinkedinCard />
            <GithubCard />
          </div>
          <ContactUs/>
          <span className="disable-select anchor-tag text-3xl tracking-wider pt-6 text-yellow-400">&lt;/contact&gt;</span>
        </div>
        </>
    )
    
};

export default Contact;
