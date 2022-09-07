import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";

function TrumpCard({trumpName, money}) {

    return (<div style={{border: "1px solid lightgreen"}}>
        <h3>{trumpName}</h3>
        <MoneyCount money={money} />
        <Transaction />
    </div>)
  }
  
  export default TrumpCard;
  