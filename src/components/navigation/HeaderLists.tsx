import React, {useEffect, useRef, useState} from "react";

// *** COMPONENTS
import ProductList from "./ProductList.tsx";
import ServicesList from "../services/ServicesList.tsx";
import {useLocation} from "react-router-dom";

const HeaderLists: React.FC = () => {
    const location = useLocation();
    const dropDownref = useRef<HTMLDivElement>(null)
    const [showProd, setShowProd] = useState(false);
    const [showService, setShowService] = useState(false);

    // Handle services Dropdown
    const handleProdList = () => {
        setShowProd(!showProd);
        setShowService(false);
    }
    const handleServiceList = () => {
        setShowService(!showService);
        setShowProd(false);

    }
    useEffect(() => {
        if (location.pathname.startsWith('/')) {
            setShowService(false);
            setShowProd(false);
        }
    }, [location.pathname])

    useEffect(() => {
        const dropDownHandler = (event:MouseEvent)=>{
            if(dropDownref.current && !dropDownref.current.contains(event.target as Node)){
                setShowProd(false)
                setShowService(false);
                // console.log(event.target);
            }
        }
        document.addEventListener('mousedown', dropDownHandler);
        return () => {
            document.removeEventListener('mousedown', dropDownHandler);
        };
    }, []);
    return (
        <div
            className={'absolute right-12 md:right-24 md:px-5 top-20 -mt-2 text-gray-700 bg-white rounded-lg py-4 px-4 h-fit border-x-2 border-b-2 border-gray-300 shadow-2xl shadow-blue-300 lg:hidden z-10'} ref={dropDownref}>
            <ul className={'flex flex-col font-bold space-y-5 '} >
                <li onClick={handleProdList}
                    className={'hover:bg-blue-200 hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer rounded-lg p-2 md:px-5 font-headerListFont'}>Products
                </li>
                <li onClick={handleServiceList}
                    className={'hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer hover:bg-blue-200 rounded-lg p-2 md:px-5 font-headerListFont'}>Services
                </li>
            </ul>
            {showProd && <ProductList/>}
            {showService && <ServicesList/>}
        </div>)
};
export default HeaderLists;