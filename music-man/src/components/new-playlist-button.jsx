import '../App.css';
import {Playlist} from "./playlist";

export function NewPlaylistButton() {

    // const [playlists, setPlaylists] = useState([]);
    //
    // const handleButtonClick = () => {
    //     const newPlaylist = <Playlist/>;
    //     setPlaylists([...playlists, newPlaylist]);
    // };

//     return (
//         <>
//             <button onClick={handleButtonClick}>+</button>
//             {playlists.map((playlist, index) => (
//                 <div key={index}>{playlist}</div>
//             ))}
//         <>
//     );
// };
    const addPlaylist = () => {
        const newPlaylist = (<Playlist></Playlist>)

    }

    return (
        <>
            <button className="new-playlist-button" onClick={addPlaylist}>+</button>
        </>
    );
}