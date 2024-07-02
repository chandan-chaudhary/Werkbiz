
import { CiSearch } from "react-icons/ci";
import { AiOutlineNotification } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
// import { TfiMoreAlt } from "react-icons/tfi";
import React, {useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiThList } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import werkbizLogo from '../../assets/Werbiz.png';
import {Link} from 'react-router-dom';
import HeaderLists from "../landingPage/HeaderLists.tsx";

const Header: React.FC = ()=> {
    const [isClick, setIsClick] = useState(false);
    const handleList = ()=>{
            setIsClick(!isClick);
    };
    return(
        <nav className={'flex gap-0.4 px-8 py-4 items-center  bg-white md:py-8 md:flex lg:py-12 border border-b border-slate-500 w-screen mx-auto  h-fit '}>
            <Link to={'/'}> <img src={werkbizLogo} alt={'img'} className={'w-8 h-8 md:20'}/> </Link>
            <div className={'sm:max-md:hidden flex flex-row items-center text-black '}>
                <div className={'flex flex-row items-center space-x-1 cursor-pointer'}>
                    <span className={'hover:text-blue-600 ease-in duration-300 text-xl'}>Products</span>
                    <MdKeyboardArrowDown className={'text-2xl text-gray-500 cursor-pointer'}/>
                </div>
                <span className={'hover:text-blue-600 ease-in duration-300 text-xl cursor-pointer'}>Customers</span>
                <span className={'hover:text-blue-600 ease-in duration-300 text-xl cursor-pointer'}>Services</span>

                {/*<span>Company</span>*/}
            </div>
            <div
                className={'sm:max-md:hidden flex flex-row  justify-end text-black font-light items-center w-full space-x-3'}>
                    <CiSearch className={'cursor-pointer '} />
                    <AiOutlineNotification  className={'cursor-pointer'} />
                    <div className={'flex items-center space-x-1 text-xl cursor-pointer'}>
                        <MdLanguage/>
                        <span className={''}>EN</span>
                    </div>
                </div>
                <div className={'flex flex-row justify-end text-black font-light items-center w-full space-x-3'}>
                    {isClick ?  <RxCross1  className={'text-2xl text-gray-600'} onClick={handleList}/> :<TiThList  className={'text-3xl text-gray-600  '} onClick={handleList}/> }
                    <Link to={'/contact-us'}>
                     <button  className={'p-2 font-semibold rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'}>Get Started</button>
                    </Link>
                </div>
            <div className={`${isClick ? '': 'hidden'} `}>
                <HeaderLists />
            </div>
        </nav>
    )
};
export default Header;