import React from "react";
import { useNavigate } from "react-router";

import NavBar from "../NavBar/NavBar";

const Dashboard = () => {
  const navigation = useNavigate();

  const goBackHandler = () => {
    navigation("/login");
  };

  return (
    <div>
      <NavBar />
      <button onClick={goBackHandler}>cerrar sesion</button>
    </div>
  );
};

export default Dashboard;
