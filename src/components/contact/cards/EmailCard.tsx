import { AiOutlineMail } from 'react-icons/ai';
import './../contact.css'

const EmailCard = () => {

    const email = "zubel.philip@gmail.com"

    const copy = async () => {
        await navigator.clipboard.writeText(email);
        alert('Text copied');
      }

    return (
        <div className='flex flex-col mb-6'>
            <button className='contact-card' onClick={copy}>
                <AiOutlineMail size="5em" className="mb-2 lg:mb-4" style={{display:"block", marginLeft:"auto", marginRight:"auto"}}/>
                <div className='text-xl'>{email}</div>
            </button>
        </div>
    )
}


export default EmailCard;