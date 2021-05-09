import React from 'react';
import Calendar from './Calendar/Calendar';
import Chat from './Chat/Chat';
import './Dashboard.sass';
import Tasks from './Tasks/Tasks';
import Trainings from './Trainings/Trainings';

function Dashboard() {
  return (
    <section className='main'>
      <div className='container top'>
        <Calendar />
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
