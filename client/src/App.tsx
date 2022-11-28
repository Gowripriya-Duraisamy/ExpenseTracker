import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import { AuthContextProvider } from "./context/auth-context";
import RenderRoutes, {routes} from "./routes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <StyledEngineProvider injectFirst>
          {RenderRoutes(routes)}
        </StyledEngineProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
