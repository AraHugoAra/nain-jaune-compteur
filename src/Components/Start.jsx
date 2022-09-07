function Start({players, setPlayers}) {

    function giveTokens() {
        let playersPlusTwoHundred = []
        players.map(player => playersPlusTwoHundred.push({playerName: player.playerName, id: player.id, money: player.money+200}))
        setPlayers(playersPlusTwoHundred)
    }

    return (<>
        <button onClick={() => giveTokens()} >Les joueurs reçoivent 200 jetons</button>
    </>)
  }
  
  export default Start;