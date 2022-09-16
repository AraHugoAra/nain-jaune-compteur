import { useState } from "react";

function Transaction({players, setPlayers, playerId}) {

    const [transaction, setTransaction] = useState({quantity: 0, creditor: undefined})

    function handleSelect(e) {
        setTransaction({quantity: transaction.quantity, creditor: e.target.value})
    }
    function handleInput(e) {
        setTransaction({quantity: e.target.value, creditor: transaction.creditor})
    }

    function handleTransaction() {    
        let playersAfterTransaction = []
        //S'assurer que le montant est positif et qu'un destinataire est bien selectionné
        if(!isNaN(transaction.quantity) & transaction.quantity > 0 & transaction.creditor !== undefined) {
        players.map(player => 
            {if (player.id === playerId) {
                // Action à suivre pour débiter la bonne personne
                playersAfterTransaction.push({
                    playerName: player.playerName, 
                    id: player.id, 
                    money: player.money -= parseFloat(transaction.quantity)
                })
            } else if (player.playerName === transaction.creditor) {
                // Action à suivre pour créditer la bonne personne
                playersAfterTransaction.push({
                    playerName: player.playerName, 
                    id: player.id, 
                    money: player.money += parseFloat(transaction.quantity)
                })
            } else {
                // Action à suivre pour les personnes non concernées
                playersAfterTransaction.push({playerName: player.playerName, id: player.id, money: player.money})
            }})
        setPlayers(playersAfterTransaction)
        }
    }

    return (<>
        <button onClick={() => handleTransaction()}>Transaction</button>
        {/*     A éviter avec css   */}
        <br /><br />
        {/*     A éviter avec css   */}
        <label htmlFor="quantity">This much: </label>
            <input onChange={(e) => handleInput(e)} type="number" id="quantity" name="quantity" min="1" />
        <br />
        <label htmlFor="creditors">To: </label>
            <select onChange={(e) => handleSelect(e)} id="creditors">
                <option value="undefined"></option>
                {players.map(player => player.playerName !== undefined && 
                    <option key={player.id} value={player.playerName}>{player.playerName}</option>
                )}
        </select>
    </>)
  }
  
  export default Transaction;
  