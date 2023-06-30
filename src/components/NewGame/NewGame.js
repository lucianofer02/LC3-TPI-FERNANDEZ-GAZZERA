import "./NewGame.css"

import GameForm from "../GameForm/GameForm"
import {useState} from 'react'

const NewGame = ({ onGameAdded }) => {
  const [showForm, setShowForm] = useState(false);

  const onGameAddedHandler = (game) => {
    console.log(game);
    console.log("In new game");
    onGameAdded(game);
  };
  const showGameForm = () => {
    setShowForm(true);
  };
  const hideGameForm = () => {
    setShowForm(false);
  };
  return (
    <div className="new-game">
      {showForm ? (
        <GameForm onHideForm={hideGameForm} onGameAdded={onGameAddedHandler}/>
      ) : (
        <button className = "btn btn-dark" onClick={showGameForm}>Registrar nuevo videojuego</button>
      )}
    </div>
  );
};

export default NewGame;