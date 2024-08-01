

import React from 'react';
import eduWerkzFeatures from './eduWerkz.ts';
// import {IconType} from "react-icons";


const EduWerkzFeatures: React.FC = () => {
    // interface erpContent {
    //     erp: string,
    //     erpIcon: IconType,
    // }
    const selectColor = (erp:string)=>{
        if(erp === 'ConnectED' )  return  'text-blue-800 shadow-blue-100';
        if(erp === 'Exam Ace' )  return  'text-purple-500 shadow-purple-100';
        if(erp === 'EduProfile' )  return  'text-fuchsia-500 shadow-fuchsia-100';
        if(erp === 'Visual Planner' )  return  'text-blue-600 shadow-blue-100';
        if(erp === 'Homework Hub' )  return  'text-yellow-500 shadow-yellow-100';
        if(erp === 'FeeXpress' )  return  'text-red-500 shadow-red-100';
        if(erp === 'SafeTrack' )  return  'text-slate-800 shadow-slate-300';
        if(erp === 'BookSmart' )  return  'text-green-500 shadow-green-100';

    }

    return(
        <div className={'md:pt-24 text-black'}>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 text-3xl  place-items-center justify-items-center items-center justify-center mx-auto md:px-12 xl:px-24 xl:pb-24 '}>
                    { eduWerkzFeatures.map(( edufeature, idx ) =>
                        <div key={idx}
                            className={`flex flex-col space-y-10 items-center bg-gray-100 m-2 w-full p-4 py-10 rounded-2xl text-center shadow-2xl ${selectColor(edufeature.eduWerkz_feature)} hover:-translate-y-1 ease-linear duration-700  `}>
                            <edufeature.feature_icon
                                className={`text-4xl lg:text-6xl xl:text-8xl text-blue-400 ${selectColor(edufeature.eduWerkz_feature)} ${edufeature.eduWerkz_feature === 'Tally Integration' && 'rotate-180'}`}/>
                            <h2 className={'uppercase text-gray-700'}>{edufeature.eduWerkz_feature}</h2>
                            <p className={'text-gray-500 text-2xl md:px-8'}>{edufeature.feature_desciption}</p>
                        </div>
                    )}
                </div>
            </div>
    )
};

export default EduWerkzFeatures;