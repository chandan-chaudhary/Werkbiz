import React from 'react';
import {useNavigate} from "react-router-dom";
import {LiaPhoenixFramework} from "react-icons/lia";
import {SiStudyverse} from "react-icons/si";
// import {TbStackPush} from "react-icons/tb";
// import {MdKeyboardArrowRight} from "react-icons/md";
// import {Link} from "react-router-dom";



const Feature:React.FC =()=>{
    const navigate = useNavigate();
    const handleErp =()=> {
        navigate('/eduWerkz')
    }
    const handleWorkfolio =()=> {
       navigate('/ofiWerkz')
    }
    return(
        <div
            className={'absolute top-24 left-16 flex flex-col space-y-4 text-black  rounded-lg  border-b-4 border-x-2 border-gray-300 p-5 mt-2 bg-white shadow-2xl shadow-blue-300 z-10'}>
            <div  onClick={handleErp} className={'cursor-pointer flex flex-row items-center space-x-4 hover:bg-blue-200 py-4 px-8 rounded-lg hover:scale-90 ease-in duration-300'}>
                <SiStudyverse className={'text-4xl text-blue-600'}/>
                {/*<Link to={'/erp'}>*/}
                    <div className={' flex flex-col'}>
                        <span className={'font-bold'}>EduWerkz</span>
                    </div>
                {/*</Link>*/}
                {/*<span className={'text-xl  absolute right-10'}> <MdKeyboardArrowRight/></span>*/}
            </div>
            <div onClick={handleWorkfolio}
                 className={'cursor-pointer flex flex-row items-center space-x-5 hover:bg-blue-200 py-4 px-8 rounded-lg hover:scale-90 ease-in duration-300'}>

                <LiaPhoenixFramework className={'text-4xl text-red-600'}/>
                {/*<Link to={'/workfolio'}>*/}
                    <div className={' flex flex-col'}>
                        <span className={'font-bold'}>OfiWerkz</span>
                        {/*<span className={''}>Academics related website</span>*/}
                    </div>
                {/*</Link>*/}
                {/*<span className={'text-xl  absolute right-10'}> <MdKeyboardArrowRight/></span>*/}
            </div>
        </div>
    )
};
export default Feature;