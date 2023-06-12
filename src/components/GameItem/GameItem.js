import { useState } from 'react'

import "./GameItem.css"

// import DateLaunch from "../DateLaunch/DateLaunch"
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
        <h3>{gameDateLaunch}</h3>
        <h3>{gameCost}</h3>
        <button onClick={changeTitleHandler}>Cambiar Titulo</button>
    </GameCard>
  )
}

export default GameItem