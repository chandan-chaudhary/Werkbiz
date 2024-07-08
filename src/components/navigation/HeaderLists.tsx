import React, {useState} from "react";

// *** COMPONENTS
import ProductList from "./ProductList.tsx";
import ServicesList from "../services/ServicesList.tsx";



const HeaderLists :React.FC= () => {
    const [showProd, setShowProd] = useState(false);
    const [showService, setShowService] = useState(false);

    const handleProdList =()=> {
         setShowProd(!showProd);
         setShowService(false);
    }
    const handleServiceList =()=> {
        setShowService(!showService);
        setShowProd(false);

    }
    return (
        <div className={'absolute right-12 md:right-24 md:px-5 top-20 -mt-2 text-gray-700 uppercase bg-white rounded-lg py-4 px-4 h-fit border-x-2 border-b-2 border-gray-300 shadow-2xl shadow-blue-300 lg:hidden z-10'}>
            <ul className={'flex flex-col font-bold space-y-5 '}>
                <li onClick={handleProdList}
                    className={' hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer bg-blue-200 rounded-lg p-2 md:px-5'}>Products
                </li>
                <li onClick={handleServiceList} className={'hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer bg-blue-200 rounded-lg p-2 md:px-5'}>Services</li>
                {/*<li className={' hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer bg-blue-200 rounded-lg p-2 md:px-5'}>Customer</li>*/}
            </ul>
            {showProd && <ProductList/>}
            {showService && <ServicesList />}
        </div>)
};
export default HeaderLists;