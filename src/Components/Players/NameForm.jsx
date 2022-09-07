import { useEffect, useState } from "react";

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
    function HandleSubmit(e) {
        e.preventDefault()
        setPlayers([...filteredCurrentPlayer, {playerName: state.formName, money: currentPlayer.money, id: currentPlayer.id}])
        setState({isValidated: true})

    }
    
    return (<>
        {!state.isValidated ? (
            <form>
                <input  name="form-name" 
                        type="text" 
                        placeholder="Nom du Joueur" 
                        onChange={(e) => HandleChange(e)}>
                </input>
                <button onClick={(e) => HandleSubmit(e)}>OK</button>
            </form>
        ) : (
            <h2>{currentPlayer.playerName} {loser && <span>Loser</span>}</h2>
        )
        }
    </>)
  }
  
  export default NameForm;
  