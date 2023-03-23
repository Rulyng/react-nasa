import { Routes, Route} from "react-router-dom";
import Apod from "./pages/apod/Apod";
import Home from "./pages/home/Home";
import Rovers from "./pages/rovers/Rovers";
import './main.scss'
import Nasaimage from "./pages/nasaimage/Nasaimage";




function App() {
  return (
<div className="wrapper">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apod" element={<Apod/>} />
        <Route path="/rover" element={<Rovers/>} />
        <Route path="/nasa-image" element={<Nasaimage/>} />
      </Routes>
</div>
  );
}

export default App;
