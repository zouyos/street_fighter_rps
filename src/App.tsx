import { useState, useEffect } from 'react';
import style from './style.module.css';
import Button from './components/Button/Button';
import Gauge from './components/Gauge/Gauge';
import { Circle, Square, Triangle } from 'react-bootstrap-icons';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<
    JSX.Element | undefined
  >();
  const [opponentChoice, setOpponentChoice] = useState<
    JSX.Element | undefined
  >();
  const [resultString, setResultString] = useState('');
  const opponentPossibleChoices = [<Circle />, <Square />, <Triangle />];
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [round, setRound] = useState(0);
  const [game, setGame] = useState(true);

  const handleSymbolClick = (symbol: JSX.Element) => {
    const rand = Math.floor(Math.random() * 3);
    setSelectedSymbol(symbol);
    setOpponentChoice(opponentPossibleChoices[rand]);
    setRound((prev) => prev + 1);
  };

  const handleRetryClick = () => {
    setPlayerHP(100);
    setOpponentHP(100);
    setRound(0);
    setSelectedSymbol(undefined);
    setOpponentChoice(undefined);
    setResultString('');
    setGame(true);
  };

  useEffect(() => {
    if (!selectedSymbol || !opponentChoice) return;

    if (game) {
      if (selectedSymbol === opponentChoice) {
        setResultString('DRAW');
      } else if (
        (selectedSymbol === <Circle /> && opponentChoice === <Triangle />) ||
        (selectedSymbol === <Square /> && opponentChoice === <Circle />) ||
        (selectedSymbol === <Triangle /> && opponentChoice === <Square />)
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
      setResultString(`GAME OVER. ${round} rounds game`);
    } else if (opponentHP <= 0) {
      setGame(false);
      setResultString(`YOU WIN. ${round} rounds game`);
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
          <Button
            label={<Circle />}
            color='danger'
            onClick={handleSymbolClick}
            game={game}
          />
          <Button
            label={<Square />}
            color='success'
            onClick={handleSymbolClick}
            game={game}
          />
          <Button
            label={<Triangle />}
            color='primary'
            onClick={handleSymbolClick}
            game={game}
          />
        </div>
      </div>
      <p className='text-center my-3'>
        {selectedSymbol && game ? (
          <>
            Your opponent plays:{' '}
            <span className='icon-inline'>{opponentChoice}</span>.{' '}
            {resultString}
          </>
        ) : (
          `${resultString}`
        )}
      </p>

      <Gauge label='Player' percent={playerHP} />
      <Gauge label='Opponent' percent={opponentHP} />
      <div className={style.flexCenter}>
        {!game && (
          <button
            className='btn btn-warning text-center my-3'
            onClick={handleRetryClick}
          >
            Retry?
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
