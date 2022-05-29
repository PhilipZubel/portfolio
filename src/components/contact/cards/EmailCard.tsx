import { AiOutlineMail } from 'react-icons/ai';
import { toast } from 'react-toastify';

import './../contact.css'

const EmailCard = () => {

    const email = "zubel.philip@gmail.com";

    const notify = () => toast.info("Email copied!", {
        theme: "colored",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const copy = async () => {
        await navigator.clipboard.writeText(email);
        notify();
    }

    return (
        <div className='flex flex-col mb-8'>
            <button className='contact-card' onClick={copy}>
                <AiOutlineMail size="5em" className="mb-2 lg:mb-4" style={{display:"block", marginLeft:"auto", marginRight:"auto"}}/>
                <div className='text-lg sm:text-xl'>{email}</div>
            </button>
            
        </div>
    )
}


export default EmailCard;