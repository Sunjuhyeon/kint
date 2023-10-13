import React, { useState } from 'react'
import { ConMainslide } from '../model/Type'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import "swiper/css";
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import SwiperCore, { Navigation, Controller, EffectFade } from "swiper/modules";

interface ConSlideProps{
    info:ConMainslide[]
}

const Mainslide:React.FC<ConSlideProps> = ({info}) => {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(null);
    return (
        <section id="mainslide">
            <div>
                <Swiper
                    className="mySwiper imgslide"
                    modules={[ Controller, Navigation]}
                    controller={{ control: controlledSwiper }} 
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    breakpoints={{
                        768:{
                            slidesPerView:1.9
                        },
                        850:{
                            slidesPerView:2.2
                        },
                        991:{
                            slidesPerView:2.5
                        }
                    }}
                >
                    {
                        info.map((v, i) => {
                            return(
                                <SwiperSlide>
                                    <div key={i} className='img-wrapper'>
                                        <a href={v.slideimg.link}>
                                            <img src={v.slideimg.img} alt={`mainslide${i}`} />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div>
                    <Swiper
                        modules={[Controller, EffectFade]}
                        onSwiper={setControlledSwiper}
                        slidesPerView={1}
                        effect={'fade'}
                        cssMode={true}
                        className={`mySwiper`}
                    >
                        {
                            info.map((v, i) => {
                                return(
                                    <SwiperSlide>
                                        <div>
                                            <div>
                                                <p>{v.slidetxt.title}</p>
                                                <p>{v.slidetxt.contents}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Mainslide