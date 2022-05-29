import { FaLinkedin } from 'react-icons/fa';

const LinkedinCard = () => {

    const linkedinLink = "https://www.linkedin.com/in/philipzubel/";
    return (
        <div className='flex flex-col mb-8'>
            <a className='contact-card' href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin 
                    size="5em" 
                    className="mb-2 lg:mb-4" 
                    style={{display:"block", marginLeft:"auto", marginRight:"auto"}}/>
                <div className='text-lg sm:text-xl'>LinkedIn</div>
            </a>
        </div>
    )
}


export default LinkedinCard;