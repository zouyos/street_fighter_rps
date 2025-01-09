import { useState, useEffect, cloneElement } from 'react';
import style from './style.module.css';
import Button from './components/Button/Button';
import Gauge from './components/Gauge/Gauge';
import {
  Circle,
  CircleFill,
  Square,
  SquareFill,
  Triangle,
  TriangleFill,
} from 'react-bootstrap-icons';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>();
  const [opponentChoice, setOpponentChoice] = useState<string | undefined>();
  const [resultString, setResultString] = useState('');
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [round, setRound] = useState(0);
  const [game, setGame] = useState(true);
  const [playerHistory, setPlayerHistory] = useState<JSX.Element[]>([]);
  const [opponenHistory, setOpponentHistory] = useState<JSX.Element[]>([]);

  const symbolMap: Record<string, JSX.Element> = {
    circle: <Circle />,
    square: <Square />,
    triangle: <Triangle />,
  };

  const filledSymbolMap: Record<string, JSX.Element> = {
    circle: <CircleFill />,
    square: <SquareFill />,
    triangle: <TriangleFill />,
  };

  const colorMap: Record<string, string> = {
    circle: 'red',
    square: 'green',
    triangle: 'blue',
  };

  const handleSymbolClick = (symbol: string) => {
    const rand = Math.floor(Math.random() * 3);
    setSelectedSymbol(symbol);
    setOpponentChoice(Object.keys(symbolMap)[rand]);
    setRound((prev) => prev + 1);
  };

  const addToPlayerHistory = (symbol: string, color: string, win?: boolean) => {
    if (win) {
      setPlayerHistory((prev) => [
        ...prev,
        cloneElement(filledSymbolMap[symbol], { color }),
      ]);
    } else {
      setPlayerHistory((prev) => [
        ...prev,
        cloneElement(symbolMap[symbol], { color }),
      ]);
    }
  };

  const addToOpponentHistory = (
    symbol: string,
    color: string,
    win?: boolean
  ) => {
    if (win) {
      setOpponentHistory((prev) => [
        ...prev,
        cloneElement(filledSymbolMap[symbol], { color }),
      ]);
    } else {
      setOpponentHistory((prev) => [
        ...prev,
        cloneElement(symbolMap[symbol], { color }),
      ]);
    }
  };

  const handleRetryClick = () => {
    setPlayerHistory([]);
    setOpponentHistory([]);
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
        addToPlayerHistory(selectedSymbol, colorMap[selectedSymbol]);
        addToOpponentHistory(opponentChoice, colorMap[opponentChoice]);
      } else if (
        (selectedSymbol === 'circle' && opponentChoice === 'triangle') ||
        (selectedSymbol === 'square' && opponentChoice === 'circle') ||
        (selectedSymbol === 'triangle' && opponentChoice === 'square')
      ) {
        addToPlayerHistory(selectedSymbol, colorMap[selectedSymbol], true);
        addToOpponentHistory(opponentChoice, colorMap[opponentChoice]);
        setOpponentHP((prev) => Math.max(prev - 20, 0));
        setResultString('Opponent loses 20 HP');
      } else {
        addToOpponentHistory(opponentChoice, colorMap[opponentChoice], true);
        addToPlayerHistory(selectedSymbol, colorMap[selectedSymbol]);
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
      <h1 className='text-center my-2'>SF Rock-Paper-Scissors</h1>
      <div className={style.history}>
        <p className={style.historyLabel}>History</p>
        <div className={style.iconContainer}>
          <span className={style.playerHistoryLabel}>Player:</span>
          {playerHistory
            .slice(-3)
            .reverse()
            .map((item, index) => (
              <span key={index} className='icon-inline'>
                {item}{' '}
              </span>
            ))}
        </div>
        <div className={style.iconContainer}>
          <span className='me-2'>Opponent:</span>
          {opponenHistory
            .slice(-3)
            .reverse()
            .map((item, index) => (
              <span key={index} className='icon-inline'>
                {item}{' '}
              </span>
            ))}
        </div>
      </div>
      <h2 className='text-center my-3'>Pick a symbol</h2>
      <div className={style.flexCenter}>
        <div
          className={`text-center p-3 border rounded rounded-3 ${style.flexCenter} ${style.fit}`}
        >
          <Button
            label={symbolMap['circle']}
            color='danger'
            onClick={() => handleSymbolClick('circle')}
            game={game}
          />
          <Button
            label={symbolMap['square']}
            color='success'
            onClick={() => handleSymbolClick('square')}
            game={game}
          />
          <Button
            label={symbolMap['triangle']}
            color='primary'
            onClick={() => handleSymbolClick('triangle')}
            game={game}
          />
        </div>
      </div>
      <p className='text-center my-3'>
        {selectedSymbol && game ? (
          <>
            Your opponent plays:{' '}
            <span className='icon-inline'>
              {opponentChoice && symbolMap[opponentChoice]}
            </span>{' '}
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
