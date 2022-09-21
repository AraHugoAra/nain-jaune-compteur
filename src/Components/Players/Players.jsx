import PlayerCard from "./PlayerCard";

function Players({players, setPlayers, trumps, setTrumps}) {

    const lastPlayerAdded = players[players.length-1]

    function AddPlayer() {
        setPlayers([...players, {playerName: undefined, money:0, id: lastPlayerAdded.id+1}])
    }

    return (<div style={{border: "2px cyan solid", alignSelf: "flex-start", marginLeft: "15%", marginRight: "15%", display: "flex", flexDirection: "column", flexWrap: "wrap"}}>
        <button onClick={() => AddPlayer()}>New Player</button>
        <h1>These are the players</h1>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {players.map(item => <PlayerCard number={item.id+1} key={item.id} players={players} setPlayers={setPlayers} money={item.money} id={item.id} trumps={trumps} setTrumps={setTrumps} />)}
        </div>
    </div>)
  } 
  
  export default Players;
  