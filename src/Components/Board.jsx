import { useState } from "react";
import Bets from "./Bets";
import Trumps from "./Trumps/Trumps.jsx";
import Players from "./Players/Players.jsx";
import Start from "./Start";

function Board() {

  const [players, setPlayers] = useState([{playerName: undefined, money: 0, id: 0}])    
  const [trumps, setTrumps] = useState([  {trumpName: "10", money: 0, bet: 1}, 
                                          {trumpName: "J", money: 0, bet: 2}, 
                                          {trumpName: "D", money: 0, bet: 3},
                                          {trumpName: "K", money: 0, bet: 4},
                                          {trumpName: "7", money: 0, bet: 5}])

    return (<div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", border: "1px solid red"}}>
        <h1>This is the board</h1>
        <Trumps trumps={trumps} setTrumps={setTrumps} players={players} setPlayers={setPlayers} />
        <Bets trumps={trumps} setTrumps={setTrumps} players={players} setPlayers={setPlayers} />
        <Start players={players} setPlayers={setPlayers} />
        <Players players={players} setPlayers={setPlayers} trumps={trumps} setTrumps={setTrumps}/>
    </div>)
  }
  
export default Board;