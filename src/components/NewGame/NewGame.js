import "./NewGame.css"

import GameForm from "../GameForm/GameForm"
import {useState} from 'react'

const NewGame = ({onGameAdded}) => {
  const [showForm, setShowForm] = useState(false);

  const onGameAddedHandler = (game) => {
    console.log(game);
    console.log("In new game");
    console.log(game);
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
        <GameForm onHideForm={hideGameForm} onBookAdded={onGameAddedHandler}/>
      ) : (
        <button onClick={showGameForm}>Registrar nuevo videojuego</button>
      )}
    </div>
  );
};

export default NewGame;