import logo from './logo.svg';
import './App.css';
import { MyRouter } from './Components/Router';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Addbook } from './Pages/Addbook'
import { BookList } from './Pages/BookList';
import{ Home} from './Pages/Home'
import Header from './Components/Header';
import HeaderLink from './Components/Header';



function App() {
  return (
    <div className="App">
     <MyRouter></MyRouter>
     {/* <HeaderLink></HeaderLink>

     <Router>
       <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/AddBook' component={Addbook} />
        <Route exact path='/BookList' component={BookList} />
        </Routes>
      </Router> */}


    </div>
  );
}

export default App;
