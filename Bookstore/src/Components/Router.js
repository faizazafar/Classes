import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Addbook } from '../Pages/Addbook';
import { BookList } from '../Pages/BookList';
import{ Home} from '../Pages/Home'





export const MyRouter = () => {
    return (
        
            <Router >
              <div>
      <div />
        <nav>
          <ul >
            <li >
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/Addbook">Add Book</Link>
            </li>
            <li>
              <Link to="/BookList">BookList</Link>
            </li>

          </ul>
        </nav>
                <Routes>
                <Route path="/" element={<Home/>} />
                    <Route path="/Addbook" element={<Addbook/>} />
                    <Route path="/BookList" element={<BookList/>} />
                    {/* <Route path="/:id" element={<SubPost/>} /> */}

                    {/* :id to make dynamic  */}
                </Routes>
                </div>
            </Router>
        
    )
}