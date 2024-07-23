

import img1 from'../../assets/workfolio/workfolio1.png';
import img2 from'../../assets/workfolio/workfolio2.png';
import img3 from'../../assets/workfolio/workfolio3.png';
import img4 from'../../assets/workfolio/workfolio4.png';
import img5 from'../../assets/workfolio/workfolio5.png';

interface OfiWerkzProps {
    feature: string;
    featureDesc: string;
    featureImage: string;
}
const ofiWerkzFeatures: OfiWerkzProps[] = [
    {
        feature: 'Work Pulse',
        featureDesc:'Gain valuable insights into work patterns with Work Pulse. Monitor activity levels and identify areas for improvement, fostering focused work and efficient time management.',
        featureImage : img1
    },
    {
        feature: 'FocusView',
        featureDesc:'Promote healthy screen habits with FocusView. Periodic screenshots provide a glimpse into application usage, helping optimize workflows and ensure team members are equipped with the right tools for the task at hand.',
        featureImage :img2
    },


    {
        feature: 'TeamSync',
        featureDesc:'Strengthen remote collaboration with TeamSync. Capture login location data to gain insights into team distribution, fostering seamless communication and collaboration across diverse locations.',
        featureImage :img3
    },
    {
        feature: 'DataGuardian',
        featureDesc:'Safeguard sensitive information with DataGuardian. Monitor device IP addresses to ensure authorized access and maintain data security.',
        featureImage :img5
    },
    {
        feature: 'Performance Central',
        featureDesc: `Unify your team's progress with Performance Central. This comprehensive dashboard provides a clear overview of individual and team activity, enabling informed decisions and streamlined workflows. `,
        featureImage: img4
    }
];


export default ofiWerkzFeatures;