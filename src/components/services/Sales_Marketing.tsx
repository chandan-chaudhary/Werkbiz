
import React from 'react';

import marketingImg from '../../assets/services/marketing.png';
const SalesMarketing : React.FC = () => {
    return(
        <React.Fragment>
            <div className={'lg:flex lg:flex-row text-fuchsia-950 bg-blue-700  lg:h-screen items-center   '}>
                <div className={' w-fit '}>
                    <img src={marketingImg} alt={'marketing-img'} className={' opacity-40 xl:w-9/12 '}/>
                    <h1 className={'text-5xl text-yellow-100 font-extrabold uppercase relative -top-72 pl-20 md:-top-96 md:text-6xl lg:-top-72 xl:-top-96'}>Sales & Marketing</h1>
                </div>
                <div className={'text-2xl text-center text-white px-12 lg:px-24 sm:pb-36 lg:pt-28 xl:w-8/12 '}>
                    <p>Sales and marketing play crucial roles in the success of software solutions by ensuring their visibility, adoption, and sustained growth in the market. Sales teams engage directly with potential clients, understanding their needs and demonstrating how the software solution can address specific pain points or enhance operational efficiency. They build relationships, negotiate terms, and ultimately close deals, thereby generating revenue and expanding the customer base.</p>
                </div>
            </div>
            <div className={'bg-slate-700 pb-12'} >
                <div className={' flex flex-col  items-center text-center relative -top-16 text-fuchsia-950 bg-blue-300 mx-10 p-5 rounded-2xl space-y-10 shadow-2xl shadow-blue-500 pb-12 '}>
                    <h1 className={'text-4xl lg:text-6xl uppercase pt-12'}>Sales</h1>
                    <div className={'h-0.5 w-44 bg-blue-500'}></div>
                    <ul className={'flex flex-col space-y-8 text-xl uppercase font-bold'}>
                        <li className={'border-2 border-blue-500 bg-blue-200 rounded-full p-3'}>Customer Acqusition</li>
                        <li className={'border-2 border-blue-500 bg-blue-200 rounded-full p-3'}>Merchant</li>
                        <li className={'border-2 border-blue-500 bg-blue-200 rounded-full p-3'}>Audit and survey</li>
                        <li className={'border-2 border-blue-500 bg-blue-200 rounded-full p-3'}>Vendor & Merchant
                            Deligence
                        </li>
                        <li className={'border-2 border-blue-500 bg-blue-200 rounded-full p-3'}>BTL</li>
                        <li className={'border-2 border-blue-500 bg-blue-200 rounded-full p-3'}>Email & Social Media Marketing</li>

                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
};
export default SalesMarketing;