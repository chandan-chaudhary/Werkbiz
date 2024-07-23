import React, {forwardRef} from "react";
import {Link, Location, useLocation} from "react-router-dom";

//*** ICONS
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";

// *** IMAGES
import werkbizLogo from '../../assets/websitelogo/Werbiz.png';

// interface FooterProps {
//     aboutUsRef:React.RefObject<HTMLDivElement>
// }
interface childProp {}

// eslint-disable-next-line no-empty-pattern
const Footer= forwardRef<HTMLDivElement, childProp>(({}, ref)=>{
const location :Location = useLocation();
    // console.log(location.pathname);
    // console.log(aboutUsRef.current)
    console.log(ref);
    const scrollToSection= (elementRef: React.ForwardedRef<HTMLDivElement>) => {
            BUG
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    };
    // const Sectionreference: FooterProps ={
    //     reference: aboutUsRef,
    //
    // }
    // localStorage.setItem('sectionReference', JSON.stringify(Sectionreference));
    return(
        <div className={'flex flex-col text-black pt-24 bg-white'}>

            <div className={'flex flex-col items-center justify-center p-10 space-y-3 lg:space-y-5'}>
                {
                    (location.pathname !== '/eduWerkz' && location.pathname !== '/ofiWerkz') &&
                    <>
                        <span className={'text-4xl lg:text-5xl'}>Ready to transform your Business?</span>
                        <span className={'text-3xl text-gray-500'}>Experience the Werkbiz difference</span>
                    </>
                }
                {
                    location.pathname === '/eduWerkz' &&
                    <>
                        <span className={'text-4xl lg:text-5xl'}>Ready to transform your educational ecosystem?</span>
                        <span className={'text-3xl text-gray-500'}>Experience the EduWerkz difference</span>
                    </>
                }
                {
                    location.pathname === '/ofiWerkz' &&
                    <>
                        <span className={'text-4xl lg:text-5xl'}>Ready to transform your Office Ops?</span>
                        <span className={'text-3xl text-gray-500'}>Experience the OfiWerkz difference</span>
                    </>
                }
               <Link to={'/connect-us'}> <button
                    className={'font-bold px-5 p-4 rounded-full text-white bg-blue-500 hover:scale-90 ease-in-out duration-200 '}>Get
                    Started
               </button> </Link>
            </div>
            <footer className=" footer bg-base-200 text-base-content p-3 lg:p-10">

                <aside>
                    <img src={werkbizLogo} alt={'img'} className={'w-20'}/>
                    <p>
                        Werkbiz
                        <br/>
                        Providing reliable tech since 2023
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <div onClick={() => scrollToSection(ref)} className="link link-hover" >About us</div>
                    <a className="link link-hover" >Our Creed</a>
                    <a className="link link-hover" >Our Presence</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Products</h6>
                    <a className="link link-hover">EduWerkz</a>
                    <a className="link link-hover">OfiWerkz</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">HR Management</a>
                    <a className="link link-hover">Digital Edge</a>
                    <a className="link link-hover">Sales & Marketing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <span >Phone</span>
                    <a className="link link-hover ">{import.meta.env.VITE_CONTACT_NO}</a>
                    <a className="link link-hover ">##########</a>
                    <span>Email</span>
                    <a className="link link-hover">{import.meta.env.VITE_EMAIL_ID}</a>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-200 text-base-content p-10">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className={'text-2xl'}>
                            <GrInstagram/>
                        </a>
                        <a  className={'text-2xl '}>
                            <TfiLinkedin />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} – Werkbiz, All rights reserved</p>
                </aside>
            </footer>
        </div>
    )
});

export default Footer;