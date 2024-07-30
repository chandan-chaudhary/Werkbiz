import React, {useEffect, useRef, useState} from "react";

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
    // REFERENCE -> TOGGLE PRODUCT & SERVICES MODAL
    const dropDownref  = useRef<HTMLDivElement>(null);
    const dropDownMobileref  = useRef<HTMLDivElement>(null);


    // DATA STATE
    const [isClick, setIsClick] = useState<boolean>(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    // headers to when window.scrollY >=450
    const fixHeader = () => {
        if(window.scrollY >=450){
            setShowHeader(true);
        }else {
            setShowHeader(false);
        }
    };
    window.addEventListener('scroll',fixHeader);

    // HANDLE PRODUCTS AND SERVICES
    const handleList = ()=>{
             setIsClick(!isClick);
    };
    const handleProducts =()=>{
        setShowProducts(!showProducts);
      setShowServices(false)
    };
    const handleServices =()=>{
        setShowServices(!showServices);
        setShowProducts(false);
    };
    useEffect( () =>{
        if(location.pathname.startsWith('/')){
            setShowServices(false);
            setShowProducts(false);
            setIsClick(false);
        }
    },[location.pathname])

    // Handle DROPDOWN in all screen
    useEffect(() => {
        const dropDownHandler = (event:MouseEvent)=>{
            // LARGE AND EXTRALARGE SCREEN
            if(dropDownref.current && !dropDownref.current.contains(event.target as Node)){
                setShowServices(false);
                setShowProducts(false);
            }
        //     // MOBILE SCREEN
        //     // if(dropDownMobileref.current && !dropDownMobileref.current.contains(event.target as Node)){
        //     //     setIsClick(false)
        //     // }
        }
        const dropDownHandlerMob = (event: MouseEvent)=>{
            // LARGE AND EXTRALARGE SCREEN
        
            // MOBILE SCREEN
            if(dropDownMobileref.current && !dropDownMobileref.current.contains(event.target as Node)){
                setIsClick(false)
            }
        }

        document.addEventListener('mousedown', dropDownHandler);
        document.addEventListener('mousedown', dropDownHandlerMob);

        return () => {
            document.removeEventListener('mousedown', dropDownHandler);
            document.removeEventListener('mousedown', dropDownHandlerMob);
        };
    }, []);

        // JSX COMPONENT
        return(
        <nav className={`flex px-8 py-4  items-center bg-white md:flex lg:py-4 border border-b border-slate-300 w-screen mx-auto h-fit ${showHeader && 'fixed'} ease-in-out duration-500 z-50`}>

            {/*WEBSITE LOGO */}
            <Link to={'/'}> <img src={werkbizLogo} alt={'img'} className={'w-8  md:w-16 lg:w-28'}/> </Link>

            {/*WEBSITE PRODUCTS AND SERVICES*/}
            <div className={'sm:max-lg:hidden flex flex-row justify-center items-end text-black space-x-5 lg:ml-5'} ref={dropDownref} >
                <div onClick={handleProducts} className={`flex flex-row items-center space-x-1 cursor-pointer  ease-in duration-300 p-2 ${showProducts ? 'bg-logoPrimaryColor text-white  rounded-lg ' : 'hover:text-logoPrimaryColor'}`}>
                    <span ref={dropDownref} className={`text-xl font-headerListFont`} >Products</span>
                    <MdKeyboardArrowDown className={`text-2xl text-gray-500 cursor-pointer  ease-in duration-300 ${showProducts ? ' text-white ': 'hover:text-logoPrimaryColor'}`}/>
                </div>
                {showProducts && <Products /> }
                <div onClick={handleServices} className={`flex flex-row items-center space-x-1 ease-in duration-300 text-xl cursor-pointer p-2 ${showServices ? 'bg-logoPrimaryColor text-white  rounded-lg ' : 'hover:text-logoPrimaryColor'}`}>
                    <span className={` text-xl font-headerListFont `} >Services</span>
                    <MdKeyboardArrowDown className={`text-2xl text-gray-500 cursor-pointer  ease-in duration-300 ${showServices ? ' text-white ': 'hover:text-logoPrimaryColor'}`}/>
                </div>
                {showServices && <Services />}
            </div>

            {/*NOTIFICATION AND SEARCHBAR*/}
            <div
                className={'sm:max-lg:hidden flex flex-row  justify-end text-black  items-center w-full space-x-5 lg:text-xl'}>
                    <CiSearch className={'cursor-pointer '} />
                    <AiOutlineNotification  className={'cursor-pointer'} />
                    <div className={'flex items-center space-x-1 text-xl cursor-pointer'}>
                        <MdLanguage/>
                        <span className={''}>EN</span>
                    </div>
                </div>
                   {/*MOBILE TOGGLE LIST*/}
                <div className={'flex flex-row justify-end text-black font-light items-center lg:w-64  w-full space-x-3'}>
                    <div  ref={dropDownMobileref}>
                        {isClick ?  <RxCross1 className={'text-2xl text-gray-600 lg:hidden'} onClick={handleList}/> :<TiThList  className={'text-3xl text-gray-600 lg:hidden  '} onClick={handleList}/> }
                           {/* HEADERlIST MOBILEVIEW */}
                           {isClick &&  <HeaderLists />}
                    </div>
                    <Link to={'/connect-us'}>
                     <button  className={'p-2 font-semibold rounded-full border border-blue-900 text-logoPrimaryColor hover:bg-logoPrimaryColor hover:text-white'}>Get Started</button>
                    </Link>
                </div>
        </nav>
    )
};


export default Header;