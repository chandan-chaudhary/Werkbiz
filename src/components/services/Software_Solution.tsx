import React from 'react';

// *** IMAGES
import digitalEdgeImg from '../../assets/services/software-solution/digitalEdge.png';

import SoftwareSolution_feature from "./SoftwareSolution_feature.tsx";


const Software_Solution: React.FC =() => {
    return(
        <React.Fragment>
              <div
                className={'flex font-bold items-center justify-center bg-blue-50 px-12 sm:pt-0 py-24 md:pt-36 lg:pt-64 w-screen text-center'}>
                <div
                    className={'relative flex flex-col space-y-8 md:space-y-12 justify-center items-center   '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}
                    <div className={'flex flex-col items-center justify-center pt-20 md:pt-0 md:pb-24 space-y-12'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-12 md:w-8/12 xl:text-5xl'}>Digital Edge</h1>
                        <p className={'sm:max-md:mt-8 text-xl md:px-8 md:text-2xl text-fuchsia-950 xl:mx-72 '}>
                        Transform your business with our innovative digital solutions. We craft cutting-edge software and applications that drive growth and efficiency. From concept to execution, our expert team delivers tailored solutions to meet your unique needs.
                        </p>
                    </div>
                    <img src={digitalEdgeImg} alt={'erp-img'} className={'absolute -bottom-32 opacity-10 md:w-7/12 '}/>
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