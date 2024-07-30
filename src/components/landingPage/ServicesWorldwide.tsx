import React from "react";

// *** IMAGES
import teamStartup from '../../assets/websitelogo/team-working-startup.png';

const ServicesWorldwide : React.FC= () => {
    return(
        <div className={' flex bg-logoPrimaryColor text-white items-center pt-20 pb-12 lg:pb-24'}>
            <div className={' flex flex-col justify-center space-y-5 mx-auto'}>
                <span className={'text-4xl lg:text-5xl '}>Simplifying Lives.</span>
                <span className={'text-4xl lg:text-5xl '}>One Product at a Time</span>
                <div className={''}>
                    <div className={'flex items-center space-x-5 w-fit pt-12'}>
                        <span className={'text-4xl font-bold w-28'}>1M+</span>
                        <div className={'flex flex-col items-start text-2xl space-y-1'}>
                            <span>Users</span>
                            {/*<span>Globally</span>*/}
                            <div className={' h-0.5 bg-slate-100 w-20'}></div>
                        </div>
                    </div>
                    <div className={'flex items-center space-x-5 w-fit pt-12'}>
                        <span className={'text-4xl font-bold w-28'}>5K+</span>
                        <div className={'flex flex-col items-start text-2xl space-y-1'}>
                            <span>Pin</span>
                            <span>Codes</span>
                            <div className={' h-0.5 bg-slate-100 w-20'}></div>
                        </div>
                    </div>
                    <div className={'flex items-center space-x-5 w-fit pt-12'}>
                        <span className={'text-4xl font-bold w-28'}>30+</span>
                        <div className={'flex flex-col items-start text-2xl space-y-1'}>
                            <span>Clients</span>
                            <div className={' h-0.5 bg-slate-100 w-20'}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'sm:max-md:hidden md:max-lg:w-72 lg:w-6/12'}>
                <img src={teamStartup} alt="team-start-up" className=" "/>
            </div>
        </div>
    )
};

export default ServicesWorldwide;