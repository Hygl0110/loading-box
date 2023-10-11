import "./App.css";
import LoadsBox from "./Components/Pages/LoadsBox/LoadsBox";
import { calcRowTable } from "./Logic/Calcular";

const Row = calcRowTable("Motor", 4, "hp", 0.85, 3, 220, 20);
console.log(Row);

export default function App() {
  return (
    <div className="App">
      <LoadsBox />
    </div>
  );
}
