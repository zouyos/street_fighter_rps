import { useState, useEffect } from 'react';
import style from './style.module.css';
import Button from './components/Button/Button';
import Gauge from './components/Gauge/Gauge';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>();
  const [opponentChoice, setOpponentChoice] = useState<string | undefined>();
  const [resultString, setResultString] = useState<string | undefined>();
  const opponentPossibleChoices = ['◯', '□', '△'];
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [round, setRound] = useState(0);
  const [game, setGame] = useState(true);

  const handleClick = (symbol: string) => {
    const rand = Math.floor(Math.random() * 3);
    setSelectedSymbol(symbol);
    setOpponentChoice(opponentPossibleChoices[rand]);
    setRound((prev) => prev + 1);
  };

  useEffect(() => {
    if (!selectedSymbol || !opponentChoice) return;

    if (game) {
      if (selectedSymbol === opponentChoice) {
        setResultString('DRAW');
      } else if (
        (selectedSymbol === '◯' && opponentChoice === '△') ||
        (selectedSymbol === '□' && opponentChoice === '◯') ||
        (selectedSymbol === '△' && opponentChoice === '□')
      ) {
        setOpponentHP((prev) => Math.max(prev - 20, 0));
        setResultString('Opponent loses 20 HP');
      } else {
        setPlayerHP((prev) => Math.max(prev - 20, 0));
        setResultString('You lose 20 HP');
      }
    }
  }, [round]);

  useEffect(() => {
    if (playerHP <= 0) {
      setGame(false);
      setResultString('GAME OVER');
    } else if (opponentHP <= 0) {
      setGame(false);
      setResultString('YOU WIN');
    }
  }, [playerHP, opponentHP]);

  return (
    <div className='m-3'>
      <h1 className='text-center my-3'>JAN KEN PON</h1>
      <h2 className='text-center my-3'>Pick a symbol</h2>
      <div className={style.flexCenter}>
        <div
          className={`text-center p-3 border rounded rounded-3 ${style.flexCenter} ${style.fit}`}
        >
          <Button label='◯' color='danger' onClick={handleClick} game={game} />
          <Button label='□' color='success' onClick={handleClick} game={game} />
          <Button label='△' color='primary' onClick={handleClick} game={game} />
        </div>
      </div>
      <p className='text-center my-3'>
        {selectedSymbol && game
          ? `Your opponent plays: ${opponentChoice}. ${resultString}`
          : resultString}
      </p>
      <Gauge label='Player' percent={playerHP} />
      <Gauge label='Opponent' percent={opponentHP} />
    </div>
  );
}

export default App;
