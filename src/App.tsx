import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import PickerWithMUI from "./components/picker-with-mui";

function App() {
  const materialTheme = createTheme({
    palette: {
      primary: {
        main: "#202020", // 不支持纯文字的颜色，如red. 只能用rgb之类的颜色
      },
      secondary: {
        main: "#FFFFFF",
      },
      error: {
        main: "#CC2227",
      },
      background: {
        default: "#FCFCFC",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={materialTheme}>
        <PickerWithMUI />
      </ThemeProvider>
    </div>
  );
}

export default App;
