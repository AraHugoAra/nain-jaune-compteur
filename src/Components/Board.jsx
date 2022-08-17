import { useState } from "react";
import Trumps from "./Board/Trumps/Trumps";
import Players from "./Players";

function Board() {

  const [players, setPlayers] = useState([{playerName: undefined, money: 0, key: 0}])

    return (<div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", border: "1px solid red"}}>
        <Trumps players={players} setPlayers={setPlayers} />
        <Players players={players} setPlayers={setPlayers} />
    </div>)
  }
  
export default Board;