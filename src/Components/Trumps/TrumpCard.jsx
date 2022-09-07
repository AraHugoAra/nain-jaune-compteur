import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";

function TrumpCard({trumpName}) {
    return (<div style={{border: "1px solid green"}}>
        <h3>{trumpName}</h3>
        <MoneyCount />
        <Transaction />
    </div>)
  }
  
  export default TrumpCard;
  