import '../App.css';
import {Playlist} from "./playlist";
import {NewPlaylistButton} from "./new-playlist-button";

export function PlaylistList() {
    return (
        <>
            <div className="Playlist-List">
                <Playlist></Playlist>
                <NewPlaylistButton></NewPlaylistButton>
            </div>
        </>
    )
}