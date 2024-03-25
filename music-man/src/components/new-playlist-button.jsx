import '../App.css';

export function NewPlaylistButton({addPlaylist}) {
    return (
        <>
            <button className="new-playlist-button" onClick={addPlaylist}>+</button>
        </>
    );
}