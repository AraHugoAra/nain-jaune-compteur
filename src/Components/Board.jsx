import { useState } from "react";
import Bets from "./Bets";
import Trumps from "./Trumps/Trumps.jsx";
import Players from "./Players/Players.jsx";
import Start from "./Start";

function Board() {

  const [players, setPlayers] = useState([{playerName: undefined, money: 0, id: 0}])

    return (<div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", border: "1px solid red"}}>
        <h1>This is the board</h1>
        <Trumps players={players} setPlayers={setPlayers} />
        <Bets />
        <Start players={players} setPlayers={setPlayers} />
        <Players players={players} setPlayers={setPlayers} />
    </div>)
  }
  
export default Board;