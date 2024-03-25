import '../App.css';
import { Button } from "@mui/material";
import { Playlist } from "../components/playlist";
import { PlaylistList } from "../components/playlist-list";
import {useState} from "react";

export function Home() {
    return (
        <>
            <div className="main-page">
                <div className="content">
                    <h1 className="profile-name">James Coddington</h1>
                    <div className="playlist-grid">
                        <PlaylistList></PlaylistList>
                    </div>
                </div>
            </div>
        </>
    );
}