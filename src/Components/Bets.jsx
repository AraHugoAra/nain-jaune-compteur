import { Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function Bets({ trumps, setTrumps, players, setPlayers }) {
  function trumpsBets() {
    let trumpsPlusBets = [];
    trumps.map((trump) =>
      trumpsPlusBets.push({
        trumpName: trump.trumpName,
        money: (trump.money += trump.bet * players.length),
        bet: trump.bet,
      })
    );
    setTrumps(trumpsPlusBets);
  }

  function playersBets() {
    let playersMinusBets = [];
    players.map((player) =>
      playersMinusBets.push({
        playerName: player.playerName,
        money: (player.money -= 15),
        id: player.id,
      })
    );
    setPlayers(playersMinusBets);
  }

  function handleClick() {
    trumpsBets();
    playersBets();
  }

  return (
    <>
      <Button variant="outlined" size="small" onClick={() => handleClick()}>
        <AttachMoneyIcon />
        Miser
      </Button>
    </>
  );
}

export default Bets;
