import React from "react";

// *** IMAGES
import EduImg from '../../assets/products/eduwerkz/eduWerkz.png';
// import ERPInfo from '../../assets/products/erp-info.jpg';
import EduWerkzFeatures from "./EduWerkzFeatures.tsx";

const EduWerkz: React.FC = () => {
    return (
        <React.Fragment>
            <div
                className={'flex font-bold items-center justify-center bg-blue-50 md:px-12 sm:pt-0 pt-24 md:pt-36 w-screen '}>
                <div
                    className={' flex sm:max-lg:flex-col space-y-8 md:space-y-6 md:items-center justify-center  rounded-lg shadow-2xl pb-24  '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}

                    <div className={'flex flex-col sm:max-lg:items-center sm:max-lg:space-y-12 justify-center pt-20 md:pt-0 lg:pb-24 space-y-3 my-5 lg:ml-14 sm:max-lg:px-5 '}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-6 md:w-8/12 xl:text-5xl '}>EduWerkz </h1>
                        <p className={'sm:max-md:mt-8 text-xl md:text-2xl  text-gray-700 text-start '}>
                            EduWerkz fosters a connected and efficient educational ecosystem, empowering everyone to achieve their full potential. Our innovative and remarkably affordable ERP empowers students, parents, teachers and management to collaborate seamlessly.
                        </p>
                    </div>
                    <img src={EduImg} alt={'erp-img'} className={'opacity-60 md:w-7/12 lg:w-5/12 h-fit '} />
                </div>
            </div>
            <div className="bg-gray-100">
                <div
                    className={' flex flex-col text-black items-center space-y-16 xl:space-y-16 md:space-y-28 text-center px-4 md:px-8 lg:px-12 xl:px-24'}>
                    <div className='z-10 flex flex-col items-center gap-2 mb-24 border-2 border-gray-400 bg-gray-200 uppercase rounded-lg py-6 md:px-8 px-4 -mt-8'>
                        <h1 className={'text-3xl md:text-4xl font-bold underline-offset-8  text-fuchsia-950 xl:text-5xl'}>EduWerkz Features</h1>
                        {/* <div className={' h-0.5 w-36 bg-red-300 '}></div> */}
                    </div>
                    <EduWerkzFeatures />
                </div>
            </div>
        </React.Fragment>
    )
};
export default EduWerkz;

{/* <div className={'bg-gray-100 p-10'}>
            <div
                className={'flex flex-col text-black items-center space-y-16 xl:space-y-16 md:space-y-28 text-center md:px-8 lg:px-12 xl:px-24'}>
                <div className='z-10 flex flex-col items-center gap-2 mb-24 border-2 border-gray-400 bg-gray-200 uppercase rounded-lg py-6 px-10 -mt-16 '>
                <h1 className={'text-4xl font-bold underline-offset-8  text-fuchsia-950 xl:text-5xl'}>Our Solutions</h1>
                {/* <div className={' h-0.5 w-36 bg-red-300 '}></div> */}
// </div> */}