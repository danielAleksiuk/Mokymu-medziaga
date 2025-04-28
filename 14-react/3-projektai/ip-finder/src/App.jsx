

import './App.css'

import Map, {Marker}  from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import Home from './pages/Home';

function App() {

  const API_KEY = 'pk.eyJ1IjoiZGFsZXg5MjEiLCJhIjoiY205djI1MWNpMGVxZTJwczY4b3FsY3UwaiJ9.ylfeJS2w4r5WfoXu9J5acQ';

  return (
    <>
      <Home/>
    </>
  )
}

export default App
