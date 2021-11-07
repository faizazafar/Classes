import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout";
import { Aboutus } from "./components/Aboutus";
import { Contact } from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Layout />}>
            <Layout />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
