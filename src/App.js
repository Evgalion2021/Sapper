import "./App.css";
import GameField from "./components/GameField/GameField.jsx";

const App = (props) => {
  let matchesFinder = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return true;
      }
    }
    return false;
  };

  let whereMines = () => {
    let mines = [];
    let mineGenerator = null;
    let mineCount = 10;
    let rowMineGenerator = null;
    let cellMineGenerator = null;
    for (let i = 0; i < mineCount; i++) {
      rowMineGenerator = Math.ceil(Math.random() * 8);
      cellMineGenerator = Math.ceil(Math.random() * 8);
      mineGenerator = rowMineGenerator + "." + cellMineGenerator;
      console.log(mineGenerator);
      if (matchesFinder(mines, mineGenerator)) {
        mineCount++;
      } else {
        mines.push(mineGenerator);
      }
    }
    return mines;
  };
  let mines = whereMines();

  return (
    <div>
      <GameField mines={mines} />
    </div>
  );
};

export default App;
