import { useState } from "react";
import { Button } from "react-bootstrap";
import "./GameForm.css";

const GameForm = ({ onGameAdded, onHideForm }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [dateLaunch, setDateLaunch] = useState("");
  const [cost, setCost] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeGenreHandler = (event) => {
    setGenre(event.target.value);
  };

  const changeDateLaunchHandler = (event) => {
    setDateLaunch(event.target.value);
  };

  const changeCostHandler = (event) => {
    setCost(event.target.value);
  };

  const addGameHandler = (event) => {
    event.preventDefault();
    const newGame = {
      id: Math.random(),
      title,
      genre,
      dateLaunch: new Date(dateLaunch),
      cost,
    };
    onGameAdded(newGame);
  };

  const hideFormHandler = (event) => {
    event.preventDefault();
    onHideForm();
  };

  return (
    <form>
      <div className="new-game-controls">
        <div className="new-game-control">
          <label>Título</label>
          <input
            onChange={changeTitleHandler}
            type="text"
            className="input-control"
          />
        </div>
        <div className="new-game-control">
          <label>Género</label>
          <input
            onChange={changeGenreHandler}
            type="text"
            className="input-control"
          />
        </div>
        <div className="new-game-control">
          <label>Precio</label>
          <input
            onChange={changeCostHandler}
            type="number"
            className="input-control"
            min="1"
            step="1"
          />
        </div>
        <div className="new-game-control">
          <label>Fecha de lanzamiento</label>
          <input
            onChange={changeDateLaunchHandler}
            type="date"
            className="input-control"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-game-actions">
        <button onClick={hideFormHandler}>Cancelar</button>
        <Button onClick={addGameHandler}>Agregar Videojuego</Button>
      </div>
    </form>
  );
};

export default GameForm;
