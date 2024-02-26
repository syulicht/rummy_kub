import { Button, Card, CardContent, Input, Stack, Toolbar, Typography } from '@mui/material'
import React, { createRef, useContext, useRef, useState } from 'react'
import { playersContext } from '../hooks/appState'

function InputScore() {
  const {players, setPlayers} = useContext(playersContext);
  const [scores, setScores] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const listRef = useRef([]);
  scores.map((score, index) => listRef.current[index] = createRef());

  const InputScore = (id, value) => {
    var scoresCopy = [...scores];
    if(value.search(/^[-]?[0-9]+$/) === 0) {
      scoresCopy = scoresCopy.map((score, index) => index === id ? value : score);
      setScores(scoresCopy);
      setMessage("");
    } else if(value === ""){
      scoresCopy = scoresCopy.map((score, index) => index === id ? value : score);
      setScores(scoresCopy);
      setMessage("Input Number");
    } else {
      setMessage("Input Number");
      return;
    }
  }

  const calcWinnerScore = () => {
    if(scores.filter(score => score === "").length !== 1){
      return;
    }
    var scoresCopy = [...scores];
    const winnerScore = scoresCopy.reduce((sum, score) => score !== "" ? sum + Number(score) : sum, 0) * -1;
    scoresCopy = scoresCopy.map(score => score !== "" ? score : winnerScore.toString());
    setScores(scoresCopy);
    scoresCopy.map((score, index) => listRef.current[index].current.childNodes[0].value = score);
    setMessage("");
  }

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {players.map((player) => (
          <Card key={player.id} sx={{width: "20%", minHeight: "200px"}}>
            <CardContent>
              <Typography sx={{fontSize: "20px", textAlign : "center"}}>{player.name}</Typography>
            </CardContent>
            <CardContent sx={{textAlign: "center"}}>
              <Input onChange={e => InputScore(player.id, e.target.value)} sx={{backgroundColor: "#103050", color: "white"}} 
                ref={listRef.current[player.id]}/>
            </CardContent>
          </Card>
        ))}
        <Button variant='contained' sx={{width: "100px"}} onClick={calcWinnerScore}>勝利者の値を算出</Button>
      </Stack>
      <Toolbar />
      <Typography>{message}</Typography>
    </div>
  )
}

export default InputScore