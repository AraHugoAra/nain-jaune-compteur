import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";

function TrumpCard({trumpName, money, players, setPlayers, trumps, setTrumps}) {

    return (<div style={{border: "1px solid lightgreen"}}>
        <h3>{trumpName}</h3>
        <MoneyCount money={money} />
        <Transaction players={players} setPlayers={setPlayers} trumps={trumps} setTrumps={setTrumps} trumpTransaction={true} trumpName={trumpName} />
    </div>)
  }
  
  export default TrumpCard;
  