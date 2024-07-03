import React, {useState} from 'react';
import ERParr from '../../utils/erp.ts';

const ErpFeatures :React.FC = () => {
    // console.log('hello', ERParr);
    const [showDetail, setShowDetail] = useState(false);
    const handleShoeDetail = () =>{
        setShowDetail(!showDetail);
    };
    return (
        <div className={'flex flex-col space-y-5'}>
          {ERParr.map((feature, i) =>
            <div onClick={handleShoeDetail} key={i} className={'flex flex-col bg-blue-100 m-2 p-5 space-y-4 rounded-lg border-2 border-blue-300'}>
                <h1 className={'text-2xl font-bold'}>{feature.ERP_feature}</h1>
                <p className={`text-xl ${!showDetail && 'hidden'}`}>{feature.about_ERPFeature}</p>
            </div>
          )}
        </div>
    )
};
export default ErpFeatures;