import { Box, Button, Card, CardContent, FormLabel, Input, Toolbar } from '@mui/material'
import React, { useContext, useState } from 'react'
import { locationContext, playersContext, startContext } from '../hooks/appState'
import { WidthFull } from '@mui/icons-material';

function StartScreen(props) {
    const {players, setPlayers} = useContext(playersContext);
    const {location, setLocation} = useContext(locationContext);

    const InputName = (value, id) => {
        var playersCopy = [...players];
        var changePlayer = players[id];
        changePlayer.name = value;
        playersCopy.map(p => p.id === id ? changePlayer : p);
        setPlayers(playersCopy);
    }

    const ButtonDown = (e) => {
        if(players.some(player => player.name === "")){
            return;
        }


        setLocation("input");
    }
  return (
    <div className='StartScreen'>
    <Card
    variant='outlined'
    className='StartCard'
    >
        {
            players.map(player => 
                (<CardContent className='InputPlayerName' key={player.id}>
                <FormLabel>Player{player.id}</FormLabel>
                <Input variant='outlined' onChange={e => InputName(e.target.value, player.id)}/>
                </CardContent>)
            )
        }

        <CardContent
        sx={{width: "100%"}}
        >
            <Button onClick={e => ButtonDown(e)} sx={{backgroundColor: "marine"}}>Start</Button>
        </CardContent>

    </Card>
    </div>
  )
}

export default StartScreen