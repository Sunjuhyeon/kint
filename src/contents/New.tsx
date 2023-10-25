import React, { useRef, useState } from 'react';
import { ConNew } from '../model/Type'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface ConNewProps {
    info: ConNew[]
}

const New: React.FC<ConNewProps> = ({info}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
    return (
        <section id="new">
            <div className='title'>
                <h3>New Collection</h3>
                <p>다양한 스타일의 컬렉션과 실패없는 선물 패키지,<br />
                    매주 3가지씩 업로드 되는 신상품을 만나보세요</p>
                <a href="#none" className='more'>more view</a>
            </div>
            <div className='d-xl-flex align-items-center'>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 thumb d-xl-inline-block d-block"
                >
                    {
                        info.map((v, i) => {
                            return(
                                <SwiperSlide>
                                    <img src={v.thumb} alt="thumb" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    loopedSlides={1}
                    freeMode={true}
                    slidesPerView={1.5}
                    modules={[FreeMode, Navigation, Thumbs]}
                    breakpoints={{
                        1365:{
                            slidesPerView:3.5

                        },
                        637:{
                            slidesPerView:2.5
                        }
                    }}
                    className="mySwiper detail d-xl-inline-block d-block"
                >
                    {
                        info.map((v, i) => {
                            return(
                                <SwiperSlide>
                                    <div className='imgbox'>
                                        <img src={v.detail.src} alt="src" />
                                    </div>
                                    <div className='txtbox'>
                                        <p>{v.detail.category}</p>
                                        <p>{v.detail.title}</p>
                                        <div>
                                            <span>{v.detail.price}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default New
