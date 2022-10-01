import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";
import NameForm from "./NameForm";
import { Button } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function PlayerCard({players, setPlayers, money, id, trumps, setTrumps}) {

    const filteredCurrentPlayer = players.filter(item => item.id !== id)

    function DeletePlayer() {
        setPlayers(filteredCurrentPlayer)
    }

    return (<div className="card">
            {players.length > 1 && <Button className = "button__delete" variant="outlined" size="small" onClick={() => DeletePlayer()}><DeleteForeverOutlinedIcon /></Button>}
            <NameForm players={players} setPlayers={setPlayers} id={id} money={money} />
            <MoneyCount money={money} />
            <Transaction players={players} setPlayers={setPlayers} itemId={id} trumps={trumps} setTrumps={setTrumps} />
    </div>)
  }
  
  export default PlayerCard;
  