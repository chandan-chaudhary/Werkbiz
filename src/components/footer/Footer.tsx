// import { useRef } from "react";
import { Link, Location, useLocation, useNavigate } from "react-router-dom";

//*** ICONS
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";

// *** IMAGES
import werkbizLogo from '../../assets/websitelogo/Werbiz.png';

const Footer = () => {
    const navigate = useNavigate();
    const location: Location = useLocation();
    // const aboutUsRef = useRef<HTMLDivElement>(null);
    // const scrollToSection = () => {
    //     //  elementRef.current.
    //     if (aboutUsRef.current) {
    //         aboutUsRef.current.scrollIntoView({ behavior: 'smooth' })
    //         // window.scrollTo({
    //         //     top:aboutUsRef.current.offsetTop,
    //         //     behavior: 'smooth'
    //         // })
    //     }
    // };
    // console.log(location.pathname);
    // console.log(aboutUsRef.current)
    // console.log(ref);
    // const scrollToSection= (elementRef: React.ForwardedRef<HTMLDivElement>) => {
    //     //  elementRef.current.
    //     window.scrollTo({
    //         top:elementRef.current.offsetTop,
    //         behavior: 'smooth'
    //     })
    // };
    // const Sectionreference: FooterProps ={
    //     reference: aboutUsRef,
    //
    // }
    // localStorage.setItem('sectionReference', JSON.stringify(Sectionreference));
    return (
        <div className={'flex flex-col text-black pt-24 bg-white'}>

            <div className={'flex flex-col items-center justify-center p-10 space-y-3 lg:space-y-5 font-footerFontKanit'}>
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
                    <img src={werkbizLogo} alt={'img'} className={'w-20'} />
                    <p>
                        Werkbiz
                        <br />
                        The Finest Bizness Company
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={"#about-us"} >
                        <div className="link link-hover" >About us</div>
                    </Link>
                    <Link to={"#our-creed"} >
                        <a className="link link-hover" >Our Creed</a>
                    </Link>
                    <Link to={"#our-presence"} >
                        <a className="link link-hover" >Our Presence</a>
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Products</h6>
                    <a onClick={() => navigate('/eduWerkz')} className="link link-hover">EduWerkz</a>
                    <a onClick={() => navigate('/ofiWerkz')} className="link link-hover">OfiWerkz</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a onClick={() => navigate('/hr-management')} className="link link-hover">HR Management</a>
                    <a onClick={() => navigate('/digital-edge')} className="link link-hover">Digital Edge</a>
                    <a onClick={() => navigate('/sales-marketing')} className="link link-hover">Sales & Marketing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <span >Phone</span>
                    <a className="link link-hover ">{import.meta.env.VITE_CONTACT_NO_ONE}</a>
                    <a className="link link-hover ">{import.meta.env.VITE_CONTACT_NO_TWO}</a>
                    <span>Email</span>
                    <a className="link link-hover">{import.meta.env.VITE_EMAIL_ID}</a>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-200 text-base-content p-10">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.instagram.com/werkbiz?igsh=d2VkZzFrMW8xYnNk" target="_blank" className={'text-2xl'}>
                            <GrInstagram />
                        </a>
                        <a href='https://www.linkedin.com/company/werkbiz/' target="_blank" className={'text-2xl '}>
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
};

export default Footer;