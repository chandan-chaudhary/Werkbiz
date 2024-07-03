import React from "react";



const HeaderLists :React.FC= () => {
    return (
        <div className={'absolute right-24 top-20 -mt-2 text-gray-700 uppercase bg-white rounded-lg py-4 px-4 h-fit border-x-2 border-b-2 border-gray-300 '}>
            <ul className={'flex flex-col font-semibold divide-y-2 divide-red-300 space-y-3 '}>
                <li className={' hover:text-blue-600 ease-in duration-300 cursor-pointer'}>Products</li>
                <li className={'pt-3 hover:text-blue-600 ease-in duration-300 cursor-pointer'}>Customer</li>
                <li className={'pt-3 hover:text-blue-600 ease-in duration-300 cursor-pointer'}>Services</li>
            </ul>
        </div>)
};
export default HeaderLists;