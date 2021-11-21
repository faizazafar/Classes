import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { Post } from './Post';
import { SubPost } from './SubPost';




export const MyRouter = () => {
    return (
        
            <Router >
              <div>
      <div />
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact </Link>
            </li>
            <li>
              <Link to="/posts">Post </Link>
            </li>
          </ul>
        </nav>
                <Routes>
                <Route path="/" element={<Home/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Contact" element={<Contact/>} />
                    <Route path="/posts" element={<Post/>} />
                    <Route path="/posts/:id" element={<SubPost/>} />
                    {/* <Route path="/:id" element={<SubPost/>} /> */}

                    {/* :id to make dynamic  */}
                </Routes>
                </div>
            </Router>
        
    )
}
