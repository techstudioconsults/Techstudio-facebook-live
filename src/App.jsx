import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Register from "./pages/registration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={`/`} element={<Home />} />
          <Route exact path={`/register`} element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
