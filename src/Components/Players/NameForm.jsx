import { useState } from "react";

function NameForm({players, setPlayers, id}) {

    const filteredCurrentPlayer = players.filter(item => item.id !== id)
    const currentPlayer = players.find(item => item.id === id)

    const [state, setState] = useState({formName: "", isValid: false})

    function HandleChange(e) {
        setState({formName: e.target.value, isValid: state.isValid})
    }
    function HandleSubmit(e) {
        e.preventDefault()
        setPlayers([...filteredCurrentPlayer, {playerName: state.formName, money: currentPlayer.money, id: currentPlayer.id}])
        setState({isValid: true})

    }
    
    return (<>
        {!state.isValid ? (
            <form>
                <input  name="form-name" 
                        type="text" 
                        placeholder="Nom du Joueur" 
                        onChange={(e) => HandleChange(e)}>
                </input>
                <button onClick={(e) => HandleSubmit(e)}>OK</button>
            </form>
        ) : (
            <h2>{currentPlayer.playerName}</h2>
        )
        }
    </>)
  }
  
  export default NameForm;
  