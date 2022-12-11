import './App.css';
import React from "react";
import Home from "./components/Home";
import Error from "./layouts/Error";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MemePage from "./components/MemePage";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/meme/:id"  element={<MemePage/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>
            <Footer/>
        </Router>

    );
}

export default App;
