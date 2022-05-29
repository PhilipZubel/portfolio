import {AiFillGithub, AiOutlineEye} from 'react-icons/ai';
import './projects.css'

const Card = (prop: {project:any}) => {
    return (
        <div className="card block bg-teal-900 max-w-xl drop-shadow-xl rounded-xl my-2">
            <div className="container relative">
                <img 
                    className="project-pic rounded-xl border-8 border-teal-900"
                    src={prop.project.picture} 
                    alt="project"/>
                <div className="details px-5 inline-block align-bottom">
                    <h3 className="font-bold text-lg -translate-y-2">{prop.project.title}</h3>
                    <p className="description text-sm pb-3">{prop.project.description}</p>
                    <div className="">
                {prop.project.github && 
                    // <div className=''>
                        <a href={prop.project.github}
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center py-2 px-3 mb-4 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none">
                        <p className="pr-2">GitHub</p>
                        <AiFillGithub size={20}/>
                        </a>
                    // </div>
                    }
                    {prop.project.view &&
                    // <div className='inline-block align-bottom'>
                            <a href={prop.project.view} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-flex items-center py-2 px-3 mb-4 sm:ml-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none">
                            <p className="pr-2">View Project</p>
                            <AiOutlineEye size={20}/>
                        </a>
                    // {/* </div> */}
                    }
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Card;