import logo from "./logo.svg";
import "./App.css";

import Picker from "./components/picker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Picker />
      </header>
    </div>
  );
}

export default App;
