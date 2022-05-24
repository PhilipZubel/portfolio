import pic from "./../../assets/pictures/rentalcalculator.png"
import {AiFillGithub, AiOutlineDoubleRight} from 'react-icons/ai';

const Card = () => {
    return (
        <div className="border">
            <div className="grid grid-cols-2 gap-4">
                <img className="rounded-lg p-1 transition-opacity opacity-80 hover:opacity-90" src={pic} alt="" />
                <div className="">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Rental Income Calculator</h5>
                    <p className="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    
                </div>
                <div>
                <a href="#" className="inline-flex items-center py-2 px-3 mb-4 mx-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <p className="pr-1">View Project</p>
                    <AiOutlineDoubleRight size={20}/>
                </a>

                <a href="#" className="inline-flex items-center py-2 px-3 mx-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <p className="pr-1">GitHub</p>
                    <AiFillGithub size={20}/>
                </a>
                </div>
            </div>
            
            
            
            
        </div>
    )
}

export default Card;