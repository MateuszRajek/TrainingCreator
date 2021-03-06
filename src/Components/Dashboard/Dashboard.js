import React from 'react';
import CalendarView from './Calendar/Calendar';
import Chat from './Chat/Chat';
import Tasks from './Tasks/Tasks';
import Trainings from './Trainings/Trainings';
import './_Dashboard.sass';

function Dashboard() {
  return (
    <section className='main'>
      <div className='container top'>
        <CalendarView />
        <Tasks />
      </div>
      <div className='container center'>
        <Trainings />
        <Chat />
      </div>
    </section>
    
  );
}

export default Dashboard;
