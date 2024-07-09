

import img1 from'../../assets/workfolio/workfolio1.png';
import img2 from'../../assets/workfolio/workfolio2.png';
import img3 from'../../assets/workfolio/workfolio3.png';
import img4 from'../../assets/workfolio/workfolio4.png';
import img5 from'../../assets/workfolio/workfolio5.png';

interface WorkfolioProps {
    feature: string;
    featureDesc: string;
    featureImage: string;
}
const workfolio_features: WorkfolioProps[] = [
    {
        feature: 'Monitor the apps your team uses, in realtime',
        featureDesc:'Working hard or browsing social media? Always know how your employees use their time. Track app and website usage, and overall productivity.',
        featureImage : img1
    },
    {
        feature: 'Get verified working hours for payroll',
        featureDesc:'Manual time-tracking is flawed. Track employee work time through computer activity instead. Effortless, reliable and fool proof.',
        featureImage :img2
    },


    {
        feature: 'Take recurring screenshots, upto every 1 minute',
        featureDesc:'Screenshot your employees active window recurringly, for upto every 1 minute interval. Optionally blur images for privacy.',
        featureImage :img3
    },
    {
        feature: 'Visualize employee productivity on daily timeline',
        featureDesc:'A visual log of daily activities of every employee broken down to productive time, idle time and break time.',
        featureImage :img4
    },
    {
        feature: 'Appraise your team members using their work analytics',
        featureDesc:'Realtime statistics of your employees performance ready at your finger tips. Track attendance, app usage, productivity trend and more.',
        featureImage :img5
    },
];

export default workfolio_features;