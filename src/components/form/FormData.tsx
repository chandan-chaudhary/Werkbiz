import React, {FormEvent, useState} from "react";
import formImg from '../../assets/formTypeImg.png';
// import emailJs from '@emailjs/browser';
import axios from "axios";
// import formImg2 from '../../assets/formType2.jpg';

// INTERFACE
interface FormDataProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// REACT FUNCTION
const FormData:React.FC =() => {
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
        <div className={'flex  text-black bg-blue-400  h-screen px-8 md:px-0'}>
            <img src={formImg} alt={'form'} className={'sm:max-md:hidden opacity-30 '}/>
            <div className={'sm:max-lg:hidden absolute w-5/12 xl:w-6/12 p-3 ml-12 xl:ml-24 mt-28 xl:mt-36 space-y-16 flex flex-col items-center text-blue-900 font-bold text-xl '}>
                <div className={'flex flex-col items-center justify-center space-y-4 bg-blue-200 rounded-lg bg-opacity-70 p-3'}>
                    <span className={'text-3xl'}>Our Vision</span>
                    <p>To revolutionize education management
                        through innovative technology solutions,
                        aspiring to be the foremost provider of
                        comprehensive school management
                        software services, empowering
                        educational institutions worldwide and
                        emerging as the leading Ed-tech
                        company.</p>
                </div>
                <div className={'flex flex-col items-center justify-center space-y-4 bg-blue-200 rounded-lg bg-opacity-70 p-3'}>
                    <span  className={'text-3xl'}>Our Mission</span>
                    <p>our mission is to empower educational
                        institutions with cutting-edge software
                        services, enabling them to deliver quality
                        education, nurture individual potential and
                        adapt to the evolving needs of the digital age.
                    </p>
                </div>
            </div>
            <div
                className={'md:absolute md:right-52 lg:right-24 flex flex-col items-center text-black py-12 mt-24 xl:mt-20 md:px-8 w-full  md:w-6/12 lg:w-5/12 xl:w-3/12 md:mt-36 h-fit  rounded-lg bg-blue-300 md:bg-opacity-70 mx-auto'}>
                <span className={'text-4xl font-semibold underline underline-offset-8 text-blue-900'}>Lets Contact</span>
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
                        <span className="loading loading-dots loading-lg ml-36 text-blue-600"></span>
                        :
                        <button className={'p-2 rounded-full hover:scale-75 uppercase bg-purple-300 font-bold text-xl border-2 border-purple-500 '}>send
                        </button>
                    }
                </form>
            </div>
        </div>
    )
};
export default FormData;