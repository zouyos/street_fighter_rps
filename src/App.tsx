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
import playerStanceFrame1 from './assets/player_stance_frame_01_300_pcts.png';
import playerStanceFrame2 from './assets/player_stance_frame_02_300_pcts.png';
import playerStanceFrame3 from './assets/player_stance_frame_03_300_pcts.png';
import playerStanceFrame4 from './assets/player_stance_frame_04_300_pcts.png';
import playerStanceFrame5 from './assets/player_stance_frame_05_300_pcts.png';
import playerStanceFrame6 from './assets/player_stance_frame_06_300_pcts.png';
import playerStanceFrame7 from './assets/player_stance_frame_07_300_pcts.png';
import playerStanceFrame8 from './assets/player_stance_frame_08_300_pcts.png';
import opponentStanceFrame1 from './assets/opponent_stance_frame_01_300_pcts.png';
import opponentStanceFrame2 from './assets/opponent_stance_frame_02_300_pcts.png';
import opponentStanceFrame3 from './assets/opponent_stance_frame_03_300_pcts.png';
import opponentStanceFrame4 from './assets/opponent_stance_frame_04_300_pcts.png';
import opponentStanceFrame5 from './assets/opponent_stance_frame_05_300_pcts.png';
import opponentStanceFrame6 from './assets/opponent_stance_frame_06_300_pcts.png';
import opponentStanceFrame7 from './assets/opponent_stance_frame_07_300_pcts.png';
import opponentStanceFrame8 from './assets/opponent_stance_frame_08_300_pcts.png';
import MoveHistory from './components/MoveHistory/MoveHistory';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>();
  const [opponentChoice, setOpponentChoice] = useState<string | undefined>();
  const [resultString, setResultString] = useState('');
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [round, setRound] = useState(1);
  const [game, setGame] = useState(true);
  const [playerHistory, setPlayerHistory] = useState<JSX.Element[]>([]);
  const [opponenHistory, setOpponentHistory] = useState<JSX.Element[]>([]);
  const [playerStanceFrameIndex, setPlayerStanceFrameIndex] = useState(0);
  const [opponentStanceFrameIndex, setOpponentStanceFrameIndex] = useState(0);

  const playerStanceFrames = [
    playerStanceFrame1,
    playerStanceFrame2,
    playerStanceFrame3,
    playerStanceFrame4,
    playerStanceFrame5,
    playerStanceFrame6,
    playerStanceFrame7,
    playerStanceFrame8,
  ];

  const opponentStanceFrames = [
    opponentStanceFrame1,
    opponentStanceFrame2,
    opponentStanceFrame3,
    opponentStanceFrame4,
    opponentStanceFrame5,
    opponentStanceFrame6,
    opponentStanceFrame7,
    opponentStanceFrame8,
  ];

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
    if (!game) return;
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
    setRound(1);
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
      setRound((prev) => prev - 1);
      setResultString('GAME OVER');
    } else if (opponentHP <= 0) {
      setGame(false);
      setRound((prev) => prev - 1);
      setResultString(playerHP === 100 ? 'YOU WIN! PERFECT' : 'YOU WIN!');
    }
  }, [playerHP, opponentHP]);

  useEffect(() => {
    const animationInterval = 100; // 100ms between frames
    const playerAnimation = setInterval(() => {
      setPlayerStanceFrameIndex(
        (prev) => (prev + 1) % playerStanceFrames.length
      );
    }, animationInterval);

    const opponentAnimation = setInterval(() => {
      setOpponentStanceFrameIndex(
        (prev) => (prev + 1) % opponentStanceFrames.length
      );
    }, animationInterval);

    return () => {
      clearInterval(playerAnimation);
      clearInterval(opponentAnimation);
    };
  }, [playerStanceFrames.length, opponentStanceFrames.length]);

  return (
    <div className={style.mainContainer}>
      <h1 className='text-center m-0 text-black fw-bold'>ROUND {round}</h1>
      <div className='d-flex justify-content-between'>
        <Gauge label='PLAYER' percent={playerHP} />
        <Gauge label='OPPONENT' percent={opponentHP} />
      </div>
      <div className={style.buttonContainer}>
        <h1 className='text-center mb-3'>PICK A SIGN</h1>
        <div className={style.flexCenter}>
          <div
            className={`text-center p-2 border border-3 rounded rounded-5 ${style.flexCenter} ${style.fit}`}
          >
            <Button
              label={cloneElement(symbolMap['circle'], { size: 25 })}
              color='danger'
              onClick={() => handleSymbolClick('circle')}
              game={game}
            />
            <Button
              label={cloneElement(symbolMap['square'], { size: 25 })}
              color='success'
              onClick={() => handleSymbolClick('square')}
              game={game}
            />
            <Button
              label={cloneElement(symbolMap['triangle'], { size: 25 })}
              color='primary'
              onClick={() => handleSymbolClick('triangle')}
              game={game}
            />
          </div>
        </div>
        <p className={style.resultString}>
          {selectedSymbol && game ? (
            <>
              Your opponent plays{' '}
              <span className='icon-inline'>
                {opponentChoice && symbolMap[opponentChoice]}
              </span>{' '}
              {resultString}
            </>
          ) : (
            `${resultString}`
          )}
        </p>
      </div>
      <div className={style.retryButtonContainer}>
        {!game && (
          <button
            className='btn btn-warning text-center my-2'
            onClick={handleRetryClick}
          >
            Retry?
          </button>
        )}
      </div>
      <div className={style.bottomContainer}>
        <MoveHistory
          playerHistory={playerHistory}
          opponentHistory={opponenHistory}
        />
        <div className={style.player}>
          <img
            src={playerStanceFrames[playerStanceFrameIndex]}
            alt='Player Animation'
          />
        </div>
        <div className={style.opponent}>
          <img
            src={opponentStanceFrames[opponentStanceFrameIndex]}
            alt='Opponent Animation'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
