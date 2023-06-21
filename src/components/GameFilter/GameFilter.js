import "./GameFilter.css";

const GameFilter = ({ onFilterYearChange, filterYear }) => {
  const changeYearHandler = (event) => {
    onFilterYearChange(event.target.value);
  };

  return (
    <>
      <div className="Games-filter">
        <div className="Games-filter__control">
          <select onChange={changeYearHandler} value={filterYear}>
            <option value="">Seleccione un año</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2015">2015</option>
            <option value="2013">2013</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default GameFilter;