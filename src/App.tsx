import { lazy } from "react";
import { ThemeProvider } from "./context/Theme-context";
const HomePage=lazy(()=>import("./pages/HomePage"))
import "./styles/App.scss";

function App() {
  return (
    <ThemeProvider>
      <div className="container"><HomePage/></div>
    </ThemeProvider>
  );
}

export default App;
