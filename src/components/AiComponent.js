import React from 'react'
import Logo from '../images/Logo.png'
import {NavLink} from 'react-router-dom'
import { UilMoon, UilSun } from '@iconscout/react-unicons'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper/core";
import eyesVectorInfo from "../assets/eyesVectorInfo"
import portraitsVectorInfo from "../assets/portraitsVectorInfo"
import miscVectorInfo from "../assets/miscVectorInfo"
SwiperCore.use([EffectCoverflow]);

const AiComponent = ({theme, setTheme}) => {
    const themeToggle = () =>{
        setTheme(!theme)
    }
    const eyeData = eyesVectorInfo()
    const portraitData = portraitsVectorInfo()
    const miscData = miscVectorInfo()
    return (
        <>
            <nav className={`${theme ? 'navDark' : ''}`}>
                <div className="navLogo">
                    <NavLink to="/"><img src={Logo}/></NavLink>
                </div>
                <h3 style={{color: "rgb(88, 80, 236)"}}>Illustrations</h3>
                <div className="navToggle">
                    <div className='themeToggle' onClick={themeToggle}>
                        {theme ? <UilSun /> : <UilMoon /> }
                    </div>
                </div>
            </nav>
            <div className={`vectorContainer ${theme ? "darkThemeBG" : ''}`}>
                <div className="vectorGrid">
                    <div className="portraitsVectors">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 2,
                              slideShadows: true
                            }}
                            className="mySwiper"
                        >
                            {
                                portraitData.map(portrait=>(
                                    <SwiperSlide key={portrait.key}>
                                        <img src={portrait.img} alt="" />
                                        <p>{portrait.name}</p>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="eyesVectors">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 2,
                              slideShadows: true
                            }}
                            className="mySwiper"
                        >
                            {
                                eyeData.map(eye=>(
                                    <SwiperSlide key={eye.key}>
                                        <img src={eye.img} alt="" />
                                        <p>{eye.name}</p>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="miscVectors">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 2,
                              slideShadows: true
                            }}
                            className="mySwiper"
                        >
                            {
                                miscData.map(misc=>(
                                    <SwiperSlide key={misc.key}>
                                        <img src={misc.img} alt="" />
                                        <p>{misc.name}</p>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AiComponent
