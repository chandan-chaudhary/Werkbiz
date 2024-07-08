import React from 'react';

// *** IMAGES
import it_Img from '../../assets/services/it-solution.png';
import it_Img2 from '../../assets/services/it-solution2.png';


const Software_Solution: React.FC =() => {
    return(
        <React.Fragment>
            <div className={'relative flex sm:flex-col lg:flex-row text-black bg-gradient-to-bl from-blue-100 to-blue-400  p-5 sm:max-lg:pt-24 lg:pt-36  lg:space-x-12 space-y-12 lg:h-full lg:pb-28  lg:px-16 pb-28  xl:h-screen'}>
                <div className={'  flex flex-col  md:items-center  lg:w-5/12 lg:space-y-12  xl:ml-12'}>
                    <img src={it_Img} alt={'it-img'} className={'sm:max-lg:hidden '} />
                    <h1 className={'text-3xl font-bold uppercase text-fuchsia-950 lg:text-5xl xl:6xl lg:ml-12'}>Software Solution</h1>
                </div>
                <div className={'lg:relative flex flex-col  lg:items-center text-fuchsia-950 items-center lg:w-7/12  '}>
                    <img src={it_Img2} alt={'it-img2'} className={'absolute top-96 md:top-0 opacity-20 md:opacity-10 xl:w-96 lg:top-36'}/>
                    <div>
                    <p className={'text-2xl px-5 xl:text-3xl lg:text-3xl xl:mx-24 text-center'}>A software solution is a comprehensive approach to addressing specific needs
                        or
                        challenges through the use of software applications or systems. It begins with identifying and
                        analyzing requirements, understanding the problem domain, and defining clear objectives. Design and
                        architecture play a crucial role in outlining the structure of the software, including its
                        components, modules, and user interfaces.</p>
                        <br/>
                        <br/>
                        <img src={it_Img} alt={'it-img'} className={'md:w-8/12 md:ml-24 lg:hidden'}/>
                        <p className={'hidden text-2xl px-5 xl:text-3xl'}>
                        Implementation encompasses deploying the software on appropriate hardware or cloud infrastructure,
                        configuring the environment, and possibly migrating existing data. Maintenance and support are
                        ongoing activities, involving bug fixing, releasing updates for feature enhancements or security
                        patches, and providing user support and training as needed. </p>
                    </div>
                </div>
            </div>
             {/*DEVELOPMENT*/}

                <div className={' bg-slate-500 '}>
                <div className={'relative -top-10 lg:-top-16  px-12  flex flex-col items-center justify-center text-fuchsia-950 bg-gradient-to-bl from-blue-200 via-blue-300 to-blue-400  py-10 space-y-12 mx-10 rounded-2xl shadow-2xl  shadow-blue-500 xl:mx-24'}>
                    <h1 className={'text-3xl uppercase md:max-lg:w-9/12 md:font-bold xl:text-4xl'}>Development specifics in software solution</h1>
                    <div className={'h-0.5 md:w-64 bg-blue-500'}></div>
                    <ul  className={'text-xl xl:text-2xl flex flex-col items-center justify-center space-y-8 text-center'}>
                        <li className={'border-blue-500 font-bold bg-blue-200 border-2 p-5 px-5 rounded-full uppercase w-full'}>Web Development</li>
                        <li className={'border-blue-500 font-bold bg-blue-200 border-2 p-5 px-5 rounded-full uppercase w-full'}>Mobile App Development</li>
                        <li className={'border-blue-500 font-bold bg-blue-200 border-2 p-5 px-5 rounded-full uppercase w-full'}>Embedded Systems Development</li>
                        <li className={'border-blue-500 font-bold bg-blue-200 border-2 p-5 px-5 rounded-full uppercase w-full'}>API Development</li>
                    </ul>
                </div>
                </div>
        </React.Fragment>
    )
};

export default Software_Solution;