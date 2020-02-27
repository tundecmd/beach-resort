import React from 'react';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import SingleRooms from './pages/SingleRooms';
import Error from './pages/Error';
//import './App.css';


function App() {
  return (
    <div className="App">
      <h1>hello from app</h1>
      <Home />
      <Rooms />
      <Error />
      <SingleRooms />
    </div>
  );
}

export default App;
