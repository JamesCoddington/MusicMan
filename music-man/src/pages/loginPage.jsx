import '../App.css';
import { Button } from "@mui/material";
import { Link } from "react-router-dom"

export function LoginPage() {
    return (
        <div className="SignInBox">
            <h1>Music Man</h1>
            <div className="sign-in-buttons">
                <Link to="/home">
                    <Button variant="contained" className="log-button">
                        Sign in with Spotify
                    </Button>
                </Link>
                <Button variant="contained" className="log-button">
                    Get Spotify
                </Button>
            </div>
        </div>
    );
}