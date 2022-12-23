import MoneyCount from "../MoneyCount";
import Transaction from "../Transaction";
import {
  GiCard10Diamonds,
  GiCard7Diamonds,
  GiCardJackClubs,
  GiCardKingHearts,
  GiCardQueenSpades,
} from "react-icons/gi";

function TrumpCard({
  trumpName,
  money,
  players,
  setPlayers,
  trumps,
  setTrumps,
}) {
  let displayedName;
  const expr = trumpName;
  switch (expr) {
    case "ten":
      displayedName = <GiCard10Diamonds />;
      break;
    case "seven":
      displayedName = <GiCard7Diamonds />;
      break;
    case "D":
      displayedName = <GiCardQueenSpades />;
      break;
    case "K":
      displayedName = <GiCardKingHearts />;
      break;
    case "J":
      displayedName = <GiCardJackClubs />;
      break;
    default:
      displayedName = trumpName;
      break;
  }

  return (
    <div className={`card ${trumpName}`}>
      <h1 className="card__title">{displayedName}</h1>
      <MoneyCount money={money} />
      <Transaction
        players={players}
        setPlayers={setPlayers}
        trumps={trumps}
        setTrumps={setTrumps}
        trumpTransaction={true}
        trumpName={trumpName}
      />
    </div>
  );
}

export default TrumpCard;
