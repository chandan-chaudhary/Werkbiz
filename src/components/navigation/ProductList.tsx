import React from "react";

import productMoblie from "./productMoblie.ts";
const ProductList: React.FC =()=>{
    const handleProducts = (prod:string) =>{
        console.log('hello')
        if(prod === 'ERP') return window.location.replace('/erp');
        if(prod === 'U-Chat') return window.location.replace('/u-chat');
        if(prod === 'WorkFolio') return window.location.replace('/workfolio');
    }
    return(
        <div className={'absolute p-4 right-32 space-y-5 md:right-36 md:mr-6 mr-2  top-5 flex flex-col text-gray-700 bg-white border-b-4 border-x-2 border-gray-300 rounded-lg shadow-2xl shadow-blue-300 lg:hidden'}>
            {/*<span className={'tetx-xl font-bold items-center'}>Products</span>*/}
            {
                productMoblie.map((product, i:number)=>
                    <span onClick={() => {handleProducts(product)}} key={i} className={' hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer font-bold p-1 px-3 flex items-center bg-blue-200 rounded-lg'}>{product}</span>
                )
            }
        </div>
    )
};

export default ProductList;