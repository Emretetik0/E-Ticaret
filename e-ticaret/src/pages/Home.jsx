import React from 'react'
import SliderHome from '../components/SliderHome'
import Yazi from '../components/Yazi'
const Home = () => {
  return (
    <div className='px-10'>
      <SliderHome />
      <div>
        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/running_fw24_ub5_global_educate_hp_banner_hero_d_7e15cdde36.jpg" alt="" />
        <Yazi/>
      </div>
    </div>
  )
}

export default Home
