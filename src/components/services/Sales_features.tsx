
import React from 'react';
import salesMarketing from "./sales_marketing.ts";

const SalesFeatures :React.FC = () => {
    return (
        <div className={'bg-gray-100 p-10'}>
            <div
                className={'relative flex flex-col text-black text-center items-center md:px-8 lg:px-12 xl:px-24'}>
                <div className="absolute xl:right-96 lg:right-72 md:right-40 -top-16 z-10 flex flex-col items-center gap-3 bg-gray-200 border-2 border-gray-300 rounded-2xl py-6  uppercase ">
                    <h1 className={'text-4xl font-bold underline-offset-8 text-fuchsia-950 xl:text-5xl px-12'}>Our Solutions</h1>
                    {/* <div className={' h-0.5 w-36 bg-red-300 '}></div> */}
                </div>
                {
                    salesMarketing.map((feature, i) =>
                        <div
                            className={`flex mt-24 sm:max-md:flex-col ${i % 2 === 0 && 'flex-row-reverse xl:ml-96'} bg-blue-50 md:h-80 xl:w-8/12 sm:max-md:items-center text-start border-2 drop-shadow-2xl rounded-xl hover:-translate-x-1 hover:-translate-y-1 duration-700 ease-linear`}
                            key={i}>
                            <div
                                className={`flex flex-col  space-y-5 sm:max-md:bg-slate-100 p-2 rounded-2xl py-5 lg:px-12`}>
                                <h3 className={'text-xl font-bold md:text-2xl xl:text-3xl'}>
                                    {feature.feature}
                                </h3>
                                <p className={'text-xl xl:text-2xl text-gray-600'}> {feature.featureDesc}</p>
                            </div>
                            <img src={feature.featureImage} alt={feature.feature}
                                 className={`opacity-80 md:w-6/12  ${(feature.feature === 'Customer Acquisition' || 'Audits and Surveys' || 'Vendor & Merchant Diligence') && 'lg:w-4/12' }`}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
};
export default SalesFeatures;