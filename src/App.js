import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
