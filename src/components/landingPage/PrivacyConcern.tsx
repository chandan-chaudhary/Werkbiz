import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";


const PrivacyConcern: React.FC = () => {
    return(
        <div className={'flex justify-center text-black pt-24 pb-12'}>
            <div className={'flex flex-col justify-center w-6/12 space-y-16'}>
               <div className={'flex justify-center'}> <SiGnuprivacyguard  className={'text-6xl text-green-300'}/> </div>
                <div className={'flex flex-col space-y-8 pl-48 '}>
                    <span className={'text-5xl'}>Your privacy is our responsibility</span>
                    <p className={'text-gray-500 text-xl'}>We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.</p>
                </div>
            </div>
        </div>
    )
};

export default PrivacyConcern;