import TrumpCard from "./TrumpCard";

function Trumps({trumps}) {

    return (<div style={{border: "2px black solid", display: "flex", flexDirection: "column", heigth: "50%"}}>
        <h2>These are the trumps</h2>
        <div style={{display: "flex"}}>
            {trumps.map(trump => <TrumpCard key={trump.trumpName} trumpName={trump.trumpName} money={trump.money} />)}
        </div>
    </div>)
  }
  
  export default Trumps;
  