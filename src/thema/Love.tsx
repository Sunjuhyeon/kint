import React from 'react'
import { ThemaDetail } from '../model/Type'

interface LoveProps{
    info : ThemaDetail;
}

const Love:React.FC<LoveProps> = ({info}) => {
  return (
        <div className='container-lg themaList'>
            <div className='bannerbox'>
                <img src={info.banner} alt="banner" />
            </div>
            <ul className='detailbox d-flex justify-content-center align-items-center pt-1'>
                {
                    info.detail.map((v, i) => {
                        const price2 = v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        const discoun2 = v.discount ? v.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '';
                        return (
                            <li key={i} className='detaillist col-2'>
                                <div className='p-1'>
                                    <div className='detailimg'>
                                        <img src={v.src} alt="orbit" />
                                    </div>
                                    <div className='detailtxt'>
                                        <p className='product'>{v.title}</p>
                                        <div className='price'>
                                            <p>{price2}</p>
                                            <span>{discoun2}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
  ) 
}

export default Love
