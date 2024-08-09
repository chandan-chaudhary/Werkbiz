import React from 'react';
import HRSpecification from "./HR_specification.tsx";

// *** IMAGES
import hr_img from '../../assets/services/hr/hr.png';


const HR_management: React.FC = () => {
    return (
        <React.Fragment>
            <div
                className={'flex font-bold items-center justify-center bg-blue-50 md:px-12 sm:pt-0 pt-24 md:pt-36 w-screen '}>
                <div
                    className={' flex sm:max-lg:flex-col space-y-8 md:space-y-6 md:items-center justify-center  rounded-lg shadow-2xl pb-20  '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}

                    <div className={'flex flex-col sm:max-lg:items-center sm:max-lg:space-y-12 justify-center pt-20 md:pt-0 lg:pb-24 space-y-3 my-5 lg:ml-14 px-2'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-6 md:w-8/12 xl:text-5xl '}>HR Management </h1>
                        <p className={'sm:max-md:mt-8 text-xl md:text-2xl  text-gray-700 text-start sm:max-md:px-4'}>
                            Streamline your HR processes and empower your workforce with our innovative HR solutions. We handle everything from recruitment and onboarding to payroll and performance management, so you can focus on what matters most - growing your business.
                        </p>
                    </div>
                    <img src={hr_img} alt={'erp-img'} className={' opacity-60 md:w-7/12 lg:w-5/12 h-fit '} />

                </div>
            </div>
            <HRSpecification />
        </React.Fragment>
    )
};
export default HR_management;
// Streamline your HR processes and empower your workforce with our innovative HR solutions. We handle everything from recruitment and onboarding to payroll and performance management, so you can focus on what matters most - growing your business