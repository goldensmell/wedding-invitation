import React from 'react'
import "./Calendar.css"
export default function Calendar() {

    const weeks = ['일','월','화','수','목','금','토'];
    
    const beforeDays = [' ',' '];
    const curDays =  Array(31).fill().map((v,i)=>i+1);
    const nextDays = [' ',' '];

    const days = [
        ...beforeDays,
        ...curDays,
        ...nextDays
    ];
    
    const getedDaysToDiv = (day,idx) => {

        if(idx === 0 || idx === 1 || idx === 33 || idx === 34) {
            return <div className='calendar-day other-month'>{day}</div>
        }if(day === 26) {
            return <div className='calendar-day d-day'>{day}</div>
        } else { 
            return <div className='calendar-day'>{day}</div>
        }
    }

  return (
    <div className='calendar-wrapper'>
        <div className='calendar-month'>2023년 8월</div>
        <div className='calendar-days-wrapper'>
        {weeks.map(week => (
                                <div className='calendar-week'>{week}</div>
                            ))}
            {days.map((day,idx) => (
               getedDaysToDiv(day,idx)
            ))}
        </div>
    </div>
  )
}
