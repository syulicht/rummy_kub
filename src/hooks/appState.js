import { createContext } from "react";


const  menuContext = createContext({
    isOpened: false,
    setOpened: (isOpened) => {}
});

const  startContext = createContext({
    isStart: false,
    setStart: (isStart) => {}
});

const playersContext = createContext({
    players:[...Array(4)].map((value, index) => {return {id : index, name: "", score: 0}}),
    setPlayers: (players) => {}
});

const locationContext = createContext({
    location: "start",
    setLocation : (location) => {}
})

export {menuContext, startContext, playersContext, locationContext};