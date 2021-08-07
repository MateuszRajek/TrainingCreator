import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './_Calendar.sass';

function CalendarView() {
  const [date, setDate] = useState(new Date())
  const [clickedDay, setClickedDay] = useState('')
//basic version for design purpose only for now
  const onClickedDay = value => setClickedDay(value)

  useEffect(() => clickedDay && console.log(clickedDay), [clickedDay])
  return (
    <div className='calendar__container'>
      <Calendar value={date} onChange={setDate} onClickDay={onClickedDay} />
    </div>
  );
}

export default CalendarView;
