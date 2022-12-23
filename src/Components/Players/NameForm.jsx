import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function NameForm({ players, setPlayers, id, money }) {
  const filteredCurrentPlayer = players.filter((item) => item.id !== id);
  const currentPlayer = players.find((item) => item.id === id);

  const [state, setState] = useState({ formName: "", isValidated: false });

  function HandleChange(e) {
    setState({ formName: e.target.value, isValidated: state.isValidated });
  }
  function HandleSubmit() {
    setPlayers([
      ...filteredCurrentPlayer,
      {
        playerName: state.formName,
        money: currentPlayer.money,
        id: currentPlayer.id,
      },
    ]);
    state.formName !== "" && setState({ isValidated: true });
  }

  return (
    <>
      {!state.isValidated ? (
        <form>
          <TextField
            inputProps={{ maxLength: 9 }}
            size="small"
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            type="text"
            id="form-name"
            label="Nom du Joueur"
            variant="outlined"
            onChange={(e) => HandleChange(e)}
          />
          <Button
            variant="outlined"
            size="small"
            onClick={(e) => HandleSubmit(e)}
          >
            OK
          </Button>
        </form>
      ) : (
        <h2>{currentPlayer.playerName}</h2>
      )}
    </>
  );
}

export default NameForm;
