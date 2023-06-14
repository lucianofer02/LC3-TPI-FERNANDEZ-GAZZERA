import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// import NavBar from "../NavBar/NavBar"
import Games from "../Games/Games"
import GameFilter from "../GameFilter/GameFilter";
import NewGame from "../NewGame/NewGame";
// import GameLaunch from "../GameLaunch/GameLaunch";


const GAMES = [
  {
    id: 1,
    title: "The Last of Us",
    genre: "Adventure",
    dateLaunch: new Date(2013, 6, 14),
    cost: 60,
  }

]

const Dashboard = () => {
  const [games, setGames] = useState([]);
  const [filterYear, setFilterYear] = useState("2013");

  useEffect(() => {
    console.log("useEffect on mount")
  //  const gameStoraged = JSON.parse(localStorage.getItem("games"));

  //   if(gameStoraged) {
  //     setGames(
  //       gameStoraged.map((game) => ({
  //         ...game,
  //         dateLaunch: new Date(game.dateLaunch),
  //       }))
  //     );
  //   } else {
    //   }
    localStorage.setItem("games", JSON.stringify(GAMES));
  }, []);

  const addGameHandler = (game) => {
    const newGamesArray = [game, ...games];
    setGames(newGamesArray);
    localStorage.setItem("games", JSON.stringify(newGamesArray));
  };

  const filterYearChanged = (year) => {
    setFilterYear(year);
  }

  const onLogoutHandler = () => {
    navigation("/login")
  }

  const navigation = useNavigate();

  return (
    <div>
      <button onClick={onLogoutHandler}>cerrar sesion</button>
      <NewGame onGameAdded={addGameHandler}/>
      <GameFilter
        filterYear={filterYear}
        onFilterYearChange={filterYearChanged}
      />
      <Games filterYear={filterYear} games={games} />
    </div>
  );
};

export default Dashboard;