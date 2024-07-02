import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";


const PrivacyConcern: React.FC = () => {
    return(
        <div className={' text-black pt-16 pb-12 mx-auto'}>
            <div className={'flex flex-col space-y-8  mx-auto'}>
               <div className={'flex justify-center '}> <SiGnuprivacyguard  className={'text-3xl text-green-300'}/> </div>
                <div className={'flex flex-col justify-center items-center space-y-4  mx-auto px-2'}>
                    <div className={'text-3xl w-8/12'}>Your privacy is our responsibility</div>
                    <p className={'text-gray-500 text-xl'}>We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.</p>
                </div>
            </div>
        </div>
    )
};

export default PrivacyConcern;