import React from "react";
import { PiHandshakeThin } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { PiUsersLight } from "react-icons/pi";

// import valueBgImg from '../../assets/valueBg.jpg';
const OurMotive :React.FC = () => {
    return(
        <div className={'flex justify-center  text-black w-screen mx-auto px-3'} style={{}}>

            <div className={'flex flex-col justify-center items-center pt-20 pb-10 shadow-2xl mx-auto'}>
                <span className={'text-4xl font-bold px-4 '}>The core values and principles that drive us</span>
                <div className={'mt-8 bg-red-400 w-40 h-0.5'}></div>
                <div className={'flex flex-col items-center justify-center'}>
                <div className={'flex flex-col items-center justify-center space-y-3 px-3 pt-3'}>
                    <PiHandshakeThin className={'text-6xl text-green-300'}/>
                    <h1 className={'text-xl font-bold'}>Long-term commitment</h1>
                    <p className={'text-gray-600 text-xl'}>
                        25+ years of running a profitable organization gives us a good sense of challenges that a
                        growing business faces. We take pride in running a sustainable business that’s powered by you,
                        our customer.
                    </p>
                </div>
                <div className={'flex flex-col  items-center justify-center space-y-3 px-3 pt-3'}>
                    <TbTargetArrow className={'text-6xl text-red-300'}/>
                    <h1 className={'text-xl font-bold'}>
                        Focus on research and development
                    </h1>
                    <p className={'text-gray-600 text-xl'}>
                        Software is our craft and we back it up with our relentless investments in R&D. So much so that
                        we prefer to own the entire technology stack, including running our data centers globally.
                    </p>
                </div>
                <div className={'flex flex-col  items-center justify-center space-y-3 px-3 pt-3'}>
                    <PiUsersLight className={'text-6xl text-blue-400'}/>
                    <h1 className={'text-xl font-bold'}>Customer-first philosophy</h1>
                    <p className={'text-gray-600 text-xl'}>In all these years, it's our customers' trust and goodwill that has helped us establish a strong
                        position in the market. No matter the size of your business, we're here to help you grow.</p>
                </div>
            </div>
            </div>
        </div>
        // </div>
    )
};

export default OurMotive;