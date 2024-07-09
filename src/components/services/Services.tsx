import React from 'react';
import {useNavigate} from "react-router-dom";
import services from "./services.ts";
// import {Link} from "react-router-dom";
// import {MdKeyboardArrowRight} from "react-icons/md";

const Services:React.FC = () => {
    const navigate = useNavigate()
    const handleHR_management =(service:string)=>{
        if(service === 'HR Management') return navigate('/hr-management');
        if(service === 'Software Solution') return navigate('/software-solution')
        if(service === 'Sales & Marketing') return navigate('/sales-marketing')

    }
    return(
        <div className={'absolute mt-2 top-24  text-black border-x-2 border-b-4 border-gray-300 bg-white rounded-lg py-5 shadow-2xl shadow-blue-300 z-50'}>
                <ul className={'flex flex-col px-8  font-bold  space-y-5'}>
                    {services.map((service, i) =>
                        <div key={i} onClick={()=> {handleHR_management(service.service)}}
                            className={'flex flex-row hover:scale-90 ease-in-out duration-500 space-x-3 justify-center items-center bg-blue-200 rounded-lg p-4 mt-3'}>
                            <service.icon className={'text-blue-600 text-4xl'}/>
                            <li className={' w-full   '}
                                >{service.service}</li>
                            {/*<span className={'text-xl absolute right-10'}> <MdKeyboardArrowRight/></span>*/}
                        </div>
                    )}
                </ul>
        </div>
    )
};
export default Services;