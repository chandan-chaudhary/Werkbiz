import React from 'react';


// *** IMAGES
// import itDeptImg from '../../assets/ITmanagement.png';
import softwareImg from '../../assets/websitelogo/software-enterprize.png';
import profile from '../../assets/websitelogo/profile.png';
const WerkbizEnterprise :React.FC = () => {
    return(
        <div className={'flex flex-col bg-white text-black pb-16 items-center justify-center lg:flex-row xl:pb-36'}>
            <div className={'flex flex-col space-y-12 lg:space-y-8 xl:space-y-0 items-center text-center w-fit sm:px-12'}>
                {/*<div className={'relative h-64 bg-slate-500 '}>*/}
                <img src={softwareImg} alt={'itdept-img'} className={'md:w-8/12 xl:w-4/12'}/>
                {/*</div>*/}
                <div className={'flex flex-row space-x-12  text-center'}>
                    <p className={'text-xl italic w-64'}>" With our complete business under control, our productivity is up in the last year that we have been using Werkbiz "</p>
                    <img src={profile} alt={'profile'} className={'w-24 h-24 mt-12 '}/>
                </div>
                <div className={'flex flex-col '}>
                    <span className={'text-xl font-bold italic'}>Author</span>
                    <span>Manager, Werkbiz</span>
                </div>

            </div>
            <div className={'xl:relative right-60 flex flex-col justify-center items-center space-y-5 mt-24 text-center lg:mr-12 xl:mr-44'}>
                <h2 className={'text-3xl font-bold xl:text-4xl'}>The Finest <br/>Bizness Company</h2>
                <div className={'h-0.5 w-24 bg-red-300'}></div>
                <p className={'text-xl text-gray-800 w-96 px-3 xl:text-2xl xl:px-0'}>We're a team of passionate innovators revolutionizing business services. We empower your success through a comprehensive suite of solutions, from custom software and mobile apps to strategic recruitment and user-centric design. Partner with us to unlock the full potential of your business and achieve industry-leading results.</p>
            </div>
        </div>
    )
}

export default WerkbizEnterprise;