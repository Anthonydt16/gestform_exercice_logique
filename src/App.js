


import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Jeux from "./pages/Jeux";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Jeux" element={<Jeux/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
