
import React from 'react';

// import marketingImg from '../../assets/services/marketing.png';
import salesImg from "../../assets/services/sales/sale&marketing.png";
import SalesFeatures from "./Sales_features.tsx";

const SalesMarketing : React.FC = () => {
    return(
        <React.Fragment>
         <div
                className={'flex items-center justify-center bg-blue-50 md:px-12 sm:pt-0 pt-24 md:pt-36 w-screen'}>
                <div
                    className={'relative flex sm:max-lg:flex-col space-y-8 md:space-y-6 md:items-center justify-center  rounded-lg shadow-2xl pb-20  '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}

                    <div className={'flex flex-col sm:max-lg:items-center sm:max-lg:space-y-12 justify-center pt-20 md:pt-0 lg:pb-24 space-y-3 my-5 lg:ml-14 px-2'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-6 md:w-8/12 xl:text-5xl font-bold'}>sales & marketing </h1>
                        <p className={'sm:max-md:mt-8 text-xl md:text-2xl  text-gray-700 text-start sm:max-md:px-4'}>
                        Reach the right talent pool and build a high-performing blue-collar workforce with our targeted sales and marketing strategies. We understand the unique challenges of blue-collar recruitment and develop customized campaigns to attract top talent.
                        </p>
                    </div>
                    <img src={salesImg} alt={'erp-img'} className={'opacity-60 md:w-7/12 lg:w-5/12 h-fit  '}/>
                </div>
            </div>
           <SalesFeatures />
        </React.Fragment>
    )
};

export default SalesMarketing;