import "./App.css";

import Picker from "./components/picker";

function App() {
  return (
    <div className="App">
      <Picker
        onCancel={() => {
          console.log("onCancel");
        }}
      />
    </div>
  );
}

export default App;
