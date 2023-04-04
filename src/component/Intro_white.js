import React from 'react'
import './Intro_white.css'
import img_intro from "../images/intro_image.jpg"
import img_and from "../images/and.png"

export default function Intro() {
  return (
    <div className='intro'>
        
        <img className='intro-image' src={img_intro}/>

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
