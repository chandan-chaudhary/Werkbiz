

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
        feature: 'Web Development'  ,
        featureDesc: ' Web development involves creating websites or web applications that users can access through the internet. It encompasses frontend development, where the user interface is designed using languages like HTML, CSS, and JavaScript, and backend development, which involves server-side scripting, databases, and server management to ensure the website functions properly.',
        featureImage: webImg,
    },
    {
        feature: ' MobileApp Development',
        featureDesc: ' Mobile development focuses on creating applications specifically tailored for mobile devices such as smartphones and tablets. It involves designing, building, and deploying software applications that can run on mobile operating systems like iOS (used by Apple devices) or Android (used by devices from various manufacturers).',
        featureImage: appImg,
    },{
        feature: 'Embedded Systems Development  ',
        featureDesc: ' Embedded system development involves creating systems that are embedded within larger devices to control their operation. These systems often have specific functions and are designed to operate within constraints like limited processing power, memory, and energy consumption. Engineers',
        featureImage: systemImg,
    },{
        feature: 'API Development',
        featureDesc: ' API (Application Programming Interface) development involves designing and building interfaces that allow different software applications to communicate and interact with each other. APIs define the methods and protocols that developers can use to access and integrate with the functionality of other software components or services.',
        featureImage: apiImg,
    },
];

export default softwareSolution;
