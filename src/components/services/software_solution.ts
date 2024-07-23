

import webImg from '../../assets/services/software-solution/web-dev.png';
import appImg from '../../assets/services/software-solution/app-dev.png';
import systemImg from '../../assets/services/software-solution/system-dev.png';
import apiImg from '../../assets/services/software-solution/api-dev.png';


interface SoftwareSolProps {
    feature:string,
    featureDesc: string,
    featureImage: string,
}

const softwareSolution: SoftwareSolProps[] = [
    {
        feature: 'Website Development'  ,
        featureDesc: 'We design and develop visually appealing and user-friendly websites that effectively communicate your brand message and drive conversions.',
        featureImage: webImg,
    },
    {
        feature: ' Mobile Applications',
        featureDesc: 'Create engaging mobile experiences with our custom-built apps designed to captivate your audience and enhance user engagement.',
        featureImage: appImg,
    },{
        feature: 'Software Solutions',
        featureDesc: 'Our expert team develops robust and scalable software applications to streamline your operations and drive growth.',
        featureImage: systemImg,
    },{
        feature: 'API Development',
        featureDesc: 'Our skilled developers create efficient and secure APIs to enable seamless integration and data exchange between applications.',
        featureImage: apiImg,
    },
];

export default softwareSolution;
