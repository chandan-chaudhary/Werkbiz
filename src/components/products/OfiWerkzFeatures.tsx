
import React from 'react';
import ofiWerkzFeatures from './ofiWerkz.ts';


const OfiWerkzFeatures: React.FC = () => {
    return (
        <div className={'bg-white sm:max-lg:p-10'}>
             <div
                className={'relative flex flex-col text-black text-center items-center md:px-8 lg:px-12 xl:px-24'}>
                <div className="absolute  xl:left-96 lg:right-72 md:right-40 -top-16 z-10 flex flex-col items-center gap-3 bg-gray-200 border-2 border-gray-300 rounded-2xl py-6  uppercase ">
                    <h1 className={'text-4xl font-bold underline-offset-8 text-fuchsia-950 xl:text-5xl '}>OfiWerkz Features</h1>
                    {/* <div className={' h-0.5 w-36 bg-red-300 '}></div> */}
                </div>
                {
                    ofiWerkzFeatures.map((feature, idx) =>
                        <div key={idx} className='mt-32'>
                            <div  className={`flex ${idx % 2 === 0 && 'flex-row-reverse xl:ml-96'} h-80 lg:w-8/12 text-start  border-2 drop-shadow-2xl bg-blue-50 rounded-xl hover:translate-x-1 duration-700 ease-linear`}>
                                <div className={`flex flex-col  space-y-5 sm:max-md:bg-slate-100 p-2 rounded-2xl py-5 xl:px-12`}>
                                    <h3 className={'text-xl font-bold md:text-2xl xl:text-3xl'}>
                                        {feature.feature}
                                    </h3>
                                    <p className={'text-xl xl:text-2xl text-gray-600'}> {feature.featureDesc}</p>
                                </div>
                                <img src={feature.featureImage} alt={feature.feature} className={'sm:max-md:hidden sm:max-md:absolute sm:max-md:-z-1 sm:max-md:opacity-20 opacity-70 w-7/12 md:w-6/12 xl:w-5/12 left-10'} />
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}
export default OfiWerkzFeatures;