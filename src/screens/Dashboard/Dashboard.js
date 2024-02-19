import React, { useState } from "react";
import CalendarView from "./Calendar/Calendar";
import Chat from "./Chat/Chat";
import Tasks from "./Tasks/Tasks";
import Trainings from "./Trainings/Trainings";
import Button from "../../components/Button/Button";

const dashboardScreens = {
  chat: Chat,
  tasks: Tasks,
  calendar: CalendarView,
  trainings: Trainings,
};

const dashboardNav = [
  {
    screen: "chat",
    title: "Chat",
  },
  {
    screen: "tasks",
    title: "Tasks",
  },
  {
    screen: "calendar",
    title: "Calendar",
  },
  {
    screen: "trainings",
    title: "Trainings",
  },
];

function Dashboard() {
  const [selectedScreen, setSelectedScreen] = useState("tasks");

  const ActiveScreen = dashboardScreens[selectedScreen];

  const handleNavClick = (screen) => {
    setSelectedScreen(screen);
  };

  return (
    <section className="main">
      <div className="container top">
        {dashboardNav.map(({ screen, title }) => (
          <Button text={title} onClick={() => handleNavClick(screen)} />
        ))}
      </div>
      <div className="container center">
        <ActiveScreen />
      </div>
    </section>
  );
}

export default Dashboard;

