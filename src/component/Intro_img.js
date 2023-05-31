import React from 'react'
import './Intro_img.css'
import img_intro from "../images/7.jpg"

export default function Intro_Img() {
  return (
    <div className='intro-img-wrapper'>
      {/* style={{
            backgroundImage: `url(${img_wedding})`,
            backgroundPosition: "top center",
            backgroundSize: "cover"
        }}> */}

        <img className='intro-img' src={img_intro}/>
      
    </div>
  )
}
