import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import './Styles/section.css';

const Section = () => {
    const imgArr = [
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png',
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png',
    ];
    const [scroll, setScroll] = useState(false);
    var slide = document.getElementById("food_container");
    const leftScroll = ()=>{
        if(slide){
            slide.scrollLeft = slide.scrollLeft - 500;
            console.log(slide?.scrollHeight - slide?.scrollTop === slide?.clientHeight)
        }
        setScroll(!scroll)
    }
    const rightScroll = ()=>{
        if(slide)
        slide.scrollLeft = slide.scrollLeft + 500;   
        setScroll(!scroll)
    }
    const [top, setTop] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = ()=>{
        setTop(slide?slide.scrollLeft===0:true);
        setScrolled(Math.round(slide?.scrollWidth-slide?.scrollLeft) === slide?.clientWidth);
    }
    
    useEffect(() => {
      if(slide)
      slide.addEventListener('scroll', handleScroll);
    }, [scroll])
    
  return (
    <div>
        <Layout 
            header={'What\'s on your mind?'}
            arrow
            leftScroll={leftScroll}
            rightScroll={rightScroll}
            top={top}
            scrolled={scrolled}
        >
         <div className='food_container overflow_container' id='food_container'>
            {
                imgArr.map((item,index)=>(
                    <div key={`food-item-${index}`} style={{cursor:'pointer'}}><img src={item} alt='item'/></div>
                ))
            }
         </div>
        </Layout>
    </div>
  )
}

export default Section