import React from "react";

// *** IMAGES
import hr_img2 from '../../assets/services/hr-img2.png';
import hireImg from '../../assets/services/hiring.png'
import trainingImg from '../../assets/services/traning.png';


const HRSpecification :React.FC = () =>{
    return(
        <div
            className={'relative flex flex-col items-center justify-center text-black  py-12 space-y-12 bg-blue-100 pt-24 lg:space-y-20'}>
            <div
                className={'absolute -top-8 text-2xl font-bold uppercase bg-gray-200 rounded-lg p-8 mx-12 z-20 mb-24 bg-gradient-to-bl from-fuchsia-100 to-blue-400 text-fuchsia-950 lg:text-4xl'}>
                <span>Human Resource Specifications</span>
            </div>
            <div
                className={'relative bg-blue-300 flex flex-col rounded-lg py-3 font-semibold justify-center space-y-6 items-center mx-12 text-fuchsia-950 px-12 shadow-2xl shadow-blue-300 border-b-4 border-blue-700 mt-72'}>
                <span className={'text-4xl font-bold uppercase'}>
                    payroll
                </span>
                <p className={'text-xl'}>payroll refers to the process of compensating employees for their work. This
                    involves a range of
                    activities that ensure employees are paid accurately and on time, while also complying with legal
                    and regulatory requirements.</p>
                <ul className={'grid grid-cols-2 text-xl gap-x-24 font-bold'} style={{listStyleType: 'disc'}}>
                    <li>Calculating Wages and Salaries</li>
                    <li>Employee Benefits Management</li>
                    <li>Deductions and Withholdings</li>
                    <li>Compliance</li>
                </ul>
                <img src={hr_img2} alt={'hr_img'} className={'w-96  absolute opacity-15 z-0'}/>

            </div>
            <div
                className={'relative bg-blue-300 flex flex-col rounded-lg py-3 font-semibold justify-center space-y-6 items-center mx-12 text-fuchsia-950 px-12 shadow-2xl shadow-blue-300 border-b-4 border-blue-700'}>
                <span className={'text-4xl font-bold uppercase'}>
                    Recruitment
                </span>
                <p className={'text-xl'}>Recruitment are process of identifying, attracting, evaluating, and selecting
                    qualified candidates for a job within an organization. It is a crucial function that aims to ensure
                    the right people are hired for the right positions at the right time.</p>
                <ul className={'grid grid-cols-2 text-xl gap-x-24 font-bold'} style={{listStyleType: 'disc'}}>
                    <li>Identifying Job Requirements</li>
                    <li>Job Posting and Advertising</li>
                    <li>Candidate Sourcing</li>
                    <li>Screening and Shortlisting</li>
                </ul>
                <img src={hireImg} alt={'hr_img'} className={'w-96  absolute opacity-10 z-0'}/>
            </div>
            <div
                className={'relative bg-blue-300 flex flex-col rounded-lg py-3 font-semibold justify-center space-y-6 items-center mx-12 text-fuchsia-950 px-12 shadow-2xl shadow-blue-300 border-b-4 border-blue-700'}>
                <span className={'text-4xl font-bold uppercase'}>
                    Training
                </span>
                <p className={'text-xl'}>
                    Training refers to the process of equipping HR professionals with the knowledge,
                    skills, and competencies necessary to effectively perform their roles within an organization. It
                    encompasses a variety of activities aimed at developing HR professionals at different stages of
                    their careers</p>
                <ul className={'grid grid-cols-2 text-xl gap-x-20 font-bold'} style={{listStyleType: 'disc'}}>
                    <li>Basic HR Skills</li>
                    <li>Compliance and Legal Training</li>
                    <li>Ethics and Diversity Training</li>
                    <li>Leadership and Management Skills</li>
                </ul>
                <img src={trainingImg} alt={'hr_img'} className={'w-96 absolute opacity-10 z-0'}/>
            </div>
            <div
                className={'relative bg-blue-300 flex flex-col rounded-lg py-3 font-semibold justify-center space-y-6 items-center mx-12 text-fuchsia-950 px-12 shadow-2xl shadow-blue-300 border-b-4 border-blue-700'}>
                <span className={'text-4xl font-bold uppercase'}>
                    Background verification
                </span>
                <p className={'text-xl'}>
                    Background verification are process of verifying the credentials, qualifications, work experience, and other relevant details of a job applicant or an employee. This process is crucial for employers to ensure they are hiring trustworthy and qualified individuals.</p>
                <ul className={'grid grid-cols-2 text-xl gap-x-20 font-bold'} style={{listStyleType: 'disc'}}>
                    <li>Verification Checks</li>
                    <li>Legal Considerations</li>
                    <li>Confidentiality</li>
                    <li>Candidate Notification</li>
                </ul>
                <img src={trainingImg} alt={'hr_img'} className={'w-96 absolute opacity-10 z-0'}/>
            </div>
        </div>
    )
};
export default HRSpecification;
