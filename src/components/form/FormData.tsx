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
                to_name: 'chandan chaudhary',
                message:inputs.message,
            }
        };
        try {
            const mailData = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data);
            console.log(mailData.data);
            if( mailData.data === "OK") {
                alert("Email sent successfully.");
            }
        }catch(err) {
            console.log(err);
        }

        setLoading(false);

    };
        // console.log(inputs);
    return(
        <div className={'flex flex-row  text-black bg-blue-400 p-24 h-screen'}>
            <img src={formImg} alt={'form'} className={'w-6/12 '}/>
            <div
                className={'flex flex-col items-center text-black ml-24 py-32 w-full h-fit space-y-12 rounded-lg bg-blue-200'}>
                <span className={'text-4xl font-semibold underline underline-offset-8 '}>Lets Contact</span>
                <form className={'flex flex-col space-y-3 text-black w-96 '} onSubmit={handleFormData}>
                    <div className={'flex flex-col'}>
                        <label htmlFor='name' className={'text-xl uppercase '}>Name</label>
                        <input type="text" name={'name'} placeholder={'Your name'} value={inputs.name}
                               className={'bg-gray-100 rounded-lg  pl-2 outline-none py-2'}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                   ...inputs,
                                   name: e.target.value
                               })}/>
                    </div>
                    <div className={'flex flex-col'}>
                        <label htmlFor={'email'} className={'text-xl uppercase'}>Email</label>
                        <input type="email" name={'email'} placeholder={'Your email'} value={inputs.email}
                               className={'bg-gray-100 rounded-lg  pl-2 outline-none py-2'}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                   ...inputs,
                                   email: e.target.value
                               })}/>
                    </div>
                    <div className={'flex flex-col'}>
                        <label htmlFor={'phone'} className={'text-xl uppercase'}>Phone</label>
                        <input type="string" name={'phone'} value={inputs.phone} min={'10'} placeholder={'Your contact'}
                               className={'bg-gray-100 rounded-lg  pl-2 outline-none py-2'}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputs({
                                   ...inputs,
                                   phone: e.target.value
                               })}/>
                    </div>
                    <div className={'flex flex-col'}>
                        <label htmlFor={'message'} className={'text-xl uppercase'}>Message</label>
                        <textarea  name={'message'} value={inputs.message} placeholder={'Your contact'}
                               className={'bg-gray-100 rounded-lg  pl-2 outline-none py-2 h-32'}
                               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputs({
                                   ...inputs,
                                   message: e.target.value
                               })}/>
                    </div>
                    {loading ? <span className="loading loading-dots loading-lg ml-52"></span> : <button
                        className={'p-2 rounded-full uppercase bg-purple-300 font-bold text-xl border-2 border-purple-500 w-44 ml-28'}>send
                    </button>}
                </form>

            </div>
        </div>
    )
};
export default FormData;