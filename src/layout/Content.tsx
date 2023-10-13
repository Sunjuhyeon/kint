import React from 'react'
import { Con } from '../model/Type'

import Mainslide from '../contents/Mainslide'

interface ContentProps{
  info:Con
}

const Content:React.FC<ContentProps>= ({info}) => {
  return (
    <main>
      <Mainslide info={info.mainslide}></Mainslide>
    </main>
  )
}

export default Content