
import React from 'react';
import ofiWerkzFeatures from './ofiWerkz.ts';


const OfiWerkzFeatures: React.FC = () => {
    return (
        <div className={'bg-gray-100 p-10'}>
            <div
                className={'flex flex-col text-black items-center space-y-16 xl:space-y-16 md:space-y-28 text-center px-4 md:px-8 lg:px-12 xl:px-24'}>
                <div className='z-10 flex flex-col items-center gap-2 mb-24 border-2 border-gray-400 bg-gray-200 uppercase rounded-lg py-6 md:px-8 px-4 -mt-16'>
                    <h1 className={'text-2xl md:text-4xl font-bold underline-offset-8  text-fuchsia-950 xl:text-5xl'}>OfiWerkz Features</h1>
                    {/* <div className={' h-0.5 w-36 bg-red-300 '}></div> */}
                </div>
                {
                    ofiWerkzFeatures.map((feature, idx) =>
                        <div key={idx} className='mt-32'>
                            <div className={`flex sm:max-md:flex-col ${idx % 2 === 0 && 'flex-row-reverse xl:ml-96'} md:h-80 xl:w-8/12 sm:max-md:text-center items-center text-start  border-2 drop-shadow-2xl bg-blue-50 rounded-xl hover:translate-x-1 duration-700 ease-linear`}>
                                <div className={`flex flex-col  space-y-5 sm:max-md:bg-slate-100 p-2 rounded-2xl py-5 xl:px-12`}>
                                    <h3 className={'text-xl font-bold md:text-2xl xl:text-3xl'}>
                                        {feature.feature}
                                    </h3>
                                    <p className={'text-xl xl:text-2xl text-gray-600'}> {feature.featureDesc}</p>
                                </div>
                                <img src={feature.featureImage} alt={feature.feature} className={' opacity-80 w-7/12 md:w-6/12 xl:w-5/12 left-10'} />
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}
export default OfiWerkzFeatures;