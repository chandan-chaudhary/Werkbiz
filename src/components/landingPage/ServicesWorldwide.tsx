import React from "react";
import teamStartup from '../../assets/team-working-startup.png';

const ServicesWorldwide : React.FC= () => {
    return(
        <div className={' flex bg-blue-500 text-white items-center pt-20 pb-12 mx-auto'}>
            <div className={' flex flex-col justify-center space-y-5 mx-auto'}>
                <span className={'text-4xl '}>Made in India.</span>
                <span className={'text-4xl'}>Made for the World.</span>
                <div className={''}>
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
            <div className={'sm:max-md:hidden'}>
                <img src={teamStartup} alt="team-start-up" className=" "/>
            </div>
        </div>
    )
};

export default ServicesWorldwide;