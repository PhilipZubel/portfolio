import pic from "./../../assets/pictures/rentalcalculator.png"
import {AiFillGithub, AiOutlineEye} from 'react-icons/ai';
import './projects.css'

const Card = () => {
    return (
        <div className="card block bg-teal-900 max-w-xl drop-shadow-xl rounded-xl my-2">
            <div className="container relative">
                <img 
                    className="rounded-xl border-8 border-teal-900"
                    src={pic} 
                    alt="picture"/>
                <div className="details px-5">
                    <h3 className="font-bold text-lg pb-2">Rental Income Calculator</h3>
                    <p className="description text-sm pb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae velit officiis quasi ex voluptate eaque deserunt error accusamus placeat voluptatum fugiat, doloremque necessitatibus at eveniet dolore reiciendis totam. Maxime, nostrum?</p>
                </div>
                <div className="ml-2">
                <a href="#" className="inline-flex items-center py-2 px-3 mb-4 mx-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <p className="pr-2">View Project</p>
                    <AiOutlineEye size={20}/>
                </a>

                <a href="#" className="inline-flex items-center py-2 px-3 mb-4 mx-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <p className="pr-2">GitHub</p>
                    <AiFillGithub size={20}/>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Card;