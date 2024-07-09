import React, {useEffect, useState} from "react";

// *** COMPONENTS
import HeaderLists from "../navigation/HeaderLists.tsx";
import Products from '../products/Products.tsx';
import Services from "../services/Services.tsx";

// *** ICONS
import { CiSearch } from "react-icons/ci";
import { AiOutlineNotification } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
// import { TfiMoreAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiThList } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

// *** IMAGES
import werkbizLogo from '../../assets/websitelogo/Werbiz.png';
import {Link} from 'react-router-dom';
import {useLocation} from "react-router-dom";


const Header: React.FC = ()=> {
    const location = useLocation();
    // console.log(location.pathname.startsWith('/'))
    const [isClick, setIsClick] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const fixHeader = () => {
        if(window.scrollY >=450){
            setShowHeader(true);
        }else {
            setShowHeader(false);
        }
    };
    window.addEventListener('scroll',fixHeader);
    const handleList = ()=>{
             setIsClick(!isClick);
        // setShowProducts(false);

    };
    const handleProducts =()=>{
        setShowProducts(!showProducts);
        // localStorage.setItem('showProducts', JSON.stringify(showProducts));
      setShowServices(false)
    };
    const handleServices =()=>{
        setShowServices(!showServices);
        // localStorage.setItem('showProducts', JSON.stringify(showProducts));
        setShowProducts(false);
    };
    const handleDropdown = () =>{
        setIsClick(!isClick);
    }
    useEffect( () =>{
        if(location.pathname.startsWith('/')){
            setShowServices(false);
            setShowProducts(false);
            setIsClick(false);
        }
    },[location.pathname])





        return(
        <nav className={`flex px-8 py-4  items-center bg-white md:flex lg:py-4 border border-b border-slate-300 w-screen mx-auto h-fit ${showHeader && 'fixed'} ease-in-out duration-500 z-50`}>
            <Link to={'/'}> <img src={werkbizLogo} alt={'img'} className={'w-8  md:w-16 lg:w-28'}/> </Link>
            <div className={'sm:max-lg:hidden flex flex-row justify-center items-end text-black space-x-5 lg:ml-5'}>
                <div onClick={handleProducts} className={`flex flex-row items-center space-x-1 cursor-pointer  ease-in duration-300 p-2 ${showProducts ? 'bg-blue-500 text-white  rounded-lg ' : 'hover:text-blue-600'}`}>
                    <span className={` text-xl`}>Products</span>
                    <MdKeyboardArrowDown className={`text-2xl text-gray-500 cursor-pointer  ease-in duration-300 ${showProducts ? '': 'hover:text-blue-600'}`}/>
                </div>
                {showProducts && <Products /> }
                <span onClick={handleServices} className={` ease-in duration-300 text-xl cursor-pointer p-2 ${showServices ? 'bg-blue-500 text-white  rounded-lg ' : 'hover:text-blue-600'}`}>Services</span>
                {showServices && <Services />}
                {/*<span className={'hover:text-blue-600 ease-in duration-300 text-xl cursor-pointer p-2'}>Customers</span>*/}
                {/*<span>Company</span>*/}
            </div>
            <div
                className={'sm:max-lg:hidden flex flex-row  justify-end text-black  items-center w-full space-x-5 lg:text-xl'}>
                    <CiSearch className={'cursor-pointer '} />
                    <AiOutlineNotification  className={'cursor-pointer'} />
                    <div className={'flex items-center space-x-1 text-xl cursor-pointer'}>
                        <MdLanguage/>
                        <span className={''}>EN</span>
                    </div>
                </div>
                <div className={'flex flex-row justify-end text-black font-light items-center lg:w-64  w-full space-x-3'}>
                    {isClick ?  <RxCross1  className={'text-2xl text-gray-600 lg:hidden'} onClick={handleDropdown}/> :<TiThList  className={'text-3xl text-gray-600 lg:hidden  '} onClick={handleList}/> }
                    <Link to={'/contact-us'}>
                     <button  className={'p-2 font-semibold rounded-full border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white'}>Get Started</button>
                    </Link>
                </div>
            <div className={`${isClick ? '': 'hidden'}`}>
                <HeaderLists />
            </div>
        </nav>
    )
};


export default Header;