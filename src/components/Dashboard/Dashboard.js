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
      <p>hola</p>
      <button onClick={goBackHandler}>cerrar sesion</button>
    </div>
  );
  <NavBar />
};

export default Dashboard;
