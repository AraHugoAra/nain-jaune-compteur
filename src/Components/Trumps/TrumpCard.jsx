import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";
import { Card } from "@mui/material";

function TrumpCard({trumpName, money, players, setPlayers, trumps, setTrumps}) {

    return (<div>
        <Card variant="outlined">
            <h1>{trumpName}</h1>
            <MoneyCount money={money} />
            <Transaction 
                players={players} 
                setPlayers={setPlayers} 
                trumps={trumps} 
                setTrumps={setTrumps} 
                trumpTransaction={true} 
                trumpName={trumpName} 
            />
        </Card>
    </div>
    )
  }
  
  export default TrumpCard;
  