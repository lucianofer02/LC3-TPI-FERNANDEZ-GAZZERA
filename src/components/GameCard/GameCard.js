import "./GameCard.css";

const GameCard = ({ children }) => {
  return <div className="game-item-container">{children}</div>;
};

export default GameCard;