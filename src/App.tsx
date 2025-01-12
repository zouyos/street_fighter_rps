import { useState, useEffect, cloneElement } from 'react';
import style from './style.module.css';
import SignButton from './components/SignButton/SignButton';
import Gauge from './components/Gauge/Gauge';
import MoveHistory from './components/MoveHistory/MoveHistory';
import {
  Circle,
  CircleFill,
  Square,
  SquareFill,
  Triangle,
  TriangleFill,
} from 'react-bootstrap-icons';
import playerStanceFrame1 from './assets/chars/player/stance/player_stance_frame_01_300pcts.png';
import playerStanceFrame2 from './assets/chars/player/stance/player_stance_frame_02_300pcts.png';
import playerStanceFrame3 from './assets/chars/player/stance/player_stance_frame_03_300pcts.png';
import playerStanceFrame4 from './assets/chars/player/stance/player_stance_frame_04_300pcts.png';
import playerStanceFrame5 from './assets/chars/player/stance/player_stance_frame_05_300pcts.png';
import playerStanceFrame6 from './assets/chars/player/stance/player_stance_frame_06_300pcts.png';
import playerStanceFrame7 from './assets/chars/player/stance/player_stance_frame_07_300pcts.png';
import playerStanceFrame8 from './assets/chars/player/stance/player_stance_frame_08_300pcts.png';
import playerVictoryFrame1 from './assets/chars/player/victory/player_victory_frame_01_300pcts.png';
import playerVictoryFrame2 from './assets/chars/player/victory/player_victory_frame_02_300pcts.png';
import playerVictoryFrame3 from './assets/chars/player/victory/player_victory_frame_03_300pcts.png';
import playerVictoryFrame4 from './assets/chars/player/victory/player_victory_frame_04_300pcts.png';
import playerVictoryFrame5 from './assets/chars/player/victory/player_victory_frame_05_300pcts.png';
import playerVictoryFrame6 from './assets/chars/player/victory/player_victory_frame_06_300pcts.png';
import playerVictoryFrame7 from './assets/chars/player/victory/player_victory_frame_07_300pcts.png';
import playerVictoryFrame8 from './assets/chars/player/victory/player_victory_frame_08_300pcts.png';
import playerVictoryFrame9 from './assets/chars/player/victory/player_victory_frame_09_300pcts.png';
import playerVictoryFrame10 from './assets/chars/player/victory/player_victory_frame_10_300pcts.png';
import playerVictoryFrame11 from './assets/chars/player/victory/player_victory_frame_11_300pcts.png';
import playerVictoryFrame12 from './assets/chars/player/victory/player_victory_frame_12_300pcts.png';
import playerVictoryFrame13 from './assets/chars/player/victory/player_victory_frame_13_300pcts.png';
import playerDefeatFrame1 from './assets/chars/player/defeat/player_defeat_frame_01_300pcts.png';
import playerDefeatFrame2 from './assets/chars/player/defeat/player_defeat_frame_02_300pcts.png';
import playerDefeatFrame3 from './assets/chars/player/defeat/player_defeat_frame_03_300pcts.png';
import playerDefeatFrame4 from './assets/chars/player/defeat/player_defeat_frame_04_300pcts.png';
import playerDefeatFrame5 from './assets/chars/player/defeat/player_defeat_frame_05_300pcts.png';
import playerDefeatFrame6 from './assets/chars/player/defeat/player_defeat_frame_06_300pcts.png';
import playerDefeatFrame7 from './assets/chars/player/defeat/player_defeat_frame_07_300pcts.png';
import playerDefeatFrame8 from './assets/chars/player/defeat/player_defeat_frame_08_300pcts.png';
import opponentStanceFrame1 from './assets/chars/opponent/stance/opponent_stance_frame_01_300pcts.png';
import opponentStanceFrame2 from './assets/chars/opponent/stance/opponent_stance_frame_02_300pcts.png';
import opponentStanceFrame3 from './assets/chars/opponent/stance/opponent_stance_frame_03_300pcts.png';
import opponentStanceFrame4 from './assets/chars/opponent/stance/opponent_stance_frame_04_300pcts.png';
import opponentStanceFrame5 from './assets/chars/opponent/stance/opponent_stance_frame_05_300pcts.png';
import opponentStanceFrame6 from './assets/chars/opponent/stance/opponent_stance_frame_06_300pcts.png';
import opponentStanceFrame7 from './assets/chars/opponent/stance/opponent_stance_frame_07_300pcts.png';
import opponentStanceFrame8 from './assets/chars/opponent/stance/opponent_stance_frame_08_300pcts.png';
import opponentVictoryFrame1 from './assets/chars/opponent/victory/opponent_victory_frame_01_300pcts.png';
import opponentVictoryFrame2 from './assets/chars/opponent/victory/opponent_victory_frame_02_300pcts.png';
import opponentVictoryFrame3 from './assets/chars/opponent/victory/opponent_victory_frame_03_300pcts.png';
import opponentVictoryFrame4 from './assets/chars/opponent/victory/opponent_victory_frame_04_300pcts.png';
import opponentVictoryFrame5 from './assets/chars/opponent/victory/opponent_victory_frame_05_300pcts.png';
import opponentVictoryFrame6 from './assets/chars/opponent/victory/opponent_victory_frame_06_300pcts.png';
import opponentVictoryFrame7 from './assets/chars/opponent/victory/opponent_victory_frame_07_300pcts.png';
import opponentVictoryFrame8 from './assets/chars/opponent/victory/opponent_victory_frame_08_300pcts.png';
import opponentDefeatFrame1 from './assets/chars/opponent/defeat/opponent_defeat_frame_01_300pcts.png';
import opponentDefeatFrame2 from './assets/chars/opponent/defeat/opponent_defeat_frame_02_300pcts.png';
import opponentDefeatFrame3 from './assets/chars/opponent/defeat/opponent_defeat_frame_03_300pcts.png';
import opponentDefeatFrame4 from './assets/chars/opponent/defeat/opponent_defeat_frame_04_300pcts.png';
import opponentDefeatFrame5 from './assets/chars/opponent/defeat/opponent_defeat_frame_05_300pcts.png';
import opponentDefeatFrame6 from './assets/chars/opponent/defeat/opponent_defeat_frame_06_300pcts.png';
import opponentDefeatFrame7 from './assets/chars/opponent/defeat/opponent_defeat_frame_07_300pcts.png';
import opponentDefeatFrame8 from './assets/chars/opponent/defeat/opponent_defeat_frame_08_300pcts.png';
import RetryButton from './components/RetryButton/RetryButton';

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
  const [playerFrameIndex, setPlayerFrameIndex] = useState(0);
  const [opponentFrameIndex, setOpponentFrameIndex] = useState(0);

  const playerFrames = [
    [
      playerStanceFrame1,
      playerStanceFrame2,
      playerStanceFrame3,
      playerStanceFrame4,
      playerStanceFrame5,
      playerStanceFrame6,
      playerStanceFrame7,
      playerStanceFrame8,
    ],
    [
      playerVictoryFrame1,
      playerVictoryFrame2,
      playerVictoryFrame3,
      playerVictoryFrame4,
      playerVictoryFrame5,
      playerVictoryFrame6,
      playerVictoryFrame7,
      playerVictoryFrame8,
      playerVictoryFrame9,
      playerVictoryFrame10,
      playerVictoryFrame11,
      playerVictoryFrame12,
      playerVictoryFrame13,
    ],
    [
      playerDefeatFrame1,
      playerDefeatFrame2,
      playerDefeatFrame3,
      playerDefeatFrame4,
      playerDefeatFrame5,
      playerDefeatFrame6,
      playerDefeatFrame7,
      playerDefeatFrame8,
    ],
  ];

  const opponentFrames = [
    [
      opponentStanceFrame1,
      opponentStanceFrame2,
      opponentStanceFrame3,
      opponentStanceFrame4,
      opponentStanceFrame5,
      opponentStanceFrame6,
      opponentStanceFrame7,
      opponentStanceFrame8,
    ],
    [
      opponentVictoryFrame1,
      opponentVictoryFrame2,
      opponentVictoryFrame3,
      opponentVictoryFrame4,
      opponentVictoryFrame5,
      opponentVictoryFrame6,
      opponentVictoryFrame7,
      opponentVictoryFrame8,
    ],
    [
      opponentDefeatFrame1,
      opponentDefeatFrame2,
      opponentDefeatFrame3,
      opponentDefeatFrame4,
      opponentDefeatFrame5,
      opponentDefeatFrame6,
      opponentDefeatFrame7,
      opponentDefeatFrame8,
    ],
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
    setPlayerFrameIndex(0);
    setOpponentFrameIndex(0);
  };

  const generatePlayerSrc = (frames: string[][], index: number) => {
    if (game) {
      return frames[0][index];
    } else if (opponentHP <= 0) {
      return frames[1][index];
    } else {
      return frames[2][index];
    }
  };

  const generateOpponentSrc = (frames: string[][], index: number) => {
    if (game) {
      return frames[0][index];
    } else if (playerHP <= 0) {
      return frames[1][index];
    } else {
      return frames[2][index];
    }
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
    const animationInterval = 120;

    if (game) {
      const playerAnimation = setInterval(() => {
        setPlayerFrameIndex((prev) => (prev + 1) % playerFrames[0].length);
      }, animationInterval);

      const opponentAnimation = setInterval(() => {
        setOpponentFrameIndex((prev) => (prev + 1) % opponentFrames[0].length);
      }, animationInterval);

      return () => {
        clearInterval(playerAnimation);
        clearInterval(opponentAnimation);
      };
    } else if (opponentHP <= 0) {
      const playerAnimation = setInterval(() => {
        setPlayerFrameIndex((prev) => (prev + 1) % playerFrames[1].length);
      }, animationInterval);

      const opponentAnimation = setInterval(() => {
        setOpponentFrameIndex((prev) => (prev + 1) % opponentFrames[2].length);
      }, animationInterval);

      return () => {
        clearInterval(playerAnimation);
        clearInterval(opponentAnimation);
      };
    } else if (playerHP <= 0) {
      const playerAnimation = setInterval(() => {
        setPlayerFrameIndex((prev) => (prev + 1) % playerFrames[2].length);
      }, animationInterval);

      const opponentAnimation = setInterval(() => {
        setOpponentFrameIndex((prev) => (prev + 1) % opponentFrames[1].length);
      }, animationInterval);

      return () => {
        clearInterval(playerAnimation);
        clearInterval(opponentAnimation);
      };
    } else {
      const playerAnimation = setInterval(() => {
        setPlayerFrameIndex((prev) => (prev + 1) % playerFrames[2].length);
      }, animationInterval);

      const opponentAnimation = setInterval(() => {
        setOpponentFrameIndex((prev) => (prev + 1) % opponentFrames[1].length);
      }, animationInterval);

      return () => {
        clearInterval(playerAnimation);
        clearInterval(opponentAnimation);
      };
    }
  }, [
    game,
    playerHP,
    opponentHP,
    playerFrames[0].length,
    opponentFrames[0].length,
    playerFrames[1].length,
    opponentFrames[1].length,
    playerFrames[2].length,
    opponentFrames[2].length,
  ]);

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
            <SignButton
              label={cloneElement(symbolMap['circle'], { size: 25 })}
              color='danger'
              onClick={() => handleSymbolClick('circle')}
              game={game}
            />
            <SignButton
              label={cloneElement(symbolMap['square'], { size: 25 })}
              color='success'
              onClick={() => handleSymbolClick('square')}
              game={game}
            />
            <SignButton
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
      <RetryButton game={game} onClick={handleRetryClick} />
      <div className={style.charactersContainer}>
        <div className={playerHP >= 0 ? style.player : style.defeatedPlayer}>
          <img
            src={generatePlayerSrc(playerFrames, playerFrameIndex)}
            alt='Player Animation'
          />
        </div>
        <div
          className={opponentHP >= 0 ? style.opponent : style.defeatedOpponent}
        >
          <img
            src={generateOpponentSrc(opponentFrames, opponentFrameIndex)}
            alt='Opponent Animation'
          />
        </div>
      </div>

      <MoveHistory
        playerHistory={playerHistory}
        opponentHistory={opponenHistory}
      />
    </div>
  );
}

export default App;
// TODO:
// rem (+ check responsive design)
// component Char
