import React from 'react';
import services from "./services.ts";
import {useNavigate} from "react-router-dom";



const ServicesList :React.FC= () => {
    const navigate = useNavigate();

    const handleServices = (service:string) => {
        if(service === 'HR Management') navigate('/hr-management');
        if(service === 'Digital Edge') navigate('/software-solution');
        if(service === 'Sales & Marketing') navigate('/sales-marketing');
    }
    const handleServicesIconColor = (service:string) =>{
        if(service === 'HR Management')
            return 'text-purple-700';

        if(service === 'Digital Edge')
            return 'text-green-700';

        if(service === 'Sales & Marketing')
            return 'text-yellow-700';

    }
    return(
        <div className={'absolute  right-24 mr-4 md:mr-1.5 md:right-40 top-20 bg-white flex flex-col py-5 justify-center border-x-2 border-b-4 p-3 space-y-5 border-gray-200 rounded-lg shadow-2xl shadow-blue-300 lg:hidden  transform transition-opacity duration-150 '}>
            {
                services.map((service, i) =>
                    <div key={i} onClick={() => {
                        handleServices(service.service)
                    }} className={'flex space-x-2 hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer p-1 items-center hover:bg-blue-200 rounded-lg'}>
                        <service.icon className={`${handleServicesIconColor(service.service)} text-xl`}/>
                        <h5 className={'text-sm font-bold w-32'}>{service.service}</h5>
                    </div>
                ) }
        </div>
    )
};

export default ServicesList;