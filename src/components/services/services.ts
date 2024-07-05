
import { FaPeopleRoof } from "react-icons/fa6";
import { LiaSitemapSolid } from "react-icons/lia";
import { BsAlipay } from "react-icons/bs";
import {IconType} from "react-icons";

const services :{service: string, icon:IconType} []= [
      {
            service:'HR Management',
            icon: FaPeopleRoof,
      },
      {
            service:'IT Solution',
            icon: LiaSitemapSolid,
      },
      {
            service:'Sales',
            icon: BsAlipay,
      },
]


// const Icon   = [
//       FaPeopleRoof,
//     LiaSitemapSolid,
//       BsAlipay,
// ];

export default services;