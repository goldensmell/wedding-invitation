import React from 'react'
import './Intro.css'
import img_wedding from "../images/wedding.jpg"

export default function Intro() {
  return (
    <div className='intro'
        style={{
            backgroundImage: `url(${img_wedding})`,
            backgroundPosition: "top center",
            backgroundSize: "cover"
        }}>
        <div className='intro-contents'>
            <h1> 결혼합니다</h1>
            <p> 임현수 <span style={{fontSize: "1rem"}}>그리고</span> 김유미 </p>
            <p> 2023.08.26 토요일 오전 11:30</p>
            <p> W스웨어컨벤션 L층 그레이스홀</p>
        </div>
        <div className="intro-fadeBottom" />
    </div>
  )
}
