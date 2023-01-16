import { useState, useEffect } from "react"
import Header from "./components/header"
import './App.css';

function App() {
    
    return (
        <div className="App">
        <Header/>
            <main className="App-main">
                <h3>Put a new form here </h3>
            </main>
            <footer className="App-footer">
                <h3>put footer here</h3>
            </footer>
        </div>
    );
}

export default App;
