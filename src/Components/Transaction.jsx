import { useState } from "react";

function Transaction({players, setPlayers, itemId, trumps, setTrumps, trumpTransaction, trumpName}) {

    const [transaction, setTransaction] = useState({quantity: 0, creditor: undefined})
    let playersAfterTransaction = []
    let trumpsAfterTransaction = []

    function handleSelect(e) {
        setTransaction({quantity: transaction.quantity, creditor: e.target.value})
    }
    function handleInput(e) {
        setTransaction({quantity: e.target.value, creditor: transaction.creditor})
    }
    function playerSideTransaction() {
        players.map(player => 
            {if (player.id === itemId) {
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

    function trumpSideTransaction() {
        trumps.map(trump => 
            {if (trump.trumpName === trumpName) {
                // Action à suivre pour débiter le bon atout
                trumpsAfterTransaction.push({
                    trumpName: trump.trumpName,
                    money: trump.money -= parseFloat(transaction.quantity),
                    bet: trump.bet
                })
            } else if (trump.trumpName === transaction.creditor) {
                // Action à suivre pour créditer le bon atout
                trumpsAfterTransaction.push({
                    trumpName: trump.trumpName,
                    money: trump.money += parseFloat(transaction.quantity),
                    bet: trump.bet
                })
            } else {
                // Action à suivre pour les atouts non concernés
                trumpsAfterTransaction.push({trumpName: trump.trumpName, money: trump.money, bet: trump.bet})
            }})
        setTrumps(trumpsAfterTransaction)
    }

    function handleTransaction() {
        if(!isNaN(transaction.quantity) & transaction.quantity > 0 & transaction.creditor !== undefined) {
            playerSideTransaction()
            trumpSideTransaction()
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
                {/* Mapper les players pour les lister dans les potentiels crédités */}
                {players.map(player => player.playerName !== undefined && 
                    <option key={player.id} value={player.playerName} >{player.playerName}</option>
                )}
                {/* Mapper les trumps pour les lister dans les potentiels crédités SI le créditeur n'est pas un trump */}
                {trumps.map(trump => !trumpTransaction &&
                    <option key={trump.trumpName} value={trump.trumpName} >{trump.trumpName}</option>
                )}
        </select>
    </>)
  }
  
  export default Transaction;