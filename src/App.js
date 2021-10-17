import "./App.scss";
import Routes from "./Routes";
import { useLocation, Redirect } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return <Redirect to="/challenge_1" />;
  }
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
