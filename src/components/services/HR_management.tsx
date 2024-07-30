import React from 'react';
import HRSpecification from "./HR_specification.tsx";

// *** IMAGES
// import hr_img from '../../assets/services/hr_manage.png';


const HR_management :React.FC =()=>{
    return(
        <React.Fragment>
            <div
                className={'flex flex-col space-y-8 text-black bg-gray-100 mx-auto  p-5 h-full md:space-y-16 xl:h-screen '}>

                <div
                    className={'flex flex-col items-center space-y-24 justify-center mt-12 p-5 rounded-lg md:mx-12 md:px-12 md:mt-36  xl:mx-28 xl:px-24 '}>
                    <h1 className={'text-4xl lg:text-6xl font-bold text-logoPrimaryColor uppercase text-center '}>HR Management </h1>
                    <p className={'text-xl font-bold  sm:max-xl:pb-12  xl:pt-10 xl:px-28 lg:text-2xl text-center'}>Streamline your HR processes and empower your workforce with our innovative HR solutions. We handle everything from recruitment and onboarding to payroll and performance management, so you can focus on what matters most - growing your business.
                    </p>
                    {/*<img src={hr_img} alt={'carrer-img'} className={'absolute opacity-20 md:w-8/12 xl:-bottom-10 xl:w-4/12'}/>*/}
                </div>
            </div>
            <HRSpecification />
        </React.Fragment>
    )
};
export default HR_management;
// Streamline your HR processes and empower your workforce with our innovative HR solutions. We handle everything from recruitment and onboarding to payroll and performance management, so you can focus on what matters most - growing your business