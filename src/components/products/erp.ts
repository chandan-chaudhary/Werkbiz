
import { SiWebauthn } from "react-icons/si";
import { TbDeviceMobileStar } from "react-icons/tb";
import { GrVirtualMachine } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRoute } from "react-icons/fa";
import { CgTally } from "react-icons/cg";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { PiWhatsappLogoBold } from "react-icons/pi";

import {IconType} from "react-icons";


const erpFeatures: {ERP_feature:string, feature_icon:IconType}[] =[
    {
        ERP_feature:'Biometric integration',
        feature_icon: SiWebauthn,
    },
    {
        ERP_feature: 'Mobile Application',
        feature_icon: TbDeviceMobileStar,
    },

    {
        ERP_feature: 'Virtual  Class',
        feature_icon: GrVirtualMachine,
    },

    {
        ERP_feature: 'Online Payment Gateway',
        feature_icon: RiSecurePaymentFill,
    },
    {
        ERP_feature: 'Vehicle Tracking System',
        feature_icon: FaRoute,
    },
    {
        ERP_feature: 'Tally Integration',
        feature_icon: CgTally,

    },
    {
        ERP_feature: 'SMA, Email & Voice call',
        feature_icon: SiAmazonsimpleemailservice,
    },
    {
        ERP_feature: 'Bulk WhatsApp Integration',
        feature_icon: PiWhatsappLogoBold,
    },

];

export default erpFeatures;