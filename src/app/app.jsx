import react, {useRef, useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css'

import Navbar from '../components/Navbar'

const App = () => {

    const navbarRef = useRef(null);

    return(
        <Router>
            <div className="App">
                <div ref={navbarRef}>
                    <Navbar/>
                </div>
                <Routes>
                    {/*
                    <Route path="/" element={<Home/>}/>
                    */}
                </Routes>
            </div>
        </Router>
    )
}

export default App;