import './App.css';
import Intro_img from './component/Intro_img';
import Pictures from './component/Pictures';
import Intro_white from './component/Intro_white';
import Greeting from './component/Greeting';
import Location from './component/Location';
import Contact from './component/Contact';
import { useEffect } from 'react';

function App() {

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  useEffect(() => {
    setScreenSize();
  }); //처음 마운트될때 값을 계산하도록 함수를 호출한다

  window.addEventListener('resize', () => setScreenSize());

  return (
    <div className="App">
      {/* 인트로 이미지 */}
      <Intro_img/>
      
      {/* 인트로 */}
      <Intro_white />

      {/* 인사말 */}
      <Greeting />

      {/* 사진첩 */}
      <Pictures />

      {/* 오시는길 */}
      <Location/>

      {/* 연락처 송금 */}
      <Contact/>
    </div>
  );
}

export default App;
