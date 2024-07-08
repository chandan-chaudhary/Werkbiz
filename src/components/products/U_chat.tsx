
import React from 'react';
import {Link} from 'react-router-dom';
import chatbot from '../../assets/products/chatbot.png';

const U_chat :React.FC =()=>{
    return(
        <div className={'flex text-black bg-gradient-to-bl from-blue-200 to-fuchsia-500 h-screen pt-36 w-screen '}>
            <div className={'flex flex-row justify-evenly '}>
                <div className="flex w-8/12 h-fit sm:max-lg:hidden">
                    <img src={chatbot} alt={'chat-bot'}/>
                </div>
                <div className={'flex flex-col  text-2xl space-y-12 px-12 items-center w-screen '}>
                    <span className={'text-7xl font-extrabold text-fuchsia-900'}>U-CHAT</span>
                    <span className={'text-5xl font-extrabold text-fuchsia-800 uppercase'}> coming soon...</span>
                    <span className={'text-2xl underline underline-offset-2 uppercase text-fuchsia-900'}>for more details</span>
                   <Link to={'/contact-us'}>  <button className={'p-3 px-4 text-fuchsia-950 font-bold border-2 border-red-800   rounded-lg bg-fuchsia-200 uppercase hover:bg-red-400 hover:text-white '}>Contact us</button>
                   </Link>
                </div>
            </div>
        </div>
    )
};
export default U_chat;