import { useState, useEffect, cloneElement } from 'react';
import style from './style.module.css';
import SignButton from './components/SignButton/SignButton';
import Gauge from './components/Gauge/Gauge';
import MoveHistory from './components/MoveHistory/MoveHistory';
import punch from './assets/punch_white.png';
import punch_b from './assets/punch_black.png';
import kick from './assets/kick_white.png';
import kick_b from './assets/kick_black.png';
import wave from './assets/wave_white.png';
import wave_b from './assets/wave_black.png';
import playerStanceFrame1 from './assets/chars/player/stance/player_stance_frame_01.png';
import playerStanceFrame2 from './assets/chars/player/stance/player_stance_frame_02.png';
import playerStanceFrame3 from './assets/chars/player/stance/player_stance_frame_03.png';
import playerStanceFrame4 from './assets/chars/player/stance/player_stance_frame_04.png';
import playerStanceFrame5 from './assets/chars/player/stance/player_stance_frame_05.png';
import playerStanceFrame6 from './assets/chars/player/stance/player_stance_frame_06.png';
import playerStanceFrame7 from './assets/chars/player/stance/player_stance_frame_07.png';
import playerStanceFrame8 from './assets/chars/player/stance/player_stance_frame_08.png';
import playerVictoryFrame1 from './assets/chars/player/victory/player_victory_frame_01.png';
import playerVictoryFrame2 from './assets/chars/player/victory/player_victory_frame_02.png';
import playerVictoryFrame3 from './assets/chars/player/victory/player_victory_frame_03.png';
import playerVictoryFrame4 from './assets/chars/player/victory/player_victory_frame_04.png';
import playerVictoryFrame5 from './assets/chars/player/victory/player_victory_frame_05.png';
import playerVictoryFrame6 from './assets/chars/player/victory/player_victory_frame_06.png';
import playerVictoryFrame7 from './assets/chars/player/victory/player_victory_frame_07.png';
import playerVictoryFrame8 from './assets/chars/player/victory/player_victory_frame_08.png';
import playerVictoryFrame9 from './assets/chars/player/victory/player_victory_frame_09.png';
import playerVictoryFrame10 from './assets/chars/player/victory/player_victory_frame_10.png';
import playerVictoryFrame11 from './assets/chars/player/victory/player_victory_frame_11.png';
import playerVictoryFrame12 from './assets/chars/player/victory/player_victory_frame_12.png';
import playerVictoryFrame13 from './assets/chars/player/victory/player_victory_frame_13.png';
import playerDefeatFrame1 from './assets/chars/player/defeat/player_defeat_frame_01.png';
import playerDefeatFrame2 from './assets/chars/player/defeat/player_defeat_frame_02.png';
import playerDefeatFrame3 from './assets/chars/player/defeat/player_defeat_frame_03.png';
import playerDefeatFrame4 from './assets/chars/player/defeat/player_defeat_frame_04.png';
import playerDefeatFrame5 from './assets/chars/player/defeat/player_defeat_frame_05.png';
import playerDefeatFrame6 from './assets/chars/player/defeat/player_defeat_frame_06.png';
import playerDefeatFrame7 from './assets/chars/player/defeat/player_defeat_frame_07.png';
import playerDefeatFrame8 from './assets/chars/player/defeat/player_defeat_frame_08.png';
import opponentStanceFrame1 from './assets/chars/opponent/stance/opponent_stance_frame_01.png';
import opponentStanceFrame2 from './assets/chars/opponent/stance/opponent_stance_frame_02.png';
import opponentStanceFrame3 from './assets/chars/opponent/stance/opponent_stance_frame_03.png';
import opponentStanceFrame4 from './assets/chars/opponent/stance/opponent_stance_frame_04.png';
import opponentVictoryFrame1 from './assets/chars/opponent/victory/opponent_victory_frame_01.png';
import opponentVictoryFrame2 from './assets/chars/opponent/victory/opponent_victory_frame_02.png';
import opponentVictoryFrame3 from './assets/chars/opponent/victory/opponent_victory_frame_03.png';
import opponentVictoryFrame4 from './assets/chars/opponent/victory/opponent_victory_frame_04.png';
import opponentDefeatFrame1 from './assets/chars/opponent/defeat/opponent_defeat_frame_01.png';
import opponentDefeatFrame2 from './assets/chars/opponent/defeat/opponent_defeat_frame_02.png';
import Char from './components/Char/Char';
import { Button, Modal } from 'react-bootstrap';
import { ArrowRepeat, QuestionCircle } from 'react-bootstrap-icons';
import ResultString from './components/ResultString/ResultString';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>();
  const [opponentChoice, setOpponentChoice] = useState<string | undefined>();
  const [resultString, setResultString] = useState('');
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [round, setRound] = useState(1);
  const [game, setGame] = useState(true);
  const [playerHistory, setPlayerHistory] = useState<(JSX.Element | string)[]>(
    []
  );
  const [opponentHistory, setOpponentHistory] = useState<
    (JSX.Element | string)[]
  >([]);
  const [playerFrameIndex, setPlayerFrameIndex] = useState(0);
  const [opponentFrameIndex, setOpponentFrameIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const isPortrait = !isLandscape;

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
    ],
    [
      opponentVictoryFrame1,
      opponentVictoryFrame2,
      opponentVictoryFrame3,
      opponentVictoryFrame4,
    ],
    [opponentDefeatFrame1, opponentDefeatFrame2],
  ];

  const symbolMap: Record<string, JSX.Element> = {
    punch: <img className={style.icon} src={punch} alt='Punch Icon' />,
    kick: <img className={style.icon} src={kick} alt='Kick Icon' />,
    wave: <img className={style.wave} src={wave} alt='Wave Icon' />,
  };

  const filledSymbolMap: Record<string, JSX.Element> = {
    punch: (
      <img className={style.smallIcon} src={punch_b} alt='Filled Punch Icon' />
    ),
    kick: (
      <img className={style.smallIcon} src={kick_b} alt='Filled Kick Icon' />
    ),
    wave: (
      <img className={style.smallIcon} src={wave_b} alt='Filled Wave Icon' />
    ),
  };

  const handleSymbolClick = (symbol: string) => {
    if (!game) return;
    const rand = Math.floor(Math.random() * 3);
    setSelectedSymbol(symbol);
    setOpponentChoice(Object.keys(symbolMap)[rand]);
    setRound((prev) => prev + 1);
  };

  const addToPlayerHistory = (symbol: string) => {
    const element = filledSymbolMap[symbol];
    setPlayerHistory((prev) => [
      ...prev,
      typeof element === 'string'
        ? element
        : cloneElement(filledSymbolMap[symbol], { className: style.smallIcon }),
    ]);
  };

  const addToOpponentHistory = (symbol: string) => {
    const element = filledSymbolMap[symbol];
    setOpponentHistory((prev) => [
      ...prev,
      typeof element === 'string'
        ? element
        : cloneElement(element, { className: style.smallIcon }),
    ]);
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
        addToPlayerHistory(selectedSymbol);
        addToOpponentHistory(opponentChoice);
      } else if (
        (selectedSymbol === 'punch' && opponentChoice === 'wave') ||
        (selectedSymbol === 'kick' && opponentChoice === 'punch') ||
        (selectedSymbol === 'wave' && opponentChoice === 'kick')
      ) {
        addToPlayerHistory(selectedSymbol);
        addToOpponentHistory(opponentChoice);
        setOpponentHP((prev) => Math.max(prev - 20, 0));
        setResultString('Opponent loses 20 HP');
      } else {
        addToOpponentHistory(opponentChoice);
        addToPlayerHistory(selectedSymbol);
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
    playerFrames,
    opponentFrames,
    playerFrames,
    opponentFrames,
    playerFrames,
    opponentFrames,
  ]);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  return (
    <div className={style.mainContainer}>
      {isPortrait && (
        <div className={style.overlay}>
          <div className={style.animatedLogo}>
            <ArrowRepeat size={50} color='white' />
          </div>
          <div className={style.message}>
            <p>PLEASE TURN YOUR PHONE TO LANDSCAPE MODE</p>
          </div>
        </div>
      )}
      <h1 className='text-center m-0 text-black fw-bold'>ROUND {round}</h1>
      <div className='d-flex justify-content-between'>
        <Gauge isPlayer label='PLAYER' percent={playerHP} />
        <Gauge label='OPPONENT' percent={opponentHP} />
      </div>
      <div className='d-flex justify-content-center'>
        <div onClick={handleModalShow}>
          <QuestionCircle
            className={`rounded-pill ${style.questionCircle}`}
            size={30}
            color='#ffffff'
          />
        </div>
      </div>
      <ResultString
        game={game}
        selectedSymbol={selectedSymbol}
        opponentChoice={opponentChoice}
        symbolMap={symbolMap}
        resultString={resultString}
      />
      <div className={style.gameContainer}>
        <MoveHistory
          playerHistory={playerHistory}
          opponentHistory={opponentHistory}
        />
        <div className={style.retryButtonContainer}>
          {!game && (
            <button
              className='btn btn-warning text-center p-2 fs-5'
              onClick={handleRetryClick}
            >
              Retry?
            </button>
          )}
        </div>
        <div className={style.buttonContainer}>
          <div className={style.signButton}>
            <SignButton
              label={cloneElement(symbolMap['punch'], { size: 20 })}
              color='danger'
              onClick={() => handleSymbolClick('punch')}
              game={game}
            />
            <div className='fw-bold'>PUNCH</div>
          </div>
          <div className={style.signButton}>
            <SignButton
              label={cloneElement(symbolMap['kick'], { size: 20 })}
              color='success'
              onClick={() => handleSymbolClick('kick')}
              game={game}
            />
            <div className='fw-bold'>KICK</div>
          </div>
          <div className={style.signButton}>
            <SignButton
              label={cloneElement(symbolMap['wave'], { size: 20 })}
              color='primary'
              onClick={() => handleSymbolClick('wave')}
              game={game}
            />
            <div className='fw-bold'>WAVE</div>
          </div>
        </div>
      </div>
      <div className={style.charsContainer}>
        <Char
          isPlayer={true}
          playerHP={playerHP}
          playerFrames={playerFrames}
          playerFrameIndex={playerFrameIndex}
          opponentHP={opponentHP}
          opponentFrames={opponentFrames}
          opponentFrameIndex={opponentFrameIndex}
          generatePlayerSrc={generatePlayerSrc}
          generateOpponentSrc={generateOpponentSrc}
        />
        <Char
          isPlayer={false}
          playerHP={playerHP}
          playerFrames={playerFrames}
          playerFrameIndex={playerFrameIndex}
          opponentHP={opponentHP}
          opponentFrames={opponentFrames}
          opponentFrameIndex={opponentFrameIndex}
          generatePlayerSrc={generatePlayerSrc}
          generateOpponentSrc={generateOpponentSrc}
        />
      </div>
      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header className='bg-info'>
          <Modal.Title
            className='fs-4 text-light text-center'
            style={{ margin: '0 auto' }}
          >
            How To Play?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <p>
            <img className={style.icon} src={punch_b} alt='Punch Icon' /> beats{' '}
            <img className={style.icon} src={wave_b} alt='Wave Icon' />
          </p>
          <p>
            <img className={style.icon} src={kick_b} alt='Kick Icon' /> beats{' '}
            <img className={style.icon} src={punch_b} alt='Punch Icon' />
          </p>
          <p>
            <img className={style.icon} src={wave_b} alt='Wave Icon' /> beats{' '}
            <img className={style.icon} src={kick_b} alt='Kick Icon' />
          </p>
          <p>
            Remove all 100 HP of your opponent by choosing a sign each round
          </p>
          <p>
            When there is a draw, a random sign quickly appears, the first one
            to click the right sign wins and deals 40 DMG
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleModalClose}
            style={{ margin: '0 auto' }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
// TODO:
// responsive design:
// - modal
// glitch when opponent loses
// animations (fix player victory frame)
// bug: unsized icons in history when app reloads
// boost and res logic
// input prompt when draw
// spe move logic (win 3 times with your char move)
// combo logic (x2 x3) and combo breaker
