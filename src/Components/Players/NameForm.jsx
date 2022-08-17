import { useState } from "react";

function NameForm() {

    const [state, setState] = useState({playerName: "", isValid: false})

    function HandleChange(e) {
        setState({playerName: e.target.value, isValid: state.isValid})
    }
    function HandleSubmit(e) {
        e.preventDefault()
        setState({playerName: state.playerName, isValid: true})

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
            <h2>{state.playerName}</h2>
        )
        }
    </>)
  }
  
  export default NameForm;
  