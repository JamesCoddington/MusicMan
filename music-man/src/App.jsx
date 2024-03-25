import './App.css';
import ReactDOM from "react-dom/client";
import { LoginPage } from "./pages/loginPage";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </Router>
        </div>
    )
}