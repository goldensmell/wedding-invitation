import React, {useEffect} from 'react'
import './Greeting.css'
// import flower from '../images/greeting-flower.png'
import Calendar from "./Calendar"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Greeting() {

  useEffect(() => {
    AOS.init({
      offset: 30,
      delay: 200,
      duration: 1000
    });
  });

  return (
    <div className='greeting'>
      {/* <div className='greeting-outline'></div> */}
      {/* <img className='greeting-flower' src={flower}></img> */}
      <p className='greeting-title' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"> INVITATION</p>
      <div className='greeting-message' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <p>평생을 같이하고 싶은 사람을 만났습니다. </p>
          <p>서로 아껴주고 이해하며</p>
          <p>사랑 배풀며 살고 싶습니다.</p>
          <p>저희 약속 위해 따뜻한 격려로 축복해</p>
          <p>주셔서 힘찬 출발의 디딤이 되어 주십시오.</p>
      </div>
      <div className='greeting-line'></div>
      <div className='greeting-family' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <table className='family-table'>
          <thead></thead>
          <tbody>
            <tr>
              <td width={"50%"}>임종국 • 길금숙</td>
              <td width={"25%"}><span style={{fontSize:"0.8em"}}>의 아들</span></td>
              <td width={"25%"}>현수</td>
            </tr>
            <tr>
              <td width={"50%"}>고길자</td>
              <td width={"25%"}><span style={{fontSize:"0.8em"}}>의 &nbsp;&nbsp; 딸</span></td>
              <td width={"25%"}>유미</td>
            </tr>
          </tbody>
        </table>
      </div> 

      <div className='greeting-calendar' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <Calendar/>
       </div> 
    </div>
  )
}
