import '../App.css';
import {Button, ThemeProvider} from "@mui/material";
import { Link } from "react-router-dom";
import { spotifyLogin } from "../functions/spotifyLogin";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#16863e',
        },
    },
});

export function LoginPage() {

    const callOnClick = () => {
        spotifyLogin();
    }



    return (
        <ThemeProvider theme={theme}>
            <div className="SignInBox">
                <h1>Music Man</h1>
                <div className="sign-in-buttons">
                    <Button variant="contained" className="log-button" onClick={ callOnClick }>
                        Sign in with Spotify
                    </Button>
                    <Link to="https://www.spotify.com/us/premium/">
                        <Button variant="contained" className="log-button">
                            Get Spotify
                        </Button>
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    );
}