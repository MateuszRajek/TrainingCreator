import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './_Calendar.sass';

function CalendarView() {
  const [date, setDate] = useState(new Date())

  return (
    <div className='calendar__container'>
      <Calendar value={date} onChange={setDate}/>
    </div>
  );
}

export default CalendarView;
