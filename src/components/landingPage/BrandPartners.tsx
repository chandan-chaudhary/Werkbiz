
import React from 'react';

import flipkart from '../../assets/Flipkart-Logo.png';
import paytm from '../../assets/Paytm-Logo.wine.svg';
import airtel from '../../assets/airtel.png';
import uber from '../../assets/uber.webp';
import rapido from '../../assets/rapido.jpg';
import uncleDelivery from '../../assets/uncle-delivery.png';
import anqfinance from '../../assets/anq-finance.png';
import jehovah from '../../assets/jehovah.jpg';



const BrandPartners :React.FC =()=>{
    return(
        <div className={' bg-white text-black  pt-24'}>
            <div className={'flex flex-col justify-center items-center space-y-2'}>
                <span className={' uppercase '}>Brands that trust us</span>
                <div className={'h-0.5 w-20 bg-red-400'}></div>
            </div>
            <div className={'grid grid-cols-4 gap-y-5 justify-items-center items-center pt-32 pb-12'}>
                <img src={flipkart} alt="Flipkart-logo" className={'w-40'}/>
                <img src={paytm} alt="paytm-logo" className={'w-40'}/>
                <img src={airtel} alt="airtel-logo" className={'w-40'}/>
                <img src={uber} alt="Flipkart-logo" className={'w-40'}/>
                <img src={rapido} alt="Flipkart-logo" className={'w-40'}/>
                <img src={uncleDelivery} alt="Flipkart-logo" className={'w-40'}/>
                <img src={anqfinance} alt="Flipkart-logo" className={'w-40'}/>
                <img src={jehovah} alt="jehovah-logo" className={'w-40'}/>
            </div>
        </div>
    )
};

export default BrandPartners;