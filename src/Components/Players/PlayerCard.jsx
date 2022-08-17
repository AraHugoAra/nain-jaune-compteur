import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";
import NameForm from "./NameForm";

function PlayerCard({players, setPlayers, number, money}) {

    const filteredCurrentPlayer = players.filter(item => item.key !== number-1)

    function DeletePlayer() {
        setPlayers(filteredCurrentPlayer)
    }

    return (<div style={{diplay: "flex", flexDirection: "column", margin:"10px", border: "1px solid red"}}>
        <p>Player #{number}</p>
        {players.length > 1 && <button onClick={() => DeletePlayer()}>Delete</button>}
        <NameForm />
        <MoneyCount money={money} />
        <Transaction />
    </div>)
  }
  
  export default PlayerCard;
  