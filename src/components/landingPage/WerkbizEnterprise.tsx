import React from 'react';

import itDeptImg from '../../assets/ITmanagement.png';
import profile from '../../assets/profile.png';
const WerkbizEnterprise :React.FC = () => {
    return(
        <div className={'flex flex-col bg-white text-black pb-16 items-center justify-center'}>
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
            <div className={'flex flex-col justify-center items-center space-y-5 mt-24'}>
                <h2 className={'text-3xl font-bold '}>Werkbiz for <br/>Enterprises</h2>
                <div className={'h-0.5 w-24 bg-red-300'}></div>
                <p className={'text-xl text-gray-800 w-96 px-3'}>Experience the breadth and depth of the WERKBIZ ecosystem,with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.</p>
            </div>
        </div>
    )
}

export default WerkbizEnterprise;