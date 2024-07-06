 import React from 'react'
 import {Link} from 'react-router-dom';


 const WorkFolio :React.FC= () => {
    return (
        <div className={'flex flex-col space-y-8 text-black bg-blue-300 mx-auto  p-5 h-full md:h-screen md:space-y-16'}>
            <div className={'flex flex-col items-center space-y-5 justify-center mt-12 bg-gradient-to-bl from-blue-300 to-blue-400 p-5 rounded-lg md:mx-12 md:px-12 xl:mt-36 xl:mx-28 xl:px-24'}>
                <h1 className={'text-4xl lg:text-6xl font-bold text-fuchsia-950'}>Workfolio</h1>
                <p className={'text-xl text-fuchsia-900 pb-12 lg:text-2xl'}>Workfolio is a professional portfolio platform designed to help individuals showcase their work,
                    achievements, and skills in a visually appealing and organized manner. Its primary purpose is to
                    provide users with a digital space where they can present their professional journey, including
                    projects, case studies, testimonials, and other relevant accomplishments. Workfolio aims to enhance
                    personal branding by offering customizable templates and features that enable users to create a
                    unique and compelling online presence. This platform is particularly beneficial for freelancers,
                    creatives, and professionals seeking to stand out in competitive job markets. By offering a
                    centralized location for portfolio content, Workfolio helps users effectively communicate their
                    expertise and experiences to potential employers, clients, or collaborators, thereby facilitating
                    career growth and networking opportunities.
                </p>

            </div>
            <div className={'flex flex-col items-center justify-center text-xl space-y-4'}>
                <span className={'underline underline-offset-4 text-2xl text-fuchsia-950'}>for more details</span>
                <Link to={'/contact-us'}>
                    <button className={'uppercase bg-blue-400 border-2 border-fuchsia-900 p-2 px-3  rounded-lg font-bold hover:bg-fuchsia-900 hover:text-white hover:scale-90'}>contact us</button>
                </Link>
            </div>

        </div>
    )
 };
 export default WorkFolio;