import React, { useState } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';


const App:React.FC = () => {
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}


export default App;
