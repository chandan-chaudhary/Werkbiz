import React from 'react';

// *** IMAGES
// import it_Img2 from '../../assets/services/software-solution/it-solution2.png';

import SoftwareSolution_feature from "./SoftwareSolution_feature.tsx";


const Software_Solution: React.FC =() => {
    return(
        <React.Fragment>
            <div
                className={'flex flex-col space-y-8 text-black bg-gray-100 mx-auto  p-5 h-full md:space-y-16 text-center xl:h-screen '}>

                <div
                    className={'flex flex-col items-center space-y-24 justify-center mt-12 p-5 rounded-lg md:mx-12 md:px-12 md:mt-28  xl:mx-28 xl:px-24 '}>
                    <h1 className={'text-4xl lg:text-6xl font-bold text-logoPrimaryColor uppercase'}>Digital Edge </h1>
                    <p className={'text-xl font-bold text-fuchsia-900 sm:max-xl:pb-12   lg:text-2xl'}>Implementation
                        encompasses deploying the software on appropriate hardware or cloud infrastructure, configuring the
                        environment, and possibly migrating existing data.Maintenance and support are ongoing activities, involving bug fixing, releasing updates for feature enhancements
                        or security patches, and providing user support and training as needed.</p>
                    {/* <img src={it_Img2} alt={'software-img'}
                         className={'absolute opacity-20 md:w-8/12 xl:-bottom-10 xl:w-4/12'}/> */}
                </div>
            </div>
            {/*DEVELOPMENT*/}

           <SoftwareSolution_feature />
        </React.Fragment>
    )
};
export
default
Software_Solution;