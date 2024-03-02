import "./styles.css";
import axios from "axios";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}

