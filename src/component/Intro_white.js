import React from 'react'
import './Intro_white.css'
import img_intro from "../images/intro_image.jpg"
import img_and from "../images/and.png"

export default function Intro() {
  return (
    <div className='intro'>
        
        <div className='intro-bg-first'>
          <div className='intro-bg-wrap'>
            <div className='intro-image' 
                style={{
                          backgroundImage: `url(${img_intro})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          // backgroundAttachment: "fixed",
                          display: "block",
                          top: 0,
                          left: 0,
                          position: "fixed",
                          width: "100%",
                          height: "100%",
                          backgroundPosition: "top center"
            }}></div>
            {/* <img className='intro-image' src={img_intro}/> */}
          </div>
        </div>
        <div className='intro-bg-second'>
          <div className='intro-bg-wrap'>
            <div className='intro-white-bg'style={{
                          backgroundColor: "white",
                          // backgroundAttachment: "fixed",
                          position: "fixed",
                          width: "100%",
                          height: "100%"
            }}>
            </div>
          </div>
        </div>

        <div className='intro-names'>
            <p className='name'> 홍길동</p>
            <img className='and-image' src={img_and}/>
            <p className='name'> 홍길동</p>
        </div> 
       
        <div className='intro-contents'>
            <p> 2222. 08. 26 토요일 오전 11:30</p>
            <p> W스웨어컨벤션 L층 그레이스홀</p>
        </div>
    </div>
  )
}
