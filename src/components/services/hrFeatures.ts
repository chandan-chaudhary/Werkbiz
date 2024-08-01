

import payrollImmg from '../../assets/services/hr/payroll.png';
import recruitmentImg from '../../assets/services/hr/recuitment.png';
import trainingImg from '../../assets/services/hr/training.png';
import backgroundImg from '../../assets/services/hr/backgroundVerification.png';



interface HrFeatures{
    feature:string,
    featureDesc: string,
    featureImage: string,
}
const hr_feature : HrFeatures[] = [
    {
        feature:'Payroll',
        featureDesc: 'Our payroll services ensure accurate and timely compensation for your employees, while maintaining regulatory compliance.',
        featureImage: payrollImmg,
    },

    {
        feature:'Recruitment',
        featureDesc: 'We provide comprehensive recruitment solutions to help you find and hire the best talent for your organization.',
        featureImage: recruitmentImg,
    },

    {
        feature:'Training & Development',
        featureDesc: 'Empower your workforce through our customized training programs, fostering growth and enhancing employee performance.',
        featureImage: trainingImg,
    },

    {
        feature:'Background Verification',
        featureDesc: 'Mitigate risks with our thorough background verification services, providing you with peace of mind and confidence.',
        featureImage: backgroundImg,
    },
];

export default hr_feature;