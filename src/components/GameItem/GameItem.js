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
        <h2>{title}</h2>
        <h4>{gameGenre}</h4>
        <h4><GameLaunch gameDateLaunch={gameDateLaunch} /></h4>
        <h4>${gameCost}</h4>
        <button onClick={changeTitleHandler}>Cambiar Titulo</button>
    </GameCard>
  )
}

export default GameItem