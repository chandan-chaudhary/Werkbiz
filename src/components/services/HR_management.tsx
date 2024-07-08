import React from 'react';
import HRSpecification from "./HR_specification.tsx";

// *** IMAGES
import hr_img from '../../assets/services/hr_manage.png';
const HR_management :React.FC =()=>{
    return(
        <React.Fragment>
            <div className={'flex flex-col text-black bg-gradient-to-bl from-purple-200 to-blue-500 items-center py-24 h-full  space-y-5 lg:flex-row  lg:py-36 lg:px-24 lg:font-bold '}>
                <div className={'sm:max-md:hidden'}>
                    <img src={hr_img} alt={'hr-img'} className={'w-96 lg:w-full'}/>
                </div>
                <div className={'flex flex-col space-y-12 lg:space-y-8 items-center justify-center px-24  text-fuchsia-950'}>
                    <h1 className={'text-4xl font-bold uppercase lg:text-6xl'}>HR Management</h1>
                    <p className={'text-2xl '}>Streamline your HR processes and empower your workforce with our innovative HR solutions. We handle everything from recruitment and onboarding to payroll and performance management, so you can focus on what matters most - growing your business</p>
                </div>
            </div>
            <HRSpecification />
        </React.Fragment>
    )
};
export default HR_management;