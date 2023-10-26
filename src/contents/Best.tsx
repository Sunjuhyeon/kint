import React from 'react'
import { Detail } from '../model/Type'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { Grid, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

interface ConBestProps {
    info:Detail[]
}

const New: React.FC<ConBestProps> = ({ info }) => {

    return (
        <section id="best">
            <div className='title'>
                <h3>Best Collection</h3>
                <p>소중한 선물을 고민하고 있다면<br />
                    65,000리뷰가 입증하는 킨트의 BEST상품을 만나보세요.</p>
                <a href="#none" className='more'>more view</a>
            </div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                grid={{
                    rows: 2,
                }}
                modules={[Grid, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    info.map((v, i) => {
                        return(
                            <SwiperSlide>
                                <img src={v.src} alt="" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default New
