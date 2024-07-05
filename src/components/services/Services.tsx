import React from 'react';
import services from "./services.ts";
// import {MdKeyboardArrowRight} from "react-icons/md";

const Services:React.FC = () => {
    return(
        <div className={'absolute mt-2.5 top-24 left-80 text-black border-x-2 border-b-4 border-gray-300 bg-white rounded-lg py-5 shadow-2xl shadow-blue-300'}>
                <ul className={'flex flex-col px-8  font-bold  space-y-5'}>
                    {services.map((service, i) =>
                        <div
                            className={'flex flex-row space-x-3 justify-center items-center bg-blue-200 rounded-lg p-4 mt-3'}>
                            <service.icon className={'text-blue-600 text-4xl'}/>
                            <li className={' w-full   '}
                                key={i}>{service.service}</li>
                            {/*<span className={'text-xl absolute right-10'}> <MdKeyboardArrowRight/></span>*/}
                        </div>
                    )}
                </ul>
        </div>
    )
};
export default Services;