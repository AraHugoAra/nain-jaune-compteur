import PlayerCard from "./Players/PlayerCard";
import Start from "./Board/Start"

function Players({players, setPlayers}) {

    const lastPlayerAdded = players[players.length-1]

    function AddPlayer() {
        setPlayers([...players, {playerName: undefined, money:0, key: lastPlayerAdded.key+1}])
    }

    return (<div style={{border: "2px cyan solid", alignSelf: "flex-start", marginLeft: "15%", marginRight: "15%", display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
        <button onClick={() => AddPlayer()}>New Player</button>
        <h1>These are the players</h1>
        <button onClick={() => console.log(players)}>200</button>
        <Start />
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {players.map(item => <PlayerCard number={item.key+1} key={item.key} players={players} setPlayers={setPlayers} money={item.money} />)}
        </div>
    </div>)
  } 
  
  export default Players;
  