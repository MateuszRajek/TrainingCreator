import React from 'react';
import Calendar from './Calendar/Calendar';
import Chat from './Chat/Chat';
import Tasks from './Tasks/Tasks';
import Trainings from './Trainings/Trainings';
import './_Dashboard.sass';

const Dashboard = () => {
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
