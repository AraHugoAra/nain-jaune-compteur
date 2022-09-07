import TrumpCard from "./TrumpCard";

function Trumps({players}) {
    return (<div style={{border: "2px black solid", display: "flex", flexDirection: "column", heigth: "50%"}}>
        <h2>These are the trumps</h2>
        <div style={{display: "flex"}}>
            <TrumpCard trumpName="10🔶" />
            <TrumpCard trumpName="J☘" />
            <TrumpCard trumpName="D🗻" />
            <TrumpCard trumpName="K❤" />
            <TrumpCard trumpName="7🔶" />
        </div>
    </div>)
  }
  
  export default Trumps;
  