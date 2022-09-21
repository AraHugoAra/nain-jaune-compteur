import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";
import NameForm from "./NameForm";

function PlayerCard({players, setPlayers, number, money, id, trumps, setTrumps}) {

    const filteredCurrentPlayer = players.filter(item => item.id !== id)

    function DeletePlayer() {
        setPlayers(filteredCurrentPlayer)
    }

    return (<div style={{diplay: "flex", flexDirection: "column", margin:"10px", border: "1px solid red"}}>
        {players.length > 1 && <button onClick={() => DeletePlayer()}>Delete</button>}
        <p>Player #{number}</p>
        <NameForm players={players} setPlayers={setPlayers} id={id} money={money} />
        <MoneyCount money={money} />
        <Transaction players={players} setPlayers={setPlayers} itemId={id} trumps={trumps} setTrumps={setTrumps} />
    </div>)
  }
  
  export default PlayerCard;
  