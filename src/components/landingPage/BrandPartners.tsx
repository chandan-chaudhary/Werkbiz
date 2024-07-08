
import React from 'react';
import Marquee from 'react-fast-marquee';

// ***IMAGES
import flipkart from '../../assets/brands/Flipkart-Logo.png';
import paytm from '../../assets/brands/Paytm-Logo.wine.svg';
import airtel from '../../assets/brands/airtel.png';
import uber from '../../assets/brands/uber.webp';
import rapido from '../../assets/brands/rapido.jpg';
import uncleDelivery from '../../assets/brands/uncle-delivery.png';
import anqfinance from '../../assets/brands/anq-finance.png';
// import jehovah from '../../assets/brands/jehovah.jpg';
import gaurdian_bank from '../../assets/brands/gaurdian-bank.png';


const BrandPartners :React.FC =()=>{
    return(
        <div className={'flex flex-col bg-white text-black  pt-24 mx-auto lg:mx-12 py-8'}>
            <div className={'flex flex-col justify-center items-center space-y-2'}>
                <span className={' uppercase font-semibold '}>Brands that trust us</span>
                <div className={'h-0.5 w-20 bg-red-400'}></div>
            </div>
            <div className={'px-24 pt-24'}>
            <Marquee pauseOnHover speed={100} delay={3} >
                {/*<div className={'grid grid-cols-4 gap-x-3 gap-y-8  place-items-center py-10 px-5 '}>*/}
                <div className={' p-12 px-20'}>
                    <img src={flipkart} alt="Flipkart-logo" className={'w-40'}/>
                </div>

                <div className={'p-12 px-20'}>
                     <img src={paytm} alt="paytm-logo" className={'w-40'}/>
                </div>

                <div className={'p-12 px-20'}>
                     <img src={airtel} alt="airtel-logo" className={'w-40'}/>
                </div>

                <div className={'p-12 px-20'}>
                     <img src={uber} alt="uber-logo" className={'w-40 rounded-lg'}/>
                </div>

                <div className={'p-12 px-20'}>
                     <img src={rapido} alt="rapido-logo" className={'w-40'}/>
                </div>

                <div className={'p-12 px-20'}>
                    <img src={uncleDelivery} alt="uncle-delivery" className={'w-40'}/>
                </div>

                <div className={'p-12 px-20'}>
                     <img src={anqfinance} alt="Flipkart-logo" className={'w-40'}/>
                </div>

                <div className={'p-12 px-20'}>
                      <img src={gaurdian_bank} alt="gaurdian-logo" className={'w-40'} />
                </div>
            </Marquee>
            </div>
        </div>
)
};

export default BrandPartners;