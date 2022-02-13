import React from 'react';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import pic from '../../images/pic.png';


function FirstSection() {
    const screen1270 = useMediaQuery('(max-width:1270px)');
    const screen1000 = useMediaQuery('(max-width:1000px)');
    const screen900 = useMediaQuery('(max-width:900px)');
    const screen800 = useMediaQuery('(max-width:800px)');
    const screen700 = useMediaQuery('(max-width:700px)');
    //MOBILE-SCREEN
    const screen410 = useMediaQuery('(max-width:410px)');
    const screen340 = useMediaQuery('(max-width:340px)');
    const screen280 = useMediaQuery('(max-width:280px)');


    return (
        <div className={`w-[100%] h-[100%] pr-14 pl-14 flex items-center pb-10 ml-12 mt-[48rem] ${screen700&&`flex-col`}`}>

            <div className={`${!screen700?`w-[50%] ml-[-0.65rem]`:`w-[100%]`} pb-5`}>
                <p className={`
                    text-center font-bold tracking-wide fontFam
                    ${!screen280?(!screen340?(!screen410?(!screen700?(!screen800?(!screen900?(!screen1000?(screen1270?`text-[7rem]`:`text-9xl`):`text-[6.5em]`):`text-[6rem]`):`text-[5.75rem]`):`text-[6.95rem] ml-[-2.1rem]`):`text-[5.95rem] ml-[-2.3rem]`):`text-[4.75rem] ml-[-3rem]`):`text-[4.25rem] ml-[-3rem]`}
                `}>
                    Dragon
                </p>

                <p className={`
                    text-center  mt-7 tracking-wide fontFam
                    ${screen1270&&`mt-[-0.2rem]`}
                    ${!screen800?`text-lg`:`text-md`}
                    ${screen700&&`hidden`}
                `}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta consequatur dolor saepe minus quas ab temporibus maxime enim officiis, amet architecto quis, excepturi nostrum. Quam odit repudiandae totam velit.
                </p>
            </div>


            <div className={`${!screen700?`w-[50%]`:`w-[100%] ml-[-2rem]`} flex justify-center`}>
                <img
                    src={pic}
                    alt="Dragon"
                    className={`rounded-lg ${!screen280?(!screen340?(!screen410?(!screen700?(!screen800?(screen1000?`w-[23.5rem] h-[27.5rem]`:`w-[25rem] h-[29rem]`):`w-[22rem] h-[26rem]`):`w-[22rem] h-[26rem]`):`w-[19rem] h-[24rem] ml-[-0.9rem]`):`w-[18rem] h-[24rem] ml-[-0.925rem]`):`w-[20rem] h-[26rem] ml-[-0.525rem]`}`}
                />
            </div>

        </div>
    )
}

export default FirstSection;