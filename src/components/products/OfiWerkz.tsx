 import React from 'react'
 // import {Link} from 'react-router-dom';
 import OfiWerkzFeatures from "./OfiWerkzFeatures.tsx";
import OfiImg from '../../assets/products/ofiwerkz/ofiWerkz.png';
//  import Footer from "../footer/Footer.tsx";

 const OfiWerkz :React.FC= () => {
    return (
        <React.Fragment>
              <div
                className={'flex font-bold items-center justify-center bg-blue-50 px-12 sm:pt-0 py-24 md:pt-36 lg:pt-52 w-screen text-center'}>
                <div
                    className={'relative flex flex-col space-y-8 md:space-y-12 justify-center items-center   '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}
                    <div className={'flex flex-col items-center justify-center pt-20 md:pt-0 md:pb-24 space-y-12'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-12 md:w-8/12 xl:text-5xl'}>OfiWerkz</h1>
                        <p className={'sm:max-md:mt-8 text-xl md:px-8 md:text-2xl text-fuchsia-950 xl:mx-72 '}>
                        Unleash the full potential of your workforce with OfiWerkz. Our innovative IT solution provides employers with valuable insights into employee productivity and streamlines workflows for efficient office management.
                        </p>
                    </div>
                    <img src={OfiImg} alt={'erp-img'} className={'absolute -bottom-44 opacity-10 md:w-9/12 '}/>
                </div>
            </div>
            {/*OFIWERKZ FEATURES*/}
            <OfiWerkzFeatures />
            {/*FOOTER*/}
            {/* <Footer /> */}
        </React.Fragment>
    )
 };
 export default OfiWerkz;