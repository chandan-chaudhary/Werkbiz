import React  from "react";

// *** IMAGES
// import ERPImg from '../../assets/products/erp.png';
// import ERPInfo from '../../assets/products/erp-info.jpg';
import EduWerkzFeatures from "./EduWerkzFeatures.tsx";

const EduWerkz :React.FC=() => {
    return(
        <React.Fragment>
            <div
                className={'flex font-bold items-center justify-center bg-blue-50 px-12 py-24 md:pt-36 lg:pt-52 w-screen text-center'}>
                <div
                    className={'relative flex flex-col space-y-8 md:space-y-12 justify-center items-center   '}>
                    {/*<div className={'bg-blue-400 h-0.5 w-36 '}></div>*/}
                    <div className={'flex flex-col items-center justify-center pt-20 md:pt-0 md:pb-24 space-y-12'}>
                        <h1 className={'text-4xl uppercase text-logoPrimaryColor md:pb-12 md:w-8/12 xl:text-5xl'}>EduWerkz</h1>
                        <p className={'sm:max-md:mt-8 text-xl md:px-8 md:text-2xl text-fuchsia-950 xl:mx-72 '}>
                            EduWerkz fosters a connected and efficient educational ecosystem, empowering everyone to achieve their full potential. Our innovative and remarkably affordable ERP empowers students, parents, teachers and management to collaborate seamlessly.
                        </p>
                    </div>
                    {/*<img src={ERPImg} alt={'erp-img'} className={'absolute -bottom-24 opacity-20 md:w-8/12 '}/>*/}
                </div>
            </div>
            <div>
                <div
                    className={'flex flex-col items-center text-black  space-y-5 lg:max-2xl:pt-24 bg-white px-5 pt-24'}>
                    <h1 className={'text-4xl font-bold underline-offset-8 xl:pt-24 text-fuchsia-950 xl:text-5xl'}>EduWerkz Features</h1>
                    <div className={' h-0.5 w-36 bg-red-300 '}></div>
                    <EduWerkzFeatures/>
                </div>
            </div>
        </React.Fragment>
    )
};
export default EduWerkz;