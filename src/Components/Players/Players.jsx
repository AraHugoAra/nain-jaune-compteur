import PlayerCard from "./PlayerCard";

function Players({ players, setPlayers, trumps, setTrumps }) {
  return (
    <div className="container__players">
      {players.map((item) => (
        <PlayerCard
          key={item.id}
          players={players}
          setPlayers={setPlayers}
          money={item.money}
          id={item.id}
          trumps={trumps}
          setTrumps={setTrumps}
        />
      ))}
    </div>
  );
}

export default Players;
