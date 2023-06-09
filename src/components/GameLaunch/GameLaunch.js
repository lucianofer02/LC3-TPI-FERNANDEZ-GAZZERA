

const GameLaunch = ({ gameDateLaunch }) => {
    const year = gameDateLaunch.getFullYear();
    const month = gameDateLaunch.toLocaleString("es-AR", { month: "long" });
    const day = gameDateLaunch.toLocaleString("es-AR", { day: "2-digit" });
  return (
    <div className="date-container">
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
    </div>
  )
}

export default GameLaunch