import TrumpCard from "./TrumpCard";

function Trumps({players, setPlayers, trumps, setTrumps}) {

    return (<div>
        <div style={{display: "flex"}}>
            {trumps.map(trump => <TrumpCard key={trump.trumpName} trumpName={trump.trumpName} money={trump.money} trumps={trumps} setTrumps={setTrumps} players={players} setPlayers={setPlayers} />)}
        </div>
    </div>)
  }
  
  export default Trumps;
  