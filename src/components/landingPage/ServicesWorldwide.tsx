import React from "react";
import teamStartup from '../../assets/team-working-startup.png';

const ServicesWorldwide : React.FC= () => {
    return(
        <div className={' relative flex bg-blue-500 text-white  items-center pt-20 pb-12'}>
            <div className={'  flex flex-col  pl-64 space-y-5'}>
                <span className={'text-6xl '}>Made in India.</span>
                <span className={'text-6xl'}>Made for the World.</span>
                <div className={'pt-12 pl-12'}>
                    <div className={'flex items-center space-x-5 w-fit pt-12'}>
                        <span className={'text-4xl font-bold w-28'}>100M+</span>
                        <div className={'flex flex-col items-start text-2xl space-y-1'}>
                            <span>Users</span>
                            <span>Globally</span>
                            <div className={' h-0.5 bg-slate-100 w-20'}></div>
                        </div>
                    </div>
                    <div className={'flex items-center space-x-5 w-fit pt-12'}>
                        <span className={'text-4xl font-bold w-28'}>15K+</span>
                        <div className={'flex flex-col items-start text-2xl space-y-1'}>
                            <span>Employees</span>
                            <span>Worldwide</span>
                            <div className={' h-0.5 bg-slate-100 w-20'}></div>
                        </div>
                    </div>
                    <div className={'flex items-center space-x-5 w-fit pt-12'}>
                        <span className={'text-4xl font-bold w-28'}>50+</span>
                        <div className={'flex flex-col items-start text-2xl space-y-1'}>
                            <span>Produts</span>
                            <div className={' h-0.5 bg-slate-100 w-20'}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'absolute right-0 bottom-0  w-7/12 items-stretch'}>
                <img src={teamStartup} alt="team-start-up" className=" "/>
            </div>
        </div>
    )
};

export default ServicesWorldwide;