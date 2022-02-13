import React from 'react';
//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
//REACT-CAROURSEL
import Carousel from "react-elastic-carousel";
//IMAGES
import star from '../../images/star.png';
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';


function Cards({ item }) {
    const matches734 = useMediaQuery('(min-width:734px)');
    const matches564 = useMediaQuery('(min-width:564px)');
    const matches464 = useMediaQuery('(min-width:464px)');
    const matches344 = useMediaQuery('(min-width:344px)');


    return (
        <Card
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#FCFCFC",
                boxShadow: "1px 6px 11px -1px rgba(0, 0, 0, 0.25)",
                borderRadius: "25px 25px 0px 0px",
            }}
        >
            <Avatar
                alt="Remy Sharp"
                src={item.pic}
                sx={{ width: !(!matches734&&matches564)?(matches344?132:95):91, height: !(!matches734&&matches564)?(matches344?132:95):91, borderRadius: "12.5rem", marginTop: matches344?"1.325rem":"2.025rem" }}
            />

            <div
                style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", marginTop: "0.1875rem" }}
            >
                <Typography
                    variant="h6"
                    style={{
                        color: "#000000",
                        textAlign: "center",
                        lineHeight: "1.9375rem",
                        fontStyle: "normal",
                        fontWeight: "bold",                        
                        fontSize: !(!matches734&&matches564)?(matches464?"1rem":(matches344?"0.925rem":"0.775rem")):"0.85rem",
                        width: "24.375rem"
                    }}
                >
                    {item.name}
                </Typography>

                <Typography
                    variant="body1"
                    style={{
                        color: "rgba(8, 8, 10, 0.7)",
                        textAlign: "center",
                        lineHeight: "1.625rem",
                        fontStyle: "normal",
                        fontWeight: "31.25rem",
                        fontSize: !(!matches734&&matches564)?(matches464?"1rem":(matches344?"0.85rem":"0.6rem")):"0.875rem",
                        width: "24.375rem",
                        marginTop: matches344?"":"-0.55rem"
                    }}
                >
                    {item.cast}
                </Typography>
            </div>

            <div
                style={{ marginLeft: "-4.6875rem"}}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: matches344?"":"4.25rem"
                    }}
                >
                    <img src={star} alt="star" style={{ width: "1.6rem", height: "1.2rem" }}/>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            marginLeft: "0.9375rem"
                        }}
                    >
                        <Typography style={{ color: "#000000", fontSize: !(!matches734&&matches564)?(matches464?"1rem":(matches344?"0.8rem":"0.625rem")):"0.675rem" }} variant="p"> CAST </Typography>
                        <span style={{ color: "rgba(8, 8, 10, 0.7)", marginTop: "-0.225rem", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.715rem" }}>
                            {item.cast}
                        </span>
                    </div>
                </div>
    
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "0.9375rem",
                        marginLeft: matches344?"":"4.5rem"
                    }}
                >
                    <img src={star} alt="phone" style={{ width: "1.6rem", height: "1.485rem" }}/>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            marginLeft: "0.9375rem"
                        }}
                    >
                        <Typography style={{ color: "#000000", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.675rem" }} variant="p"> NAME </Typography>
                        <span style={{ color: "rgba(8, 8, 10, 0.7)", marginTop: "-0.225rem", fontSize: !(!matches734&&matches564)?((matches464?"1rem":(matches344?"0.8rem":"0.625rem"))):"0.715rem" }}>
                            {item.name}
                        </span>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "1.875rem"
                }}
            >
                <div
                    style={{
                        width: "10rem",
                        height: "3.4375rem",
                        backgroundColor: "#66D189",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={pic1} alt="pic1" className={`${!matches344&&`!invisible`}`} style={{ width: matches464?"1.6rem":matches344?"1.2rem":"0.875rem", height: matches464?"1.485rem":matches344?"1.15rem":"0.875rem", marginLeft: matches344?"":"3.765rem", marginTop: matches344?"":"-1.15rem" }}/>
                </div>

                <div
                    style={{
                        width: "10rem",
                        height: "3.4375rem",
                        backgroundColor: "#E8E8E8",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <img src={pic2} alt="pic2" className={`${!matches344&&`invisible`}`} style={{ width: matches464?"1.6rem":matches344?"1.2rem":"0.875rem", height: matches464?"1.485rem":matches344?"1.15rem":"0.875rem", marginLeft: matches344?"":"3.765rem", marginTop: matches344?"":"-1.15rem" }}/>
                </div>
            </div>
        </Card>
    )
}


function ThirdSection({ data }) {
    const matches1270 = useMediaQuery('(max-width:1270px)');
    const matches1044 = useMediaQuery('(min-width:1044px)');
    const matches980 = useMediaQuery('(max-width:980px)');
    const matches900 = useMediaQuery('(max-width:900px)');
    const matches734 = useMediaQuery('(min-width:734px)');
    const matches700 = useMediaQuery('(max-width:700px)');
    const matches564 = useMediaQuery('(min-width:564px)');
    const matches464 = useMediaQuery('(min-width:464px)');
    const matches395 = useMediaQuery('(max-width:395px)');
    const matches344 = useMediaQuery('(min-width:344px)');
    const matches300 = useMediaQuery('(max-width:300px)');

 
 
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 600, itemsToShow: matches734?3:2 }
    ];


    return (
        <div
            style={{
                height: "660px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            className={`!mt-[-10rem] ${matches700?`pb-10`:``}`}
        >
            <div
                style={{
                    width: "71rem",
                    height: "33rem",
                    marginLeft: !matches1044?(matches700?"3.1rem":"-2.5rem"):"-0.25rem",
                    marginTop: matches700?"6rem":"12rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem"
                }}
            >
                <Typography
                    className={`
                        ${matches300?`!text-[1.685rem] !leading-[2.025rem]`:`!text-3xl`} !font-bold !tracking-wider text-center fontFam ${matches700&&(!matches300?(!matches900?(matches980?`w-[27rem]`:`w-[30rem]`):`w-[20.25rem]`):`w-[18.2rem]`)} pl-5
                        ${!matches700?(!matches900?(matches1270?`!mt-36`:`!mt-40`):`!mt-32`):`!mt-6`}
                        w-full pb-12
                    `}
                    style={{ wordSpacing: "0.15rem", margin: "0 auto" }}
                >
                    {!matches395?`Dragon of Different Casts`:`Different Casts`}
                </Typography>

                {
                    !matches1044?(
                        (matches734?(
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: "1rem",
                                        marginLeft: "0.75rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "45rem"
                                    }}
                                >
                                    <Carousel breakPoints={breakPoints} showArrows={false}>
                                        {
                                            data.map((item, i) => (
                                                <center
                                                    key={i}
                                                    style={{ width: "20rem" }}
                                                >
                                                    <Cards
                                                        item={item}
                                                    />
                                                </center>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        ):(
                            <Carousel breakPoints={breakPoints} showArrows={false}
                                itemsToScroll={(!matches734&&matches564)?1:1}
                                itemsToShow={(!matches734&&matches564)?1:1}
                            >
                                {
                                    data.map((item, i) => (
                                        <center
                                            key={i}
                                            style={{ width: !(!matches734&&matches564)?(matches464?(!matches564?"19.75rem":"18.75rem"):(matches344?"17.85rem":"17rem")):"20rem" }}
                                        >
                                            <Cards
                                                item={item}
                                            />
                                        </center>
                                    ))
                                }
                            </Carousel>
                        ))
                    ):(
                        <div
                            style={{
                                marginTop: "1rem",
                                marginLeft: "0.75rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Carousel breakPoints={breakPoints} showArrows={false}>
                                {
                                    data.map((item, i) => (
                                        <center
                                            key={i}
                                            style={{ width: "20rem" }}
                                        >
                                            <Cards
                                                item={item}
                                            />
                                        </center>
                                    ))
                                }
                            </Carousel>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ThirdSection;