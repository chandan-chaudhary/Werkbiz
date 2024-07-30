
import React from 'react';
import Marquee from 'react-fast-marquee';
import {brands} from "./brands.ts";

const BrandPartners :React.FC =()=>{
    return(
        <div className={'flex flex-col bg-white text-black  pt-24 mx-auto  py-8'}>
            <div className={'flex flex-col justify-center items-center space-y-2'}>
                <span className={' uppercase font-semibold '}>Brands that trust us</span>
                <div className={'h-0.5 w-20 bg-red-300'}></div>
            </div>
            <div className={'px-24 pt-24'}>
            <Marquee pauseOnHover speed={100} delay={3} >
                {/*<div className={'grid grid-cols-4 gap-x-3 gap-y-8  place-items-center py-10 px-5 '}>*/}
                {
                    brands.map((brand, idx) =>
                        <div key={idx} className={' p-12 px-20'}>
                            <img src={brand} alt="Flipkart-logo" className={'w-24'}/>
                        </div>
                    )
                }
            </Marquee>
            </div>
        </div>
)
};

export default BrandPartners;