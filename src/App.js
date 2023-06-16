import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Aboutus from './pages/Aboutus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/About-us" element={<Aboutus />} />

    </Routes>
  );
}

export default App;
