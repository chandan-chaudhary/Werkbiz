 import React from 'react'
 // import {Link} from 'react-router-dom';
 import OfiWerkzFeatures from "./OfiWerkzFeatures.tsx";
// import carrerImg from '../../assets/workfolio/carrerWorkfolio.png';
 import Footer from "../footer/Footer.tsx";

 const OfiWerkz :React.FC= () => {
    return (
        <React.Fragment>
        <div className={'flex flex-col space-y-8 text-black bg-white mx-auto  p-5 h-full md:space-y-16 text-center xl:h-screen'}>
            <div className={'flex flex-col items-center space-y-36 justify-center mt-12 p-5 rounded-lg md:mx-12 md:px-12 md:mt-36 xl:mt-44 xl:mx-28 xl:px-24'}>
                <h1 className={'text-4xl lg:text-6xl font-bold text-fuchsia-950 uppercase'}>OfiWerkz</h1>
                <p className={'text-xl font-bold text-fuchsia-900 sm:max-xl:pb-12  xl:pt-20 xl:px-28 lg:text-2xl xl:text-3xl'}>Unleash the full potential of your workforce with OfiWerkz. Our innovative IT solution provides employers with valuable insights into employee productivity and streamlines workflows for efficient office management.</p>

                {/*IMAGE*/}
                {/*<img src={carrerImg} alt={'carrer-img'} className={'absolute opacity-20 md:w-8/12 xl:-bottom-10'}/>*/}
            </div>
        </div>
            {/*OFIWERKZ FEATURES*/}
            <OfiWerkzFeatures />
            {/*FOOTER*/}
            <Footer />
        </React.Fragment>
    )
 };
 export default OfiWerkz;