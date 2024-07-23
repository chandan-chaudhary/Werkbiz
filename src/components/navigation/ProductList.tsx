import React from "react";

import productMoblie from "./productMoblie.ts";
import {useNavigate} from "react-router-dom";


const ProductList: React.FC =()=>{
    const navigate = useNavigate();

    const handleProducts = (prod:string) =>{
        console.log('hello')
        if(prod === 'EduWerkz') return navigate('/eduWerkz');
        if(prod === 'OfiWerkz') return navigate('/ofiWerkz');
    }
    const handleProductColor = (product:string) =>{
        if(product === 'EduWerkz') return 'text-blue-700';
        if (product === 'OfiWerkz')  return 'text-red-700';
    }
    return(
        <div className={'absolute p-4 right-24 mr-4 space-y-5 md:right-36 md:mr-6 top-5 flex flex-col text-gray-700 bg-white border-b-4 border-x-2 border-gray-300 rounded-lg shadow-2xl shadow-blue-300 lg:hidden'}>
            {
                productMoblie.map((product, i:number)=>
                    <div  key={i} onClick={() => {
                        handleProducts(product.product)
                    }}  className={'flex space-x-2 hover:text-blue-600 hover:scale-90 ease-in duration-300 cursor-pointer p-1 px-3 items-center hover:bg-blue-200 rounded-lg'}>
                        <product.productImg className={`${handleProductColor(product.product)} text-xl`}/>
                        <h5 className={'text-sm font-bold'}>{product.product}</h5>
                    </div>
                )
            }
        </div>
    )
};

export default ProductList;