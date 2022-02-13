import React from 'react';
import data from '../../utils/data';
//COMPONENTS
import ThirdSection from '../ThirdSection';
//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
//IMAGES
import { pic1, pic2, pic3, pic4, curvered1, curveblue } from '../../images';


function SecondSection() {
    const screen1270 = useMediaQuery('(max-width:1270px)');
    const screen1000 = useMediaQuery('(max-width:1000px)');
    const screen980 = useMediaQuery('(max-width:980px)');
    const screen900 = useMediaQuery('(max-width:900px)');
    //MOBILE-SCREEN
    const screen700 = useMediaQuery('(max-width:700px)');
    const screen395 = useMediaQuery('(max-width:395px)');
    const screen350 = useMediaQuery('(max-width:350px)');
    const screen320 = useMediaQuery('(max-width:320px)');
    const screen300 = useMediaQuery('(max-width:300px)');
    const screen275 = useMediaQuery('(max-width:275px)');


    return (
        <div className={`w-[100%] h-[100%] flex flex-col ${!screen350?(!screen700?(!screen900?(screen1000?`ml-14`:``):`ml-[2.85rem]`):`ml-[-2.4rem]`):`ml-[-2.7rem]`}`}>

            <Typography
                className={`
                    ${screen300?`!text-[1.685rem] !leading-[2.025rem]`:`!text-3xl`} !font-bold !tracking-wider text-center fontFam ${screen700&&(!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`)} pl-5
                    ${!screen700?(!screen900?(screen1270?`!mt-36`:`!mt-40`):`!mt-32`):`!mt-6`}
                    w-full !ml-2
                `}
                style={{ wordSpacing: "0.15rem", margin: "0 auto" }}
            >
                {!screen395?`Dragons of Different Ages`:`Different Ages`}
            </Typography>
            

            <div className={`${!screen300?(screen700?`mt-[86.5rem]`:``):`mt-[90.25rem]`}`}>
                {/*side corner*/}
                <div>
                    {
                        screen700&&(
                            <div className="w-[60%] ml-48 invisible">
                                <img src={curveblue} className={`${screen320?`w-[11.95rem]`:`w-[10.95rem]`} ${screen320?`h-[10.6rem]`:`w-[10.95rem]`}`} alt="" style={{ margin: "0 auto" }}/>
                            </div>
                        )
                    }
                </div>
    
                <div className={!screen300?(!screen700?(!screen900?(screen1000?`mt-[31.65rem]`:`mt-[35em]`):`mt-[40em]`):`mt-[-58em]`):`mt-[-63rem]`}> {/*33rem for curveble*/}
                    {/*side corner*/}
                    <div className={`flex justify-start w-[76rem] ${screen900?`ml-[22rem]`:`ml-[13rem]`} invisible`}>
                        <img src={curveblue} className={`${screen700&&`invisible`} ${screen1000?`h-[18rem]`:`h-[14.5rem]`} ${screen1000?`w-[17.95rem]`:`w-[15.95rem]`}`} alt=""/>
                    </div>
    
    
                    <div className={`flex items-center flex-col ml-12 ${screen900?`mt-[-55.5rem]`:`mt-[-46rem]`}`}> {/*mt-[-40.5rem] for curvered*/}
    
                        <div className={`flex items-center ${screen700?`flex-col`:`flex-row`}`}>
                            <div className="flex items-center flex-col">
                                <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-6 pr-3 pl-3 pt-3.5 pb-0.5`}>
                                    <CardContent>
                                        <img src={pic1} className="w-[4.95rem] h-[4.5rem]" alt="" style={{ margin: "0 auto" }}/>
                                        <p className="font-bold text-[1rem] text-center mt-8"> Dragons are a varied group of the animals </p>
                                        <Typography className="fontFam !text-[0.895rem] text-justify !mt-3" color="text.secondary">
                                            Dragons are a varied group of animals. Birds, at over 10,700 living species, are among the most diverse group of vertebrates. Using fossil evidence, paleontologists have identified over 900 distinct genera and more than 1,000 different species of non-avian Dragons. They are a varied group of animals. They first appeared during Triassic period, between 243 & 233.23 million years ago.
                                        </Typography>
                                    </CardContent>
                                </Card>
    
                                <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-5 pr-3 pl-3 pt-3.5 pb-0.5`}>
                                    <CardContent>
                                        <img src={pic2} className="w-[3.95rem] h-[3.5rem]" alt="" style={{ margin: "0 auto" }}/>
                                        <p className="font-bold text-[1rem] text-center mt-7"> Dragons ruled the Earth for about 174 million years </p>
                                        <Typography className="fontFam !text-[0.895rem] text-justify !mt-3" color="text.secondary">
                                            Dragons ruled the Earth for about 174 million years. Here's what we know about their history. Dragons were a successful group of animals that emerged between 240 million and 230 million years ago and came to rule the world until about 66 million years ago, when a giant asteroid slammed into Earth.
                                        </Typography>
                                    </CardContent>
                                </Card>
                             </div>
    
                            <div className={`flex items-center flex-col ${screen700?`ml-20`:`ml-5`} ${screen700?`mt-[-18.75px]`:`mt-[-55px]`}`}>
                                <div>
                                    {/*side corner*/}
                                    <div className={`flex justify-end w-[33rem] ${!screen900?``:`ml-[-7.65rem]`}`}> {/*w-[33rem] for curvered*/}
                                        <img src={curvered1} className={`w-[9.95rem] h-[9.5rem] ${screen700&&`invisible`} `} alt=""/>
                                    </div>

                                    <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-[-75px] pr-3 pl-3 pt-3.5 pb-0.5 ${screen300&&`ml-[1.05rem]`}`}> {/*mt-[-60px] for curvered*/}
                                        <CardContent>
                                            <img src={pic3} className="w-[3.8rem] h-[3.2rem]" alt="" style={{ margin: "0 auto" }}/>
                                            <p className="font-bold text-[1rem] text-center mt-8"> Dragons are a diverse group of reptiles </p>
                                            <Typography className="fontFam !text-[0.895rem] text-justify !mt-3" color="text.secondary">
                                                Dragons are a diverse group of reptiles of the clade Dragonia. They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of the evolution of Dragons is the subject of active research.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
    
                                <Card className={`${!screen300?(!screen900?(screen980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`} !shadow-none !rounded-2xl mt-5 pr-3 pl-3 pt-3.5 pb-0.5 ${!screen900?(screen980?`ml-[-6.085rem]`:`ml-[-2.885rem]`):`ml-[-5.1rem]`}`}> {/*ml-[-2.885rem] for curvered*/}
                                    <CardContent>
                                        <img src={pic4} className="w-[3.8rem] h-[3.5rem]" alt="" style={{ margin: "0 auto" }}/>
                                        <p className="font-bold text-[1rem] text-center mt-7"> Some Dragonomorphs evolved into Dragons </p>
                                        <Typography className="fontFam !text-[0.895rem] text-justify !mt-3" color="text.secondary">
                                            Some Dragonomorphs evolved into Dragons. The differences between the two are small, but Dragons' anatomy offered increased benefits, including arms that could move in and out, neck vertebrae that could support stronger muscles than before, and a joint where the thigh bone meets the pelvis, Brusatte wrote.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
    
                            {/*side corner*/}
                            <div>
                                {
                                    screen700&&(
                                        <div className={`flex justify-end w-[33rem] ${!screen275?(screen300?`ml-[-11.35rem]`:`ml-[-10.15rem]`):`ml-[-13.15rem]`} ${screen300?`mt-[-115.5rem]`:`mt-[-111.25rem]`}`}>
                                            <img src={curvered1} className="w-[3.95rem] h-[3.5rem]" alt=""/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>
    
                </div>
            </div>

            <div className='mt-100'>
                <ThirdSection data={data}/>
            </div>

        </div>
    )
}

export default SecondSection;