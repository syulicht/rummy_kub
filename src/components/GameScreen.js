import React, { useContext } from 'react'
import { useState } from 'react';
import { locationContext, menuContext } from '../hooks/appState';
import Header from './Header';
import MenuDrawer from './MenuDrawer';
import Check from './check';
import InputScore from './Input';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Toolbar } from '@mui/material';



function GameScreen() {
    const [isOpened, setOpened] = useState(false);
    const {location, setLocation} = useContext(locationContext);
  return (
    <>
    <menuContext.Provider value={{isOpened, setOpened}}>
      <Header />
      <MenuDrawer open={isOpened}/>
    </menuContext.Provider>
    <Toolbar />
    {location === "input" && (<InputScore />)}
    {location === "check" && (<Check />)}    
    </>
  )
}

export default GameScreen