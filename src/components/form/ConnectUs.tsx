import React, {FormEvent, useState} from "react";


import axios from "axios";
// import formImg2 from '../../assets/formType2.jpg';
// import formImg from '../../assets/websitelogo/formTypeImg.png';
// import emailJs from '@emailjs/browser';

// INTERFACE
interface FormDataProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// REACT FUNCTION
const ConnectUs:React.FC =() => {
    const [loading, setLoading] = useState<boolean>(false);
    const [inputs, setInputs] = useState<FormDataProps>({
        name:'',
        email:'',
        phone: '',
        message:''
    });

    // HANDLE FORM-DATA
    const handleFormData =async (e:FormEvent)=>{
        setLoading(true);
        e.preventDefault();
        console.log('hello',JSON.stringify(import.meta.env.VITE_EMAIL_PUBLIC_KEY));

        const data = {
            service_id :import.meta.env.VITE_EMAIL_SERVICE_ID,
            template_id : import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            user_id : import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            template_params :{
                from_name: inputs.name,
                from_phone:inputs.phone,
                from_email:inputs.email,
                to_name: 'chandan chaudhary',
                message:inputs.message,
            }
        };
        try {
            const mailData = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
            console.log(mailData.data);
            if( mailData.data === "OK") {
                alert("Email sent successfully.");
                window.location.replace('/');
            }
        }catch(err) {
            console.log(err);
        }

        setLoading(false);

    };
        // console.log(inputs);
    return(
        <div className={'relative flex text-black bg-logoPrimaryColor  h-screen px-8 md:px-0'}>
            {/*<img src={formImg} alt={'form'} className={'sm:max-md:hidden opacity-20 '}/>*/}
                <div className={'sm:max-lg:hidden flex flex-col absolute xl:left-36 xl:top-44 lg:top-36 items-center justify-center space-y-12  rounded-lg bg-opacity-70 p-12 w-6/12 text-white'}>
                    <span className={'text-5xl font-extrabold'}>The Finest Bizness Company</span>
                    <p className={'xl:text-3xl lg:text-2xl font-bold '}> We're a team of passionate innovators revolutionizing business services. We empower your success through a comprehensive suite of solutions, from custom software and mobile apps to strategic recruitment and user-centric design. Partner with us to unlock the full potential of your business and achieve industry-leading results.</p>
                </div>
                {/*<div className={'flex flex-col items-center justify-center space-y-4 bg-blue-200 rounded-lg bg-opacity-70 p-3'}>*/}
                {/*    <span  className={'text-3xl'}>Our Mission</span>*/}
                {/*    <p>our mission is to empower educational*/}
                {/*        institutions with cutting-edge software*/}
                {/*        services, enabling them to deliver quality*/}
                {/*        education, nurture individual potential and*/}
                {/*        adapt to the evolving needs of the digital age.*/}
                {/*    </p>*/}
                {/*</div>*/}
            <div
                className={'md:absolute md:right-52 lg:right-24 flex flex-col items-center  text-black py-10 mt-24 xl:mt-40 md:px-8 w-full  md:w-6/12 lg:w-5/12 xl:w-3/12 md:mt-36 h-fit  rounded-lg bg-blue-300 md:bg-opacity-70 mx-auto'}>
                <div className={'text-4xl font-semibold underline underline-offset-8 text-blue-900'}>Lets Connect</div>
                <form className={'flex flex-col space-y-3 text-black w-full mt-12 lg:space-y-7 px-5 md:px-0'} onSubmit={handleFormData}>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor='name' className={'text-xl uppercase '}>Name</label>*/}
                        <input type="text" name={'name'} placeholder={'Your name'} value={inputs.name}
                               className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2'}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                   ...inputs,
                                   name: e.target.value
                               })}/>
                    </div>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor={'email'} className={'text-xl uppercase'}>Email</label>*/}
                        <input type="email" name={'email'} placeholder={'Your email'} value={inputs.email}
                               className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2'}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                   ...inputs,
                                   email: e.target.value
                               })}/>
                    </div>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor={'phone'} className={'text-xl uppercase'}>Phone</label>*/}
                        <input type="string" name={'phone'} value={inputs.phone} min={'10'} placeholder={'Your contact'}
                               className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2'}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                   ...inputs,
                                   phone: e.target.value
                               })}/>
                    </div>
                    <div className={'flex flex-col'}>
                        {/*<label htmlFor={'message'} className={'text-xl uppercase'}>Message</label>*/}
                        <textarea  name={'message'} value={inputs.message} placeholder={'Message (if any)'}
                               className={'bg-blue-100 rounded-lg  pl-2 outline-none py-2 h-32'}
                               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputs({
                                   ...inputs,
                                   message: e.target.value
                               })}/>
                    </div>
                    {   loading ?
                        <span className="loading loading-dots loading-lg ml-36 text-logoPrimaryColor"></span>
                        :
                        <button className={'p-2 rounded-full hover:scale-75 uppercase bg-blue-900 font-bold text-xl '}>send
                        </button>
                    }
                </form>
            </div>
        </div>
    )
};
export default ConnectUs;