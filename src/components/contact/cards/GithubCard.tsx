import { AiFillGithub } from 'react-icons/ai';

const GithubCard = () => {

    const githubLink ="https://github.com/PhilipZubel";

    return (
        <div className='flex flex-col mb-8'>
            <a className='contact-card' href={githubLink} target="_blank" rel="noopener noreferrer">
                <AiFillGithub 
                    size="5em" 
                    className=" mb-2 lg:mb-4" 
                    style={{display:"block", marginLeft:"auto", marginRight:"auto"}}/>
                <div className='text-xl'>GitHub</div>
            </a>
        </div>
    )
}


export default GithubCard;