import './App.css';
import { LoginPage } from "./pages/loginPage";
import { Home } from "./pages/home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;