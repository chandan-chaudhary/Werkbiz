
import React from "react";
import {Link} from "react-router-dom";

// *** ICONS
import { SiStudyverse } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { TbStackPush } from "react-icons/tb";
import { LiaPhoenixFramework } from "react-icons/lia";

// *** IMAGES
import officeWorkImg from '../../assets/websitelogo/office-work.png';

const LandingPage : React.FC =()=>{
    return (
        <div className={' flex flex-col text-black mx-auto pt-24 justify-center items-center bg-slate-100 px-2 pb-10 lg:flex-row lg:px-5'}>
            <div className={' flex flex-col items-center justify-center text-4xl space-y-5 mx-auto'}>
                <h1 className={'text-logoPrimaryColor font-semibold lg:text-5xl sm:text-center'}>The Finest Bizness Company</h1>
                <div className={'bg-blue-300 h-0.5 w-36'}></div>
                <h3 className={'text-slate-700 font-extrabold lg:w-7/12 sm:text-center'}>Empowering Business with Top Talent and Innovative Tech
                </h3>
                <img src={officeWorkImg} alt={'office work'} className={'w-full'} />
            </div>
            <div
                className={'flex flex-col justify-center bg-white px-8 py-8 lg:py-12 space-y-5  rounded-lg border border-gray-200 h-fit w-fit mx-auto'}>
                <span className={'uppercase text-gray-600'}>featured apps</span>
                <div
                    className={'flex flex-row py-3 my-2 items-center hover:bg-blue-200 hover:scale-90 ease-in duration-200 px-2 rounded-lg '}>
                    <SiStudyverse className={'text-2xl text-logoPrimaryColor'}/>
                    <Link to={'/eduWerkz'}><div  className={'flex flex-col pl-5 '}>
                        <span className={'text-xl'}>EduWerkz</span>
                        <span className={'text-slate-700  text-sm'}>Education Management</span>
                    </div></Link>
                    <span className={'pl-5 text-2xl text-gray-500'}> <MdKeyboardArrowRight/></span>
                </div>
                <div className={' bg-red-200 h-0.5 w-full'}></div>
                <div
                    className={'flex flex-row py-3 my-2 items-center hover:bg-blue-200 hover:scale-90 ease-in duration-200 px-2 rounded-lg '}>
                    <LiaPhoenixFramework className={'text-3xl text-red-600'}/>
                    <Link to={'/ofiWerkz'}>
                        <div className={'flex flex-col pl-5'}>
                            <span className={'text-xl'}>OfiWerkz</span>
                            <span className={'text-slate-700 text-sm'}>Office Management</span>
                        </div>
                    </Link>
                    <span className={'pl-5 text-2xl text-gray-500'}> <MdKeyboardArrowRight/></span>
                </div>
            </div>
        </div>
    )
};
export default LandingPage;