
import React from 'react';

// import marketingImg from '../../assets/services/marketing.png';
import it_Img2 from "../../assets/services/software-solution/it-solution2.png";
import SalesFeatures from "./Sales_features.tsx";

const SalesMarketing : React.FC = () => {
    return(
        <React.Fragment>
            <div
                className={'flex flex-col space-y-8 text-black bg-white mx-auto  p-5 h-full md:space-y-16 text-center xl:h-screen '}>

                <div
                    className={'flex flex-col items-center space-y-24 justify-center mt-12 p-5 rounded-lg md:mx-12 md:px-12 md:mt-36  xl:mx-28 xl:px-24 '}>
                    <h1 className={'text-4xl lg:text-6xl font-bold text-fuchsia-950 uppercase'}>sales & marketing </h1>
                    <p className={'text-xl font-bold text-fuchsia-900 sm:max-xl:pb-12  xl:pt-20 xl:px-28 lg:text-2xl xl:text-3xl'}>Sales and marketing play crucial roles in the success of software solutions by ensuring their visibility, adoption, and sustained growth in the market. Sales teams engage directly with potential clients, understanding their needs and demonstrating how the software solution can address specific pain points or enhance operational efficiency.</p>
                    <img src={it_Img2} alt={'software-img'}
                         className={'absolute opacity-20 md:w-8/12 xl:-bottom-10 xl:w-4/12'}/>
                </div>
            </div>

           <SalesFeatures />
        </React.Fragment>
    )
};

export default SalesMarketing;