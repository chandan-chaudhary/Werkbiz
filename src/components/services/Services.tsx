import React from 'react';
import {useNavigate} from "react-router-dom";
import services from "./services.ts";
// import {Link} from "react-router-dom";
// import {MdKeyboardArrowRight} from "react-icons/md";

const Services:React.FC = () => {
    const navigate = useNavigate()
    const handleServicesIconColor = (service:string) =>{
        if(service === 'HR Management')
            return 'text-purple-700';

        if(service === 'Digital Edge')
            return 'text-green-700';

        if(service === 'Sales & Marketing')
            return 'text-yellow-700';

    }
    const handleServicesUrl =(service:string)=>{
        if(service === 'HR Management') return navigate('/hr-management');
        if(service === 'Digital Edge') return navigate('/software-solution')
        if(service === 'Sales & Marketing') return navigate('/sales-marketing')

    }
    return(
        <div className={'absolute mt-2 top-24  text-black border-x-2 border-b-4 border-gray-300 bg-white rounded-lg py-5 shadow-2xl shadow-blue-300 z-50'}>
            <ul className={'flex flex-col px-8  font-bold  space-y-5'}>
                {services.map((service, i) =>
                    <div key={i}>
                        <div  onClick={() => {
                            handleServicesUrl(service.service)
                        }}
                             className={`flex flex-row hover:scale-90 ease-in-out duration-500 space-x-3 justify-center items-center hover:bg-blue-200 rounded-lg p-4 `}>
                            <service.icon className={`text-blue-600 text-4xl ${handleServicesIconColor(service.service)}`}/>
                            <li className={' w-full '}>{service.service}</li>
                        </div>
                        {/*<div className={' bg-red-200 h-0.5 w-full'}></div>*/}

                    </div>
                )}

            </ul>
        </div>
    )
};
export default Services;