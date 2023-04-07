import React from 'react'
import './Greeting.css'
import flower from '../images/greeting-flower.png'
export default function Greeting() {
  return (
    <div className='greeting'>
      {/* <div className='greeting-outline'></div> */}
      <img className='greeting-flower' src={flower}></img>
      <p className='greeting-title'>INVITATION</p>
      <div className='greeting-message'>
          <p>서로가 마주보며 다져온 사랑을 </p>
          <p>이제 함께 한 곳을 바라보며 걸어갈 수 있는</p>
          <p>큰 사랑으로 키우고자 합니다.</p>
          <p>저희 두 사람이</p>
          <p>사랑의 이름으로 지켜나갈 수 있게</p>
          <p>앞날을 축복해 주시면 감사하겠습니다.</p>
      </div>
      <div className='greeting-family'>
        <p>홍길동 • 홍길동의 아들 &nbsp;&nbsp;홍길동</p>
        <p>홍길동 • 홍길동의 &nbsp;&nbsp;&nbsp;&nbsp;딸 &nbsp;&nbsp;홍길동</p>
      </div> 
    </div>
  )
}
