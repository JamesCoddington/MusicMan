import '../App.css';
import { Playlist } from "./playlist";
import { NewPlaylistButton } from "./new-playlist-button";
import { useState } from "react";

export function PlaylistList() {
    const [playlists, setPlaylists] = useState([]);

    const addPlaylist = () => {
        const newPlaylist = (<Playlist></Playlist>)
        setPlaylists([...playlists, newPlaylist]);
    }

    return (
        <>
            <div className="Playlist-List">
                {/* Render each playlist */}
                {playlists.map((playlist, index) => (
                    <Playlist key={index} {...playlist} />
                ))}
                {/* Render the add button */}
                <NewPlaylistButton addPlaylist={addPlaylist}></NewPlaylistButton>
            </div>
        </>
    );
}
