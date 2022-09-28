import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function NameForm({players, setPlayers, id, money}) {

    const filteredCurrentPlayer = players.filter(item => item.id !== id)
    const currentPlayer = players.find(item => item.id === id)

    const [state, setState] = useState({formName: "", isValidated: false})

    const [loser, setLoss] = useState(false)

    useEffect(() => {
        money < 0 ? setLoss(true) : setLoss(false)
    }, [money])

    function HandleChange(e) {
        setState({formName: e.target.value, isValidated: state.isValidated})
    }
    function HandleSubmit() {
        setPlayers([...filteredCurrentPlayer, {playerName: state.formName, money: currentPlayer.money, id: currentPlayer.id}])
        setState({isValidated: true})

    }
    
    return (<>
        {!state.isValidated ? (
            <form>
                <TextField
                    size="small"
                    onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                    type="text"
                    id="form-name" 
                    label="Nom du Joueur" 
                    variant="outlined"
                    onChange={(e) => HandleChange(e)}
                />
                <Button variant="outlined" size="small" onClick={(e) => HandleSubmit(e)}>OK</Button>
            </form>
        ) : (
            <h2>{currentPlayer.playerName} {loser && <span>Loser</span>}</h2>
        )
        }
    </>)
  }
  
  export default NameForm;
  