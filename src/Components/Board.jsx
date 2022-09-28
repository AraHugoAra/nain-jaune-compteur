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

  const lastPlayerAdded = players[players.length-1]

  function AddPlayer() {
    setPlayers([...players, {playerName: undefined, money:0, id: lastPlayerAdded.id+1}])
  }

    return (<div>
        <Trumps trumps={trumps} setTrumps={setTrumps} players={players} setPlayers={setPlayers} />
        <button onClick={() => AddPlayer()}>New Player</button>
        <Bets trumps={trumps} setTrumps={setTrumps} players={players} setPlayers={setPlayers} />
        <Start players={players} setPlayers={setPlayers} />
        <Players players={players} setPlayers={setPlayers} trumps={trumps} setTrumps={setTrumps}/>
    </div>)
  }
  
export default Board;