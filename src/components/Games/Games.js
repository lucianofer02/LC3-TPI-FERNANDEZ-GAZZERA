import React from 'react'
import GameItem from '../GameItem/GameItem'

const Games = ({games, filterYear}) => {
    const gamesMapped = games
    .filter((game) => game.dateLaunch.getFullYear().toString() === filterYear)
    .map((game) => (
        <GameItem
            key={game.id}
            gameTitle={game.title}
            gameCost={game.cost}
            gameDateLaunch={game.dateLaunch}
        />
    ));

  return (
    <div className="games">
        {gamesMapped.length === 0 ? (
            <p>No hay juegos disponibles</p>
        ) : (
            gamesMapped
        )}
    </div>
  );
};

export default Games