import React from "react";

// *** IMAGES
// import hr_img2 from '../../assets/services/hr-img2.png';
// import hireImg from '../../assets/services/hiring.png'
// import trainingImg from '../../assets/services/traning.png';
import hr_feature from "../services/hrFeatures.ts";
//
// interface HrFeatures{
//     feature:string,
//     featureDesc: string,
//     featureImage: string,
// }
// interface propsChildren {
//     hr_feature?: HrFeatures[];
// }
const HRSpecification: React.FC = () => {
    return (
        <div className={'bg-gray-100 p-10'}>
            <div
                className={'flex flex-col text-black text-center space-y-16 xl:space-y-16 md:space-y-28  md:px-8 lg:px-12 xl:px-24'}>
                <div className="flex flex-col items-center gap-3 md:py-24">
                    <h1 className={'text-4xl font-bold underline-offset-8 xl:pt-24 text-fuchsia-950 xl:text-5xl'}>Our Solutions</h1>
                    <div className={' h-0.5 w-36 bg-red-300 '}></div>
                </div>
                {
                    hr_feature.map((feature, idx) =>
                        <div className="">
                            <div
                                className={`flex mb-4 ${idx % 2 === 0 && 'flex-row-reverse xl:ml-96 '} h-80 xl:w-8/12 text-start  items-center border-2 rounded-lg bg-white drop-shadow-2xl hover:-translate-y-1  ease-in-out duration-700`} key={idx}>
                                <div
                                    className={`flex flex-col space-y-5 sm:max-md:bg-slate-100 p-2 rounded-2xl py-5 lg:px-12`}>
                                    <h3 className={'text-xl font-bold md:text-2xl xl:text-3xl'}>
                                        {feature.feature}
                                    </h3>
                                    <p className={'text-xl xl:text-2xl text-gray-600'}> {feature.featureDesc}</p>
                                </div>
                                <img src={feature.featureImage} alt={feature.feature}
                                    className={`sm:max-md:hidden sm:max-md:absolute sm:max-md:-z-1 opacity-70 w-7/12 md:w-6/12 xl:w-5/12  }`} />
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    )
};
export default HRSpecification;
