
import { SiWebauthn } from "react-icons/si";
import { TbDeviceMobileStar } from "react-icons/tb";
import { GrVirtualMachine } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRoute } from "react-icons/fa";
import { CgTally } from "react-icons/cg";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { PiWhatsappLogoBold } from "react-icons/pi";

import {IconType} from "react-icons";


const eduWerkzFeatures: {eduWerkz_feature:string, feature_desciption:string, feature_icon:IconType}[] =[
    {
        eduWerkz_feature:'ConnectED',
        feature_desciption: ' Foster seamless communication among teachers, staff, parents, and students with real-time announcements, assignments, and updates.',
        feature_icon: SiWebauthn,
    },
    {
        eduWerkz_feature: 'Exam Ace',
        feature_desciption: 'Stay organized with the Exam Ace module. Manage timetables, share announcements, and access vital exam information effortlessly.',
        feature_icon: TbDeviceMobileStar,
    },
    {
        eduWerkz_feature: 'EduProfile',
        feature_desciption: 'Maintain comprehensive profiles for staff and students. Track academic progress, contact information, and relevant data all in one place.',
        feature_icon: GrVirtualMachine,
    },
    {
        eduWerkz_feature: 'Visual Planner',
        feature_desciption: 'Visual Planner keeps everyone on track. Access personalized timetables, manage schedules, and stay organized with ease. ',
        feature_icon: FaRoute,
    },
    {
        eduWerkz_feature: 'Homework Hub',
        feature_desciption: ' Streamline homework assignments with the Homework Hub. Create, share, and track assignments electronically, fostering a collaborative learning environment.',
        feature_icon: CgTally,

    },
    {
        eduWerkz_feature: 'FeeXpress',
        feature_desciption: ' Simplify fee management with FeeXpress. Facilitate online payments, track fee status, and ensure timely collections effortlessly. ',
        feature_icon: SiAmazonsimpleemailservice,
    },
    {
        eduWerkz_feature: 'SafeTrack',
        feature_desciption: ' Ensure student safety and peace of mind with SafeTrack. Track buses and hostels, providing location updates and fostering a secure environment.',
        feature_icon: PiWhatsappLogoBold,
    },
    {
        eduWerkz_feature: 'BookSmart',
        feature_desciption: ' Manage your school library efficiently with BookSmart. Track book inventory, facilitate student borrowing, and streamline library operations.',
        feature_icon: RiSecurePaymentFill,
    },

];

export default eduWerkzFeatures;