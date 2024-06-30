
import { CiSearch } from "react-icons/ci";
import { AiOutlineNotification } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
// import { TfiMoreAlt } from "react-icons/tfi";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import werkbizLogo from '../../assets/Werbiz.png';
import {Link} from 'react-router-dom';

const Header: React.FC = ()=> {
    return(
        <div className={'relative flex items-center bg-white py-12 border border-b border-slate-500'}>
                <div className={'absolute left-52 flex flex-row items-center text-black space-x-5'}>
                    <Link to={'/'}> <img src={werkbizLogo} alt={'img'} className={'w-20'}/> </Link>
                    <div className={'flex flex-row items-center space-x-1 cursor-pointer'}>
                        <span className={'hover:text-blue-600 ease-in duration-300 text-xl'}>Products</span>
                        <MdKeyboardArrowDown className={'text-2xl text-gray-500 cursor-pointer'} />
                    </div>
                    <span className={'hover:text-blue-600 ease-in duration-300 text-xl cursor-pointer'}>Customers</span>
                    {/*<span>Company</span>*/}
                </div>
                <div
                    className={'absolute right-52 flex flex-row text-black ml-60 space-x-10 text-2xl font-light items-center'}>
                <CiSearch className={'cursor-pointer'} />
                <AiOutlineNotification  className={'cursor-pointer'} />
                <div className={'flex items-center space-x-1 text-xl cursor-pointer'}>
                    <MdLanguage/>
                    <span className={''}>EN</span>
                </div>
                {/*<TfiMoreAlt />*/}
                <Link to={'/contact-us'}>
                     <button  className={'py-2 px-3 rounded-full border border-red-500 text-red-500 text-xl font-bold hover:bg-red-500 hover:text-white'}>Get Started</button>
                </Link>
            </div>
        </div>
    )
};
export default Header;