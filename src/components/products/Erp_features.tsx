

import React from 'react';
import erp from './erp.ts';
// import {IconType} from "react-icons";


const Erp_features: React.FC = () => {
    // interface erpContent {
    //     erp: string,
    //     erpIcon: IconType,
    // }
    const selectColor = (erp:string)=>{
        if(erp === 'Biometric integration' )  return  'text-blue-800 shadow-blue-100';
        if(erp === 'Mobile Application' )  return  'text-purple-500 shadow-purple-100';
        if(erp === 'Virtual  Class' )  return  'text-fuchsia-500 shadow-fuchsia-100';
        if(erp === 'Online Payment Gateway' )  return  'text-blue-600 shadow-blue-100';
        if(erp === 'Vehicle Tracking System' )  return  'text-yellow-500 shadow-yellow-100';
        if(erp === 'Tally Integration' )  return  'text-red-500 shadow-red-100';
        if(erp === 'SMA, Email & Voice call' )  return  'text-slate-800 shadow-slate-300';
        if(erp === 'Bulk WhatsApp Integration' )  return  'text-green-500 shadow-green-100';


    }

    return(
        <div className={'md:pt-24 text-black'}>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 text-3xl  place-items-center justify-items-center items-center justify-center mx-auto md:px-12 xl:px-24 xl:pb-24 '}>
                    { erp.map(( erp, i ) =>
                        <div key={i}
                            className={`flex flex-col space-y-10 items-center bg-gray-100 m-2 w-full p-4 py-10 rounded-2xl text-center shadow-2xl ${selectColor(erp.ERP_feature)}  `}>
                            <erp.feature_icon
                                className={`text-4xl lg:text-6xl xl:text-8xl text-blue-400 ${selectColor(erp.ERP_feature)} ${erp.ERP_feature === 'Tally Integration' && 'rotate-180'}`}/>
                            <h2 className={'uppercase text-gray-700'}>{erp.ERP_feature}</h2>
                            <p className={'text-gray-500 text-2xl md:px-8'}>Workfolio is a professional portfolio platform designed to help individuals showcase
                                their work,
                                achievements, and skills in a visually appealing and organized manner</p>
                        </div>
                    )}
                </div>

            </div>
    )
};

export default Erp_features;