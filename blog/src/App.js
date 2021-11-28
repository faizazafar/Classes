import logo from './logo.svg';
import './App.css';
import Navbar from './Comp/Navbar'
import { Homepage } from './Pages/Homepage';
import ResponsiveAppBar from './Comp/ResposiveAppBar'
import { Create } from './Pages/Create';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <ResponsiveAppBar/>
     <Routes>
     <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Create/>} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
