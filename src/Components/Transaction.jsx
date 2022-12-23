import { useState } from "react";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function Transaction({
  players,
  setPlayers,
  itemId,
  trumps,
  setTrumps,
  trumpTransaction,
  trumpName,
}) {
  // Tableau de correspondance entre les index et les bet des trumps (10.bet = 1 donc premier index du tableau est le nom à afficher)
  const displayedTrumps = ["10", "Valet", "Dame", "Roi", "7"];

  const [transaction, setTransaction] = useState({ quantity: 0, creditor: "" });
  let playersAfterTransaction = [];
  let trumpsAfterTransaction = [];

  function handleSelect(e) {
    e.preventDefault();
    setTransaction({
      quantity: transaction.quantity,
      creditor: e.target.value,
    });
  }
  function handleInput(e) {
    e.preventDefault();
    setTransaction({
      quantity: e.target.value,
      creditor: transaction.creditor,
    });
  }
  function playerSideTransaction() {
    players.map((player) => {
      if (player.id === itemId) {
        // Action à suivre pour débiter la bonne personne
        playersAfterTransaction.push({
          playerName: player.playerName,
          id: player.id,
          money: (player.money -= parseFloat(transaction.quantity)),
        });
      } else if (player.playerName === transaction.creditor) {
        // Action à suivre pour créditer la bonne personne
        playersAfterTransaction.push({
          playerName: player.playerName,
          id: player.id,
          money: (player.money += parseFloat(transaction.quantity)),
        });
      } else {
        // Action à suivre pour les personnes non concernées
        playersAfterTransaction.push({
          playerName: player.playerName,
          id: player.id,
          money: player.money,
        });
      }
    });
    setPlayers(playersAfterTransaction);
  }

  function trumpSideTransaction() {
    trumps.map((trump) => {
      if (trump.trumpName === trumpName) {
        // Action à suivre pour débiter le bon atout
        trumpsAfterTransaction.push({
          trumpName: trump.trumpName,
          money: (trump.money -= parseFloat(transaction.quantity)),
          bet: trump.bet,
        });
      } else if (trump.trumpName === transaction.creditor) {
        // Action à suivre pour créditer le bon atout
        trumpsAfterTransaction.push({
          trumpName: trump.trumpName,
          money: (trump.money += parseFloat(transaction.quantity)),
          bet: trump.bet,
        });
      } else {
        // Action à suivre pour les atouts non concernés
        trumpsAfterTransaction.push({
          trumpName: trump.trumpName,
          money: trump.money,
          bet: trump.bet,
        });
      }
    });
    setTrumps(trumpsAfterTransaction);
  }

  function handleTransaction() {
    // On vérfie que le montant est bien un nombre entier et qu'un créditeur est défini
    if (
      !isNaN(transaction.quantity) &
      (transaction.quantity > 0) &
      (transaction.creditor !== "") &
      Number.isInteger(parseFloat(transaction.quantity))
    ) {
      playerSideTransaction();
      trumpSideTransaction();
    }
  }

  return (
    <div>
      <TextField
        size="small"
        type="text"
        id="quantity"
        label="Montant"
        variant="outlined"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        onChange={(e) => handleInput(e)}
      />
      <FormControl fullWidth size="small">
        <InputLabel id="creditors">Pour: </InputLabel>
        <Select
          labelId="creditors"
          id="creditors-select"
          value={transaction.creditor}
          label="creditor"
          onChange={(e) => handleSelect(e)}
        >
          {/* Mapper les players pour les lister dans les potentiels crédités */}
          {players.map(
            (player) =>
              player.playerName !== "" && (
                <MenuItem key={player.id} value={player.playerName}>
                  {player.playerName}
                </MenuItem>
              )
          )}
          {/* Mapper les trumps pour les lister dans les potentiels crédités SI le créditeur n'est pas un trump */}
          {trumps.map(
            (trump) =>
              !trumpTransaction && (
                <MenuItem key={trump.trumpName} value={trump.trumpName}>
                  {displayedTrumps[trump.bet - 1]}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleTransaction()}
      >
        <AttachMoneyIcon />
        Payer
      </Button>
    </div>
  );
}

export default Transaction;
