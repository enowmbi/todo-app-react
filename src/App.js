import { useState, useEffect } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import './App.css';

function App() {
    
    return (
        <div className="App">
        <Header/>
            <main className="App-main">
                <h3>Put a new form here </h3>
            </main>
        <Footer/>
        </div>
    );
}

export default App;
