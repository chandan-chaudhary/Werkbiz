 import React from 'react'
 // import {Link} from 'react-router-dom';
 import OfiWerkzFeatures from "./OfiWerkzFeatures.tsx";
import OfiImg from '../../assets/products/ofiwerkz/ofiWerkz.png';
//  import Footer from "../footer/Footer.tsx";

 const OfiWerkz :React.FC= () => {
    return (
        <React.Fragment>
              <div
                className={'flex font-bold items-center justify-center bg-blue-50 md:px-12 sm:pt-0 pt-24 md:pt-36 w-screen text-center'}>
                <div
                    className={' flex sm:max-lg:flex-col space-y-8 md:space-y-6 md:items-center justify-center  rounded-lg shadow-2xl pb-20  '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}
                    <div className={'flex flex-col sm:max-lg:items-center sm:max-lg:space-y-12 justify-center pt-20 md:pt-0 lg:pb-24 space-y-3 my-5 lg:ml-14 px-2 lg:text-start'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-6 md:w-8/12 xl:text-5xl'}>OfiWerkz</h1>
                        <p className={'sm:max-md:mt-8 text-xl md:text-2xl  text-gray-700 text-start sm:max-md:px-4'}>
                        Unleash the full potential of your workforce with OfiWerkz. Our innovative IT solution provides employers with valuable insights into employee productivity and streamlines workflows for efficient office management.
                        </p>
                    </div>
                    <img src={OfiImg} alt={'erp-img'} className={' opacity-60 md:w-7/12 lg:w-5/12 h-fit '}/>
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