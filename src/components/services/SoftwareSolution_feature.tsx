

import React from 'react';
import softwareSolution from "./software_solution.ts";

const SoftwareSolution_feature :React.FC= () => {
    return (
        <div className={'bg-white p-10'}>
            <div
                className={'flex flex-col text-black items-center space-y-16 xl:space-y-8 md:space-y-28 text-center md:pt-24 md:px-8 lg:px-12 xl:px-24'}>
                <h1 className={'text-4xl p-3 uppercase font-bold md:text-5xl xl:py-12 xl:pb-24'}>Hr Management
                    features</h1>
                {
                    softwareSolution.map((feature, i) =>
                        <div
                            className={`flex flex-row ${i % 2 === 0 && 'flex-row-reverse'} justify-center items-center xl:w-9/12 space-y-24`}
                            key={i}>
                            <div
                                className={`flex flex-col  space-y-5 sm:max-md:bg-slate-100 p-2 sm:rounded-2xl py-5 `}>
                                <h3 className={'text-xl font-bold md:text-2xl xl:text-3xl'}>
                                    {feature.feature}
                                </h3>
                                <p className={'text-xl xl:text-2xl text-gray-600'}> {feature.featureDesc}</p>
                            </div>
                            <img src={feature.featureImage} alt={feature.feature}
                                 className={`sm:max-md:absolute sm:max-md:-z-1 sm:max-md:opacity-20 opacity-70 w-7/12 md:w-6/12 xl:w-5/12 left-10 ${feature.featureImage === '/src/assets/services/traning.png' && 'rounded-full'}`}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default SoftwareSolution_feature;