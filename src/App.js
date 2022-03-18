import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Error } from "./pages/Error/Error";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Player } from "./pages/Player/Player";
import { Login2 } from "./pages/Login2/Login2";
import { Swapper } from "./pages/Swapper/Swapper";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/player/:movieID" element={<Player />} />
          <Route path="/player" element={<Player />} />
          <Route path="/Swap" element={<Swapper />} />
          <Route path="/login" element={<Login2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
