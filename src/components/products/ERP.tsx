import React  from "react";
import ERPImg from '../../assets/erp.png';
import ErpFeatures from "./ErpFeatures.tsx";

const Erp :React.FC=() => {
    return(
        <>
        <div className={'flex flex-col text-black  bg-blue-400 px-12 py-12 w-screen'}>
            <div className={'mt-8'}>
                <img src={ERPImg} alt={'erp-img'} className={''}/>
            </div>
            <div className={'flex flex-col justify-center items-center space-y-16 py-12 bg-blue-200 rounded-lg px-8 mt-10 '}>
                <h1 className={'font-bold text-5xl uppercase '}>ERP (Enterprise resource planning)</h1>
                <p className={'text-xl'}>
                    Enterprise resource planning systems are complete, integrated platforms, either on-premises or in
                    the cloud, managing all aspects of a production-based or distribution business. Furthermore, ERP
                    systems support all aspects of financial management, human resources, supply chain management, and
                    manufacturing with your core accounting function.
                    <br/>
                    <br/>
                    Gain complete control over your business operations with our enterprise
                    resource planning (ERP)
                    solutions. We implement robust and scalable ERP systems that integrate seamlessly with your existing
                    infrastructure, providing valuable insights and streamlining your operations.
                </p>
            </div>
        </div>
            <div className={'flex flex-col items-center text-black p-10 space-y-5'}>
                    <h1 className={'text-4xl  underline-offset-8'}>ERP Features</h1>
                <div className={'h-0.5 w-36 bg-red-300'}></div>
                    <ErpFeatures />
            </div>
        </>
    )
};
export default Erp;