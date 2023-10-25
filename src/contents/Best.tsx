import React from 'react'
import { Detail } from '../model/Type'

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
            <div className='bestbox container-lg d-flex flex-wrap justify-content-center align-items-start'>
                {
                    info.map((v, i) => {
                        const price2 = v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        const discoun2 = v.discount ? v.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '';
                        return (
                            <div className='bestlist col-sm-3 col-6'>
                                <div className='p-1'>
                                    <div className='imgbox'>
                                        <img src={v.src} alt="bestimg" />
                                        <div className='ranking'>Best<br />{v.rank}</div>
                                    </div>
                                    <div className='txtbox'>
                                        <p className='category'>{v.category}</p>
                                        <p className='productName'>{v.title}</p>
                                        <div className='price'>
                                            <p className='after'>{price2}</p>
                                            <span className='before'>{discoun2}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default New
