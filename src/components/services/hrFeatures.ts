

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
        feature:'Payroll',
        featureDesc: 'Our payroll services ensure accurate and timely compensation for your employees, while maintaining regulatory compliance.',
        featureImage: hr_img2,
    },

    {
        feature:'Recruitment',
        featureDesc: 'We provide comprehensive recruitment solutions to help you find and hire the best talent for your organization.',
        featureImage: hireImg,
    },

    {
        feature:'Training & Development',
        featureDesc: 'Empower your workforce through our customized training programs, fostering growth and enhancing employee performance.',
        featureImage: trainingImg,
    },

    {
        feature:'Background Verification',
        featureDesc: 'Mitigate risks with our thorough background verification services, providing you with peace of mind and confidence.',
        featureImage: trainingImg,
    },
];

export default hr_feature;