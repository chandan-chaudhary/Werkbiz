
import React from 'react';

// import marketingImg from '../../assets/services/marketing.png';
import salesImg from "../../assets/services/sales/sale&marketing.png";
import SalesFeatures from "./Sales_features.tsx";

const SalesMarketing : React.FC = () => {
    return(
        <React.Fragment>
             <div
                className={'flex font-bold items-center justify-center bg-blue-50 px-12 sm:pt-0 py-24 md:pt-36 lg:pt-64 w-screen text-center'}>
                <div
                    className={'relative flex flex-col space-y-8 md:space-y-12 justify-center items-center   '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}
                    <div className={'flex flex-col items-center justify-center pt-20 md:pt-0 md:pb-24 space-y-12'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-12 md:w-8/12 xl:text-5xl'}>sales & marketing </h1>
                        <p className={'sm:max-md:mt-8 text-xl md:px-8 md:text-2xl text-fuchsia-950 xl:mx-72 '}>
                        Reach the right talent pool and build a high-performing blue-collar workforce with our targeted sales and marketing strategies. We understand the unique challenges of blue-collar recruitment and develop customized campaigns to attract top talent.
                        </p>
                    </div>
                    <img src={salesImg} alt={'erp-img'} className={'absolute -bottom-32 opacity-10 md:w-7/12 '}/>
                </div>
            </div>
           <SalesFeatures />
        </React.Fragment>
    )
};

export default SalesMarketing;