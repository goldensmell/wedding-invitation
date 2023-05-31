import React, {useEffect,useState} from 'react'
import './Intro_white.css'
// import img_intro from "../images/7.jpg"
import img_and from "../images/intro-hart.png"
import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Intro() {

  useEffect(() => {

  });

  const [dayDiff, setDayDiff] = useState();

  const calDayDiff = () => {

    setDayDiff();
  };

  // const dayEnToKo = (en) => {
  //   if(en === 'Su') {
  //     return "일";
  //   }else if(en === "Mo") {
  //     return "월"
  //   }else if(en === "Tu") {
  //     return "화"
  //   }else if(en === "We") {
  //     return "수"
  //   }else if(en === "Th") {
  //     return "목"
  //   }else if(en === "Fr") {
  //     return "금"
  //   }else if(en === "Sa") {
  //     return "토"
  //   }
  // } ;

  return (
    <div className='intro'>
        
        {/* <div className='intro-bg-first'>
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
        </div> */}

        {/* <img className='intro-image' src={img_intro}/> */}

        <div className='intro-names'>
            <p className='name'>임현수</p>
            <img className='and-image' src={img_and}/>
            <p className='name'>김유미</p>
        </div> 
       
        <div className='intro-contents'>
            <p> 2023. 08. 26 토요일 오전 11:30</p>
            <p> W스퀘어컨벤션 L층 그레이스홀</p>
        </div>

        <div className='intro-calendar'>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar']}>
              <DemoItem>
                <DateCalendar defaultValue={dayjs('2023-08-26')}
                              view='day'
                              dayOfWeekFormatter={(day) => dayEnToKo(`${day}`)}
                              readOnly/>
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>*/}
        </div> 
    </div>
  )
}
