import React from 'react';
import './_Calendar.sass';

const  CalendarView = () => {
  const [date, setDate] = useState(new Date())
  const [clickedDay, setClickedDay] = useState('')

  const onClickedDay = value => setClickedDay(value)

  useEffect(() => clickedDay && console.log(clickedDay), [clickedDay])
  return (
    <div className='cal'>
      <p>CALENDAR</p>
    </div>
  );
}

export default Calendar;
