import { useState } from 'react'
import './App.css';
import Album from './components/Album';

function App() {
  const [artist, setArtist] = useState('A.R. Rahman')
  const [album, setAlbum] = useState('Rockstar')
  const [albumCover, setAlbumCover] = useState('https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg')

  return (
    <div className="App">
      <Album artist={artist} album={album} albumCover={albumCover}/>
    </div>
  );
}

export default App;
