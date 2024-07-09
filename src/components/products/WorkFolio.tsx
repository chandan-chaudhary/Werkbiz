 import React from 'react'
 // import {Link} from 'react-router-dom';
 import WorkfolioFeatures from "./WorkfolioFeatures.tsx";
import carrerImg from '../../assets/workfolio/carrerWorkfolio.png';

 const WorkFolio :React.FC= () => {
    return (
        <React.Fragment>
        <div className={'flex flex-col space-y-8 text-black bg-white mx-auto  p-5 h-full md:space-y-16 text-center xl:h-screen'}>
            <div className={'flex flex-col items-center space-y-36 justify-center mt-12 p-5 rounded-lg md:mx-12 md:px-12 md:mt-36 xl:mt-44 xl:mx-28 xl:px-24'}>
                <h1 className={'text-4xl lg:text-6xl font-bold text-fuchsia-950 uppercase'}>Workfolio</h1>
                <p className={'text-xl font-bold text-fuchsia-900 sm:max-xl:pb-12  xl:pt-20 xl:px-28 lg:text-2xl xl:text-3xl'}> A professional's
                    digital space to snapshot of your career accomplishments and can be tailored for different purposes to showcase your professional achievements, skills, and experiences.
                    {/*present their professional journey, including*/}
                    {/*projects, case studies, testimonials, and other relevant accomplishments. Workfolio aims to enhance*/}
                    {/*personal branding by offering customizable templates and features that enable users to create a*/}
                    {/*unique and compelling online presence.*/}
                    {/*It serves as a comprehensive snapshot of your career accomplishments and can be tailored for different purposes to showcase your professional achievements, skills, and experiences*/}
                </p>
                <img src={carrerImg} alt={'carrer-img'} className={'absolute opacity-20 md:w-8/12 xl:-bottom-10'} />

            </div>
            {/*<div className={'flex flex-col items-center justify-center text-xl space-y-4'}>*/}
            {/*    <span className={'underline underline-offset-4 text-2xl text-fuchsia-950'}>for more details</span>*/}
            {/*    <Link to={'/contact-us'}>*/}
            {/*        <button className={'uppercase bg-blue-400 border-2 border-fuchsia-900 p-2 px-3  rounded-lg font-bold hover:bg-fuchsia-900 hover:text-white hover:scale-90'}>contact us</button>*/}
            {/*    </Link>*/}
            {/*</div>*/}

        </div>
            <WorkfolioFeatures />

        </React.Fragment>
    )
 };
 export default WorkFolio;