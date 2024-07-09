import React  from "react";
import ErpFeatures from "./ErpFeatures.tsx";
import Footer from "../footer/Footer.tsx";

// *** IMAGES
import ERPImg from '../../assets/products/erp.png';
import FeaturesAll from "./featuresAll.tsx";
// import ERPInfo from '../../assets/products/erp-info.jpg';


const Erp :React.FC=() => {
    return(
        <React.Fragment>
            <div
                className={'flex font-bold items-center justify-center bg-blue-50 px-12 py-24 md:pt-36 lg:pt-52 w-screen text-center'}>
                <div
                    className={'relative flex flex-col space-y-8 md:space-y-12 justify-center items-center   '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}
                    <div className={'flex flex-col items-center justify-center pt-20 md:pt-0 md:pb-24 space-y-12'}>
                        <h1 className={'text-4xl uppercase text-blue-900 md:pb-12 md:w-8/12 xl:text-5xl'}>Enterprize
                            resource planning</h1>

                        <p className={'sm:max-md:mt-8 text-xl md:px-8 md:text-2xl text-fuchsia-950 xl:mx-72 xl:text-4xl'}>
                            Gain complete control over your business operations with our enterprise
                            resource planning (ERP)
                            solutions.
                        </p>
                        {/*    <p className={'sm:max-lg:hidden'}>We implement robust and scalable ERP systems that integrate seamlessly with your*/}
                        {/*    existing*/}
                        {/*    infrastructure, providing valuable insights and streamlining your operations.*/}
                        {/*</p>*/}
                    </div>
                    <img src={ERPImg} alt={'erp-img'} className={'absolute -bottom-24 opacity-20 md:w-8/12 '}/>

                    {/*<div className={'flex flex-col justify-center items-center space-y-8 mt-6 lg:w-6/12 xl:w-5/12 '}>*/}
                    {/*    <img src={ERPImg} alt={'erp-img'} className={'md:max-lg:w-8/12 '}/>*/}
                    {/*    <p className={'text-xl md:px-8  lg:text-2xl'}>*/}
                    {/*        Enterprise resource planning systems are complete, integrated platforms, either on-premises or in*/}
                    {/*        the cloud, managing all aspects of a production-based or distribution business. Furthermore, ERP*/}
                    {/*        systems support all aspects of financial management, human resources, supply chain management, and*/}
                    {/*        manufacturing with your core accounting function.*/}
                    {/*       </p>*/}
                    {/*<img src={ERPInfo} alt={'erp-img'} className={' rounded-full md:max-lg:w-8/12 lg:w-6/12'}/>*/}

                    {/*</div>*/}
                </div>
            </div>
            <div>
                <div
                    className={'flex flex-col items-center text-black  space-y-5 lg:max-2xl:pt-24 bg-white px-5 pt-24'}>
                    <h1 className={'text-4xl font-bold underline-offset-8 xl:pt-24 text-fuchsia-950 xl:text-6xl'}>ERP
                        Advance Features</h1>
                    <div className={'lg:relative lg:-bottom-8 h-0.5 w-36 bg-red-400 xl:mb-24 xl:w-56 xl:mt-24'}></div>
                    <FeaturesAll/>
                </div>
                <Footer/>

            </div>
        </React.Fragment>
    )
};
export default Erp;