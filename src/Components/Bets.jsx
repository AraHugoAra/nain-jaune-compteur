function Bets({trumps, setTrumps, players, setPlayers}) {

    function trumpsBets() {
        let trumpsPlusBets = []
        trumps.map(trump => trumpsPlusBets.push({trumpName: trump.trumpName, money: trump.money += 15}))
        setTrumps(trumpsPlusBets)
    }

    function playersBets() {
        let playersMinusBets = []
        players.map(player => playersMinusBets.push({playerName: player.playerName, money: player.money -= 15, id: player.id}))
        setPlayers(playersMinusBets)
    }

    function handleClick() {
        trumpsBets()
        playersBets()
    }

    return (<>
        <button onClick={() => handleClick()}>Les joueurs misent</button>
    </>)
  }
  
  export default Bets;