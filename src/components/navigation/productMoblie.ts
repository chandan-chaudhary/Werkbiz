import {SiStudyverse} from "react-icons/si";
import {LiaPhoenixFramework} from "react-icons/lia";

import {IconType} from "react-icons";

interface productMoblieProps {
    product: string,
     productImg: IconType
}

const productMoblie: productMoblieProps[] =[
    {
       product: 'EduWerkz',
       productImg: SiStudyverse
    },
    {
       product: 'OfiWerkz',
        productImg: LiaPhoenixFramework
    }
];
export default productMoblie;