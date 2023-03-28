import React from 'react'
import './Intro.css'

export default function Intro() {
  return (
    <div className='intro'
        style={{
            backgroundImage: `url("/image/wadding.jpg")`,
            backgroundPosition: "top center",
            backgroundSize: "cover"
        }}>
        <div className='intro-contents'>
            <h1> 결혼합니다</h1>
            <p> 홍길동 <span style={{fontSize: "1rem"}}>그리고</span> 홍길동 </p>
            <p> 2222.08.26 토요일 오전 11:30</p>
            <p> W스웨어컨벤션 L층 그레이스홀</p>
        </div>
        <div className="intro-fadeBottom" />
    </div>
  )
}