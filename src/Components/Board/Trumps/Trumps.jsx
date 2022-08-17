import TrumpCard from "./TrumpCard";
import Bets from "../Bets";

function Trumps({players}) {
    return (<div style={{border: "2px black solid", display: "flex", flexDirection: "column", heigth: "50%"}}>
        <h2>These are trumps</h2>
        <div style={{display: "flex"}}>
            <TrumpCard trumpName="10🔶" />
            <TrumpCard trumpName="J☘" />
            <TrumpCard trumpName="D🗻" />
            <TrumpCard trumpName="K❤" />
            <TrumpCard trumpName="7🔶" />
        </div>
        <Bets />
    </div>)
  }
  
  export default Trumps;
  