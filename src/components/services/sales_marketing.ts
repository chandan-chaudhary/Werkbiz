
import coustomerImg from '../../assets/services/sales/traning.png';
import merchantImg from '../../assets/services/sales/traning.png';
import audit_surveyImg from  '../../assets/services/sales/traning.png';
import vendorImg from  '../../assets/services/sales/traning.png';
import btlImg from  '../../assets/services/sales/traning.png';
import emailSocialImg from  '../../assets/services/sales/traning.png';


interface SalesMarketing {
    feature: string,
    featureDesc: string,
    featureImage: string,
}


const salesMarketing: SalesMarketing[] = [
    {
        feature:'Customer Acquisition ',
        featureDesc: ' We specialize in acquiring new customers through effective strategies, leveraging data-driven insights to expand your customer base.',
        featureImage: coustomerImg ,
    },
    {
        feature:'Merchant Onboarding',
        featureDesc: ' Our seamless onboarding process ensures smooth integration of merchants, providing them with the necessary tools and support for success.',
        featureImage: merchantImg ,
    },   {
        feature:'Audits and Surveys',
        featureDesc: 'We conduct thorough audits and surveys to evaluate performance, identify areas for improvement, and provide actionable recommendations.',
        featureImage: audit_surveyImg ,
    },   {
        feature:'Vendor & Merchant Diligence',
        featureDesc: 'Our rigorous diligence process helps you select reliable vendors and merchants, mitigating risks and ensuring business continuity.',
        featureImage: vendorImg ,
    },   {
        feature:' BTL Marketing',
        featureDesc: ' We create impactful below-the-line marketing campaigns to reach your target audience directly, driving engagement and conversions',
        featureImage: btlImg ,
    },   {
        feature:'Email & Social Media Marketing',
        featureDesc: 'Leverage the power of email and social media with our expert-crafted campaigns to build brand awareness and nurture customer relationships.',
        featureImage: emailSocialImg ,
    },
];

export default salesMarketing;