import {forwardRef} from 'react';


// *** IMAGES
// import itDeptImg from '../../assets/ITmanagement.png';
import softwareImg from '../../assets/websitelogo/software-enterprize.png';
import profile from '../../assets/gaurdianbank/verghese(gaurdian_bank).jpeg';

// interface WerkbizEnterpriseProps {
//     ref: React.RefObject<HTMLDivElement>
// }forwardRef (( ref:React.ForwardedRef<HTMLDivElement>

interface childProp {}
const WerkbizEnterprise = forwardRef<HTMLDivElement, childProp>(({}, ref) => {
    // const aboutUsRef = useRef<HTMLAnchorElement>(null);
    console.log(ref, 'werkbizEnterprise');
   // localStorage.setItem('aboutRef', aboutUsRef);
    return(
        <div ref={ref} className={'flex flex-col bg-white text-black pb-16 items-center justify-center lg:flex-row xl:pb-36'}>
            <div className={'flex flex-col lg:space-y-8 xl:space-y-0 items-center w-fit sm:px-12'}>
                {/*<div className={'relative h-64 bg-slate-500 '}>*/}
                <img src={softwareImg} alt={'itdept-img'} className={'md:w-8/12 xl:w-4/12'}/>
                {/*</div>*/}
                <div className={'flex flex-row space-x-12'}>
                    <p className={'text-xl italic w-72'}>" We appreciate Werkbiz for their services to cater to our banking resource requirements. They are very knowledgeable when it is comes to recruitments with ethics in place at all the times. We are pleased with prompt and professional services. We wish them all the success and look forward for a fruitful association "</p>
                </div>
                <div className={'flex flex-col sm:pt-5 '}>
                    <img src={profile} alt={'profile'} className={'w-36 h-36 rounded-full '}/>
                    <span className={'text-xl font-bold italic'}>Verghese M U</span>
                    <span>General Manager, Guardian Bank</span>
                </div>
            </div>
            <div
                className={'xl:relative right-60 flex flex-col justify-center items-center space-y-5  sm:max-lg:mt-20'}>
                <h2 className={'text-3xl font-bold xl:text-4xl text-center'}>The Finest <br/>Bizness Company</h2>
                <div className={'h-0.5 w-24 bg-red-300'}></div>
                <p className={'text-xl text-gray-800 w-96 px-3 xl:text-2xl xl:px-0'}>We're a team of passionate innovators revolutionizing business services. We empower your success through a comprehensive suite of solutions, from custom software and mobile apps to strategic recruitment and user-centric design. Partner with us to unlock the full potential of your business and achieve industry-leading results.</p>
            </div>
        </div>
    )
})

export default WerkbizEnterprise;