import React from 'react';
import {SiStudyverse} from "react-icons/si";
import {TbStackPush} from "react-icons/tb";
import {LiaPhoenixFramework} from "react-icons/lia";
import {MdKeyboardArrowRight} from "react-icons/md";


const Feature:React.FC =()=>{
    return(
        <div
            className={'absolute top-24 left-16 flex flex-col space-y-4 text-black  rounded-lg  border-b-4 border-x-2 border-gray-300 p-5 mt-2.5 bg-white shadow-2xl shadow-blue-300'}>
            <div className={' flex flex-row items-center space-x-4 bg-blue-200 py-4 px-8 rounded-lg hover:scale-90 ease-in duration-300'}>
                <SiStudyverse className={'text-4xl text-blue-600'}/>
                <div className={' flex flex-col'}>
                    <span className={'font-bold'}>ERP</span>
                </div>
                <span className={'text-xl  absolute right-10'}> <MdKeyboardArrowRight/></span>
            </div>
            {/*<div className={'h-0.5 w-full bg-red-300'}></div>*/}
            <div
                className={' flex flex-row items-center space-x-5 bg-blue-200 py-4 px-8 rounded-lg hover:scale-90 ease-in duration-300'}>
                <TbStackPush className={'text-4xl text-blue-600'}/>
                <div className={' flex flex-col'}>
                    <span className={'font-bold w-8/12'}>U-Chat</span>
                    {/*<span className={''}>Academics related website</span>*/}
                </div>
                <span className={'text-xl absolute right-10'}> <MdKeyboardArrowRight/></span>

            </div>
            {/*<div className={'h-0.5 w-full bg-red-300'}></div>*/}

            <div
                className={' flex flex-row items-center space-x-5 bg-blue-200 py-4 px-8 rounded-lg hover:scale-90 ease-in duration-300'}>

                <LiaPhoenixFramework className={'text-4xl text-blue-600'}/>
                <div className={' flex flex-col'}>
                    <span className={'font-bold'}>WorkFolio</span>
                    {/*<span className={''}>Academics related website</span>*/}
                </div>
                <span className={'text-xl  absolute right-10'}> <MdKeyboardArrowRight/></span>
            </div>
        </div>
    )
};
export default Feature;