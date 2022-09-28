import { Button } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Start({players, setPlayers}) {

    function giveTokens() {
        let playersPlusTwoHundred = []
        players.map(player => playersPlusTwoHundred.push({playerName: player.playerName, id: player.id, money: player.money+200}))
        setPlayers(playersPlusTwoHundred)
    }

    return (<>
        <Button variant="outlined" size="small" onClick={() => giveTokens()} ><AttachMoneyIcon />+200</Button>
    </>)
  }
  
  export default Start;