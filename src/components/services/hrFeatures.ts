

import hr_img2 from '../../assets/services/hr-img2.png';
import hireImg from '../../assets/services/hiring.png'
import trainingImg from '../../assets/services/traning.png';


interface HrFeatures{
    feature:string,
    featureDesc: string,
    featureImage: string,
}
const hr_feature : HrFeatures[] = [
    {
        feature:'payroll',
        featureDesc: 'payroll refers to the process of compensating employees for their work. This involves a range of activities that ensure employees are paid accurately and on time, while also complying with legal and regulatory requirements.',
        featureImage: hr_img2,
    },

    {
        feature:'Recruitment',
        featureDesc: 'Recruitment are process of identifying, attracting, evaluating, and selecting qualified candidates for a job within an organization. It is a crucial function that aims to ensure the right people are hired for the right positions at the right time.',
        featureImage: hireImg,
    },

    {
        feature:'Training',
        featureDesc: 'Training refers to the process of equipping HR professionals with the knowledge, skills, and competencies necessary to effectively perform their roles within an organization. It encompasses a variety of activities aimed at developing HR professionals at different stages of their careers',
        featureImage: trainingImg,
    },

    {
        feature:'Background verification',
        featureDesc: ' Background verification are process of verifying the credentials, qualifications, work experience, and other relevant details of a job applicant or an employee. This process is crucial for employers to ensure they are hiring trustworthy and qualified individuals.',
        featureImage: trainingImg,
    },
];

export default hr_feature;