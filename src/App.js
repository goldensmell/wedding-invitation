import './App.css';
import Pictures from './component/Pictures';
import Intro_white from './component/Intro_white';
import Greeting from './component/Greeting';
import Location from './component/Location';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
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
