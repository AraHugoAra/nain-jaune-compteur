import { useState } from "react";
import Bets from "./Bets";
import Trumps from "./Trumps/Trumps.jsx";
import Players from "./Players/Players.jsx";
import Start from "./Start";
import { Button } from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

function Board() {

  const [players, setPlayers] = useState([{playerName: undefined, money: 0, id: 0}])    
  const [trumps, setTrumps] = useState([  {trumpName: "ten", money: 0, bet: 1}, 
                                          {trumpName: "J", money: 0, bet: 2}, 
                                          {trumpName: "D", money: 0, bet: 3},
                                          {trumpName: "K", money: 0, bet: 4},
                                          {trumpName: "seven", money: 0, bet: 5}])

  const lastPlayerAdded = players[players.length-1]

  function AddPlayer() {
    setPlayers([...players, {playerName: undefined, money:0, id: lastPlayerAdded.id+1}])
  }

    return (<div className="container__main">
        <Trumps trumps={trumps} setTrumps={setTrumps} players={players} setPlayers={setPlayers} />
        <div className = "container__main--buttons">
          <Button
            disabled={players.length >= 8 && true} 
            variant="outlined" 
            size="small" 
            onClick={() => AddPlayer()}
          >
            <PersonAddAlt1Icon className="button__icon" />Joueur
          </Button>
          <Bets trumps={trumps} setTrumps={setTrumps} players={players} setPlayers={setPlayers} />
          <Start players={players} setPlayers={setPlayers} />
        </div>
        <Players players={players} setPlayers={setPlayers} trumps={trumps} setTrumps={setTrumps}/>
    </div>)
  }
  
export default Board;