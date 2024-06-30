import React from 'react';

import itDeptImg from '../../assets/ITmanagement.png';
import profile from '../../assets/profile.png';
const WerkbizEnterprise :React.FC = () => {
    return(
        <div className={'flex flex-row bg-white text-black  pt-20 space-x-12  pb-16 items-center justify-center'}>
            <div className={'flex flex-col space-y-12'}>
                {/*<div className={'relative h-64 bg-slate-500 '}>*/}
                <img src={itDeptImg} alt={'itdept-img'} className={''}/>
                {/*</div>*/}
                <div className={'flex flex-row space-x-12 ml-12'}>
                    <p className={'text-xl italic w-64'}>" With our complete business under control, our productivity is up in the last year that we have been using Werkbiz "</p>
                    <img src={profile} alt={'profile'} className={'w-24 h-24 mt-12 '}/>
                </div>
                <div className={'flex flex-col ml-12'}>
                    <span className={'text-xl font-bold italic'}>Author</span>
                    <span>Manager, Werkbiz</span>
                </div>

            </div>
            <div className={'flex flex-col space-y-5 mt-24'}>
                <h2 className={'text-5xl '}>Werkbiz for <br/>Enterprises</h2>
                <p className={'text-xl text-gray-800 w-96'}>Experience the breadth and depth of the WERKBIZ ecosystem,with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.</p>
            </div>
        </div>
    )
}

export default WerkbizEnterprise;