import React from 'react';
import services from "./services.ts";



const ServicesList :React.FC= () => {
    const handleServiceList = (service:string) => {
        if(service === 'HR Management') window.location.replace('/hr-management');
        if(service === 'Software Solution') window.location.replace('/software-solution');
        if(service === 'Sales & Marketing') window.location.replace('/sales-marketing');
    }
    return(
        <div className={'absolute right-32 mr-1 md:mr-1.5 md:right-40 top-20 bg-white flex flex-col py-5 justify-center border-x-2 border-b-4 p-3 space-y-5 border-gray-200 rounded-lg shadow-2xl shadow-blue-300 lg:hidden '}>
            {
                services.map((service, i) =>
                <span onClick={() => handleServiceList(service.service)} key={i} className={'bg-blue-200 rounded-lg p-2 px-4 font-bold hover:scale-90 hover:text-blue-500'}>{service.service}</span>
                )
            }
        </div>
    )
};

export default ServicesList;