import React, {} from 'react';
import ERParr from './erp.ts';

const ErpFeatures :React.FC = () => {
    // console.log('hello', ERParr);
    // const [showDetail, setShowDetail] = useState(false);
    // const handleShoeDetail = () =>{
    //     setShowDetail(!showDetail);
    // };
    return (
        <>
            <div className={'flex pt-12 flex-col px-4 '}>
                <div className={'flex flex-col py-12 gap-y-8 bg-blue-300 rounded-lg p-5 md:grid md:max-xl:gap-8 md:gap-y-16 md:max-lg:grid-cols-2 lg:grid-cols-3 xl:gap-12 shadow-2xl shadow-blue-500'}>
                  {ERParr.map((feature, i) =>
                    <div key={i} className={'flex bg-blue-100 p-3 items-center justify-center  rounded-lg border-2 border-blue-300 hover:scale-90 ease-in-out duration-700 '}>
                        <h1 className={'text-2xl font-bold'}>{feature.ERP_feature}</h1>
                    </div>
                  )}
                </div>
            </div>
        </>
    )
};
export default ErpFeatures;