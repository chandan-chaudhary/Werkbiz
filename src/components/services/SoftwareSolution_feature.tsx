

import React from 'react';
import softwareSolution from "./software_solution.ts";

const SoftwareSolution_feature: React.FC = () => {
    return (
        <div className={'bg-gray-100 p-10'}>
            <div
                className={'flex flex-col text-black  space-y-16 xl:space-y-16 md:space-y-28 text-center md:pt-24 md:px-8 lg:px-12 xl:px-24'}>
                <div className='flex flex-col items-center gap-2 pb-24'>
                <h1 className={'text-4xl font-bold underline-offset-8 xl:pt-24 text-fuchsia-950 xl:text-5xl'}>Our Solutions</h1>
                <div className={' h-0.5 w-36 bg-red-300 '}></div>
                </div>
                {
                    softwareSolution.map((feature, i) =>
                        <div>
                            <div
                                className={`flex sm:max-md:flex-col mb-5 ${i % 2 === 0 && 'flex-row-reverse xl:ml-96'} md:h-80  xl:w-8/12 sm:max-md:text-center items-center border-2 rounded-xl bg-blue-50 drop-shadow-2xl hover:translate-x-1 duration-700 ease-linear `}
                                key={i}>
                                <div
                                    className={`flex flex-col  space-y-5 sm:max-md:bg-slate-100 p-2 sm:rounded-2xl py-5 lg:px-12 `}>
                                    <h3 className={'text-xl font-bold md:text-2xl xl:text-3xl'}>
                                        {feature.feature}
                                    </h3>
                                    <p className={'text-xl xl:text-2xl text-gray-600'}> {feature.featureDesc}</p>
                                </div>
                                <img src={feature.featureImage} alt={feature.feature}
                                    className={`opacity-80  md:w-6/12 xl:w-5/12  ${(feature.feature === 'Mobile Applications' || 'API Development') && 'xl:w-4/12'}`} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default SoftwareSolution_feature;