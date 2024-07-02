
import React from "react";
import { SiStudyverse } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbStackPush } from "react-icons/tb";
import { LiaPhoenixFramework } from "react-icons/lia";
import officeWorkImg from '../../assets/office-work.png';

const LandingPage : React.FC =()=>{
    return (
        <div className={' flex flex-col text-black mx-auto pt-24 justify-center items-center bg-slate-100 px-2 '}>
            <div className={' flex flex-col items-center justify-center text-4xl space-y-3 mx-auto'}>
                <h1 className={'text-red-400 font-semibold'}>The Finest Bizness Company</h1>
                <div className={'bg-red-400 h-0.5 w-16'}></div>
                <h3 className={'text-slate-700 font-extrabold'}>Empowering Business <br/>with Top Talent and <br/>Innovative Tech
                </h3>
                <img src={officeWorkImg} alt={'office work'} className={'w-full'} />
            </div>
            <div className={'flex flex-col justify-center bg-white px-8 py-8  rounded-lg border border-gray-200 h-fit w-fit mx-auto'}>
                <span className={'uppercase text-gray-600'}>featured apps</span>
                <div className={'flex flex-row py-5 items-center'}>
                    <SiStudyverse className={'text-2xl text-blue-600'}/>
                    <div className={'flex flex-col pl-5'}>
                        <span className={'text-2xl'}>ERP</span>
                        <span className={'text-slate-700'}>Academics related website</span>
                    </div>
                    <span className={'pl-5 text-2xl text-gray-500'}> <MdKeyboardArrowRight/></span>
                </div>
                <div className={'flex flex-row py-5 items-center'}>
                    <TbStackPush className={'text-2xl text-blue-600'}/>
                    <div className={'flex flex-col pl-5'}>
                        <span className={'text-2xl'}>Push-Notification</span>
                        <span className={'text-slate-700'}>Academics related website</span>
                    </div>
                    <span className={'pl-5 text-2xl text-gray-500'}> <MdKeyboardArrowRight/></span>
                </div>
                <div className={'flex flex-row py-5 items-center'}>
                    <LiaPhoenixFramework className={'text-3xl text-blue-600'}/>
                    <div className={'flex flex-col pl-5'}>
                        <span className={'text-2xl'}>Workfolio</span>
                        <span className={'text-slate-700'}>Academics related website</span>
                    </div>
                    <span className={'pl-5 text-2xl text-gray-500'}> <MdKeyboardArrowRight/></span>
                </div>
            </div>
        </div>
    )
};
export default LandingPage;