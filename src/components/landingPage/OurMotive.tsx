import React from "react";


// *** ICONS
import { PiHandshakeThin } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
// import { PiUsersLight } from "react-icons/pi";
import { SiMockserviceworker } from "react-icons/si";
// import valueBgImg from '../../assets/valueBg.jpg';


const OurMotive :React.FC = () => {
    return(
        <div className={'flex justify-center  text-black w-screen mx-auto px-3 text-center bg-white  '} style={{}}>

            <div className={'flex flex-col justify-center items-center pt-20 pb-10 shadow-2xl shadow-gray-500 mx-10 lg:mx-28 lg:pb-16 rounded-2xl xl:mx-44'}>
                <span className={'text-4xl sm:max-md:ml-8 font-bold px-4 md:max-lg:w-8/12 lg:w-6/12'}>The core values and principles that drive us</span>
                <div className={'mt-8 bg-red-300 w-40 h-0.5'}></div>
                <div className={'flex flex-col items-center justify-center'}>
                    <div className={'flex flex-col items-center justify-center space-y-3 px-8 lg:px-0 pt-3  md:max-lg:py-5 lg:space-y-6 lg:mx-28 lg:pt-12'}>
                        <PiHandshakeThin className={'text-6xl text-green-300 lg:text-8xl'}/>
                        <h1 className={'text-xl font-bold lg:text-3xl'}>Client-Centricity</h1>
                        <p className={'text-gray-600 text-xl lg:text-2xl lg:px-10'}>
                            We put you at the heart of everything we do. Our solutions are built around your unique needs and goals, ensuring a successful partnership that drives real results.
                        </p>
                    </div>
                    <div className={'flex flex-col items-center justify-center space-y-3 px-8 lg:px-0 pt-3  md:max-lg:py-5 lg:space-y-6 lg:mx-28 lg:pt-12'}>
                        <TbTargetArrow className={'text-6xl text-red-300'}/>
                        <h1 className={'text-xl font-bold lg:text-3xl'}>
                            Innovation
                        </h1>
                        <p className={'text-gray-600 text-xl  lg:text-2xl lg:px-10'}>
                            We are constantly pushing boundaries and embracing the latest technologies. This allows us to develop cutting-edge solutions that keep your business ahead of the curve.
                        </p>
                    </div>
                    <div className={'flex flex-col items-center justify-center space-y-3 px-8 lg:px-0 pt-3  md:max-lg:py-5 lg:space-y-6 lg:mx-28 lg:pt-12'}>
                        <SiMockserviceworker className={'text-6xl text-blue-400'}/>
                        <h1 className={'text-xl font-bold lg:text-3xl'}>Excellence</h1>
                        <p className={'text-gray-600 text-xl  lg:text-2xl lg:px-10'}>We are dedicated to delivering exceptional service and exceeding your expectations. Our team of passionate experts is committed to the highest quality standards in every aspect of our work.</p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
};

export default OurMotive;