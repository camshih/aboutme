import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import About from './About'
import Contact from './Contact';
// import Home from './Home';

const Navbar = () => {
  return (
    <div className='px-8'>
        <nav>
            {/* <Link to="/">Home</Link> */}
            <Link to="/about">About</Link>
            <Link to="contact">Contact</Link>
        </nav>
        <Routes>
            {/* <Route path="/" element={<Home />}/> */}
            <Route path="/about" element={<About />}/>
            <Route path="/contact/:email" element={<Contact />} />
        </Routes> 
    </div>
  )
}

export default Navbar