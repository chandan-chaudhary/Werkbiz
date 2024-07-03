import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";


const PrivacyConcern: React.FC = () => {
    return(
        <div className={' text-black py-14 mx-auto lg:px-24 lg:py-28'}>
            <div className={'flex flex-col space-y-8  mx-auto lg:space-y-12'}>
               <div className={'flex justify-center '}> <SiGnuprivacyguard  className={'text-3xl text-green-300 lg:text-5xl'}/> </div>
                <div className={'flex flex-col justify-center items-center space-y-4 lg:space-y-8  mx-auto px-10 '}>
                    <div className={'text-3xl font-bold md:text-4xl md:max-lg:w-10/12 '}>Your privacy is our responsibility</div>
                    <div className={'h-0.5 w-24 bg-red-300'}></div>
                    <p className={'text-gray-600 text-xl lg:mx-48 lg:text-2xl'}>We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.</p>
                </div>
            </div>
        </div>
    )
};

export default PrivacyConcern;