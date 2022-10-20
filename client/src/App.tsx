import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import RenderRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>{RenderRoutes()}</StyledEngineProvider>
    </div>
  );
}

export default App;
