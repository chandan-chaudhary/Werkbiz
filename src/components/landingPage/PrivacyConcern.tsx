import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";


const PrivacyConcern: React.FC = () => {
    return(
        <div className={'bg-gray-100 text-black py-14 mx-auto lg:px-24 lg:py-28 text-center md:py-24 '}>
            <div className={'flex flex-col space-y-8  mx-auto lg:space-y-12'}>
               <div className={'flex justify-center '}> <SiGnuprivacyguard  className={'text-3xl text-green-300 lg:text-5xl'}/> </div>
                <div className={'flex flex-col justify-center items-center space-y-4 lg:space-y-8  mx-auto px-10 '}>
                    <div className={'text-3xl font-bold md:text-4xl md:max-lg:w-10/12 '}>Your privacy is our responsibility</div>
                    <div className={'h-0.5 w-24 bg-red-300'}></div>
                    <p className={'text-gray-600 text-xl  lg:text-2xl xl:mx-36'}>Your data is our priority. Our robust systems are designed to keep your data secured. Experience the confidence of unparalleled data protection with us</p>
                </div>
            </div>
        </div>
    )
};

export default PrivacyConcern;