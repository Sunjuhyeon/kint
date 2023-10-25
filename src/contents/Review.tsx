import React, { useRef, useState } from 'react'
import { ConReview } from '../model/Type';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface ReviewProps {
    info:ConReview[];
}

const Review:React.FC<ReviewProps> = ({info}) => {
    

    return (
        <section id='review'>
            <div className='title'>
                <h3>Customer Review</h3>
                <p>실제 후기로 만나보는 킨트</p>
            </div>
            <Swiper
                navigation={true}
                slidesPerView={1}
                slidesPerGroupSkip={1}
                modules={[Navigation]}
                className="mySwiper container"
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    991: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}
            >
                {
                    info.map((v, i) => {
                        return(
                            <SwiperSlide className=''>
                                <div className='reviewlist'>
                                    <div className={`background ${v.backgroundcls}`}>
                                        <img src={v.src} alt="reviewimg" className='reviewimg' />
                                    </div>
                                    <div className='iconbox'>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Review
