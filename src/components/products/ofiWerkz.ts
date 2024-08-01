

import workpluseImg from'../../assets/products/ofiwerkz/workpluse.png';
import focusviewImg from'../../assets/products/ofiwerkz/focusview.png';
import teamsyncViewImg from'../../assets/products/ofiwerkz/teamviewsync.png';
import performanceImg from'../../assets/products/ofiwerkz/performance.png';
import dataGaurdianImg from'../../assets/products/ofiwerkz/dataGaurdian.png';

interface OfiWerkzProps {
    feature: string;
    featureDesc: string;
    featureImage: string;
}
const ofiWerkzFeatures: OfiWerkzProps[] = [
    {
        feature: 'Work Pulse',
        featureDesc:'Gain valuable insights into work patterns with Work Pulse. Monitor activity levels and identify areas for improvement, fostering focused work and efficient time management.',
        featureImage : workpluseImg
    },
    {
        feature: 'FocusView',
        featureDesc:'Promote healthy screen habits with FocusView. Periodic screenshots provide a glimpse into application usage, helping optimize workflows and ensure team members are equipped with the right tools for the task at hand.',
        featureImage :focusviewImg
    },


    {
        feature: 'TeamSync',
        featureDesc:'Strengthen remote collaboration with TeamSync. Capture login location data to gain insights into team distribution, fostering seamless communication and collaboration across diverse locations.',
        featureImage :teamsyncViewImg
    },
    {
        feature: 'DataGuardian',
        featureDesc:'Safeguard sensitive information with DataGuardian. Monitor device IP addresses to ensure authorized access and maintain data security.',
        featureImage :dataGaurdianImg
    },
    {
        feature: 'Performance Central',
        featureDesc: `Unify your team's progress with Performance Central. This comprehensive dashboard provides a clear overview of individual and team activity, enabling informed decisions and streamlined workflows. `,
        featureImage: performanceImg
    }
];


export default ofiWerkzFeatures;