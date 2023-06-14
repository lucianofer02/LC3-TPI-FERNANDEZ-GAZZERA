import { useState } from 'react'

import "./GameItem.css"

import GameLaunch from "../GameLaunch/GameLaunch"
import GameCard from "../GameCard/GameCard"

const GameItem = ({gameTitle, gameGenre, gameDateLaunch, gameCost}) => {
    const [title, setTitle] = useState(gameTitle)

    const changeTitleHandler = () => {
        setTitle("Actualizado!")
        console.log(title);
    }

  return (
    <GameCard>
        <h2>{gameTitle}</h2>
        <h3>{gameGenre}</h3>
        <GameLaunch gameDateLaunch={gameDateLaunch} />
        <h3>{gameCost}</h3>
        <button onClick={changeTitleHandler}>Cambiar Titulo</button>
    </GameCard>
  )
}

export default GameItem