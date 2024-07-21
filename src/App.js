import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/main/Home/Home';
import ToDo from './components/toDo/ToDo';
import Calculator from './components/calculator/Calculator';
import Weather from './components/weather/Weather';
import Game from './components/Game/Game';

function App() {
  return (
    // <Router>

      
    //   <Routes>
    //     <Route path="/" element={<Weather/>} />
    //     <Route path="/ToDo" element={<ToDo/>} />
    //     <Route path="/Calculator" element={<Calculator/>} />
    //     <Route path="/Weather" element={<Weather/>} />
    //     <Route path="/Game" element={<Game/>} />
    //   </Routes>
    // </Router>

    <>
    <Weather/>
    </>
    
  );
}

export default App;
