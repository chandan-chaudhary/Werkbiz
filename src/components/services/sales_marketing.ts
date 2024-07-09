
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
        feature:'Customer Acqusition ',
        featureDesc: ' Web development involves creating websites or web applications that users can access through the internet. It encompasses frontend development, where the user interface is designed using languages like HTML, CSS, and JavaScript, and backend development, which involves server-side scripting, databases, and server management to ensure the website functions properly.',
        featureImage: img1 ,
    },
    {
        feature:'Merchant ',
        featureDesc: ' Mobile development focuses on creating applications specifically tailored for mobile devices such as smartphones and tablets. It involves designing, building, and deploying software applications that can run on mobile operating systems like iOS (used by Apple devices) or Android (used by devices from various manufacturers).',
        featureImage: img2 ,
    },   {
        feature:'Audit and survey ',
        featureDesc: ' Embedded system development involves creating systems that are embedded within larger devices to control their operation. These systems often have specific functions and are designed to operate within constraints like limited processing power, memory, and energy consumption. Engineers',
        featureImage: img3 ,
    },   {
        feature:'Vendor & Merchant Deligence ',
        featureDesc: ' Embedded system development involves creating systems that are embedded within larger devices to control their operation. These systems often have specific functions and are designed to operate within constraints like limited processing power, memory, and energy consumption. Engineers',
        featureImage: img1 ,
    },   {
        feature:' BTL',
        featureDesc: ' Embedded system development involves creating systems that are embedded within larger devices to control their operation. These systems often have specific functions and are designed to operate within constraints like limited processing power, memory, and energy consumption. Engineers',
        featureImage: img4 ,
    },   {
        feature:'Email & Social Media Marketing ',
        featureDesc: ' Embedded system development involves creating systems that are embedded within larger devices to control their operation. These systems often have specific functions and are designed to operate within constraints like limited processing power, memory, and energy consumption. Engineers',
        featureImage: img5 ,
    },
];

export default salesMarketing;