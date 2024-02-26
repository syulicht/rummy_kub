import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';
import { playersContext, startContext, locationContext } from './hooks/appState';

function App() {
  const [location, setLocation] = useState("start");

  return (
    <>
    <locationContext.Provider value={{location, setLocation}}>
    {location !== "start" ? <GameScreen /> : <StartScreen />}
    </locationContext.Provider>
    </>
  );
}

export default App;
