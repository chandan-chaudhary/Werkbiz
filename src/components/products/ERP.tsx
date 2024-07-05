import React  from "react";
import ERPImg from '../../assets/erp.png';
import ERPInfo from '../../assets/erp-info.jpg';
import ErpFeatures from "./ErpFeatures.tsx";
import Footer from "../footer/Footer.tsx";

const Erp :React.FC=() => {
    return(
        <>
            <div className={'flex flex-col text-white font-bold bg-blue-400 px-12 py-12 w-screen lg:flex-row'}>
                <div className={'flex flex-col justify-center items-center space-y-8 mt-6 lg:w-6/12 xl:w-5/12 '}>
                    <img src={ERPImg} alt={'erp-img'} className={'md:max-lg:w-8/12 '}/>
                    <p className={'text-xl md:px-8  lg:text-2xl'}>
                        Enterprise resource planning systems are complete, integrated platforms, either on-premises or in
                        the cloud, managing all aspects of a production-based or distribution business. Furthermore, ERP
                        systems support all aspects of financial management, human resources, supply chain management, and
                        manufacturing with your core accounting function.
                       </p>
                </div>
                <div
                    className={'flex sm:max-lg:flex-col-reverse lg:flex-col space-y-8 justify-center items-center  mt-10 lg:w-6/12 '}>
                    <p className={'sm:max-lg:mt-8 text-xl md:px-8 lg:text-2xl'}>
                        Gain complete control over your business operations with our enterprise
                        resource planning (ERP)
                        solutions. We implement robust and scalable ERP systems that integrate seamlessly with your existing
                        infrastructure, providing valuable insights and streamlining your operations.
                    </p>
                    <img src={ERPInfo} alt={'erp-img'} className={' rounded-full md:max-lg:w-8/12 lg:w-6/12'}/>
                </div>
            </div>
            <div className={'flex flex-col items-center text-black  space-y-5 lg:max-2xl:pt-24 bg-white px-5 pt-24'}>
                    <h1 className={'text-4xl  font-bold underline-offset-8 xl:pt-24 text-gray-800'}>ERP Advance Features</h1>
                <div className={'h-0.5 w-36 bg-red-300 xl:mb-24'}></div>
                    <ErpFeatures />
            </div>
            <Footer />

        </>
    )
};
export default Erp;