import React from 'react';

// *** IMAGES
import digitalEdgeImg from '../../assets/services/software-solution/digitalEdge.png';

import SoftwareSolution_feature from "./SoftwareSolution_feature.tsx";


const Software_Solution: React.FC =() => {
    return(
        <React.Fragment>
             <div
                className={'flex  items-center justify-center bg-blue-50 md:px-12 sm:pt-0 pt-24 md:pt-36 w-screen'}>
                <div
                    className={' flex sm:max-lg:flex-col space-y-8 md:space-y-6 md:max-lgitems-center justify-center  rounded-lg shadow-2xl pb-20  '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}

                    <div className={'flex flex-col sm:max-lg:items-center sm:max-lg:space-y-12 justify-center pt-20 md:pt-0 lg:pb-24 space-y-3 my-5 lg:ml-14 px-2'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-6 xl:text-5xl font-bold '}>Digital Edge </h1>
                        <p className={'sm:max-md:mt-8 text-xl md:text-2xl  text-gray-700 text-start sm:max-md:px-4'}>
                        Transform your business with our innovative digital solutions. We craft cutting-edge software and applications that drive growth and efficiency. From concept to execution, our expert team delivers tailored solutions to meet your unique needs.
                        </p>
                    </div>
                    <img src={digitalEdgeImg} alt={'erp-img'} className={' opacity-60 md:w-7/12 lg:w-5/12 h-fit'}/>
                </div>
            </div>
            {/*DEVELOPMENT*/}

           <SoftwareSolution_feature />
        </React.Fragment>
    )
};
export
default
Software_Solution;