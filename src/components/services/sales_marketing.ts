
import img1 from'../../assets/workfolio/workfolio1.png';
import img2 from'../../assets/workfolio/workfolio2.png';
import img3 from'../../assets/workfolio/workfolio3.png';
import img4 from'../../assets/workfolio/workfolio4.png';
import img5 from'../../assets/workfolio/workfolio5.png';

interface SalesMarketing {
    feature: string,
    featureDesc: string,
    featureImage: string,
}


const salesMarketing: SalesMarketing[] = [
    {
        feature:'Customer Acquisition ',
        featureDesc: ' We specialize in acquiring new customers through effective strategies, leveraging data-driven insights to expand your customer base.',
        featureImage: img1 ,
    },
    {
        feature:'Merchant Onboarding',
        featureDesc: ' Our seamless onboarding process ensures smooth integration of merchants, providing them with the necessary tools and support for success.',
        featureImage: img2 ,
    },   {
        feature:'Audits and Surveys',
        featureDesc: 'We conduct thorough audits and surveys to evaluate performance, identify areas for improvement, and provide actionable recommendations.',
        featureImage: img3 ,
    },   {
        feature:'Vendor & Merchant Diligence',
        featureDesc: 'Our rigorous diligence process helps you select reliable vendors and merchants, mitigating risks and ensuring business continuity.',
        featureImage: img1 ,
    },   {
        feature:' BTL Marketing',
        featureDesc: ' We create impactful below-the-line marketing campaigns to reach your target audience directly, driving engagement and conversions',
        featureImage: img4 ,
    },   {
        feature:'Email & Social Media Marketing',
        featureDesc: 'Leverage the power of email and social media with our expert-crafted campaigns to build brand awareness and nurture customer relationships.',
        featureImage: img5 ,
    },
];

export default salesMarketing;