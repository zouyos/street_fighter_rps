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
import playerVictoryFrame1 from './assets/chars/player/victory/player_victory_frame_01.png';
import playerVictoryFrame2 from './assets/chars/player/victory/player_victory_frame_02.png';
import playerVictoryFrame3 from './assets/chars/player/victory/player_victory_frame_03.png';
import playerVictoryFrame4 from './assets/chars/player/victory/player_victory_frame_04.png';
import playerVictoryFrame5 from './assets/chars/player/victory/player_victory_frame_05.png';
import playerVictoryFrame6 from './assets/chars/player/victory/player_victory_frame_06.png';
import playerVictoryFrame7 from './assets/chars/player/victory/player_victory_frame_07.png';
import playerVictoryFrame8 from './assets/chars/player/victory/player_victory_frame_08.png';
import playerVictoryFrame9 from './assets/chars/player/victory/player_victory_frame_09.png';
import playerDefeatFrame1 from './assets/chars/player/defeat/player_defeat_frame_01.png';
import playerHadoukenFrame1 from './assets/chars/player/hadouken/player_hadouken_frame_01.png';
import playerHadoukenFrame2 from './assets/chars/player/hadouken/player_hadouken_frame_02.png';
import playerHadoukenFrame3 from './assets/chars/player/hadouken/player_hadouken_frame_03.png';
import playerHadoukenFrame4 from './assets/chars/player/hadouken/player_hadouken_frame_04.png';
import playerHadoukenFrame5 from './assets/chars/player/hadouken/player_hadouken_frame_05.png';
import playerHadoukenFrame6 from './assets/chars/player/hadouken/player_hadouken_frame_06.png';
import playerHadoukenFrame7 from './assets/chars/player/hadouken/player_hadouken_frame_07.png';
import playerHadoukenFrame8 from './assets/chars/player/hadouken/player_hadouken_frame_08.png';
import playerHadoukenFrame9 from './assets/chars/player/hadouken/player_hadouken_frame_09.png';
import playerHadoukenFrame10 from './assets/chars/player/hadouken/player_hadouken_frame_10.png';
import opponentStanceFrame1 from './assets/chars/opponent/stance/opponent_stance_frame_01.png';
import opponentStanceFrame2 from './assets/chars/opponent/stance/opponent_stance_frame_02.png';
import opponentStanceFrame3 from './assets/chars/opponent/stance/opponent_stance_frame_03.png';
import opponentStanceFrame4 from './assets/chars/opponent/stance/opponent_stance_frame_04.png';
import opponentStanceFrame5 from './assets/chars/opponent/stance/opponent_stance_frame_05.png';
import opponentStanceFrame6 from './assets/chars/opponent/stance/opponent_stance_frame_06.png';
import opponentVictoryFrame1 from './assets/chars/opponent/victory/opponent_victory_frame_01.png';
import opponentVictoryFrame2 from './assets/chars/opponent/victory/opponent_victory_frame_02.png';
import opponentVictoryFrame3 from './assets/chars/opponent/victory/opponent_victory_frame_03.png';
import opponentVictoryFrame4 from './assets/chars/opponent/victory/opponent_victory_frame_04.png';
import opponentDefeatFrame1 from './assets/chars/opponent/defeat/opponent_defeat_frame_01.png';
import opponentShoryukenFrame1 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_01.png';
import opponentShoryukenFrame2 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_02.png';
import opponentShoryukenFrame3 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_03.png';
import opponentShoryukenFrame4 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_04.png';
import opponentShoryukenFrame5 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_05.png';
import opponentShoryukenFrame6 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_06.png';
import opponentShoryukenFrame7 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_07.png';
import opponentShoryukenFrame8 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_08.png';
import opponentShoryukenFrame9 from './assets/chars/opponent/shoryuken/opponent_shoryuken_frame_09.png';
import Char from './components/Char/Char';
import { Modal } from 'react-bootstrap';
import { ArrowRepeat, QuestionCircle, XCircle } from 'react-bootstrap-icons';
import ResultString from './components/ResultString/ResultString';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>();
  const [opponentChoice, setOpponentChoice] = useState<string | undefined>();
  const [resultString, setResultString] = useState('');
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [count, setCount] = useState(1);
  const [round, setRound] = useState(1);
  const [playerWins, setPlayerWins] = useState(0);
  const [opponentWins, setOpponentWins] = useState(0);
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
    ],
    [playerDefeatFrame1],
    [
      playerHadoukenFrame1,
      playerHadoukenFrame2,
      playerHadoukenFrame3,
      playerHadoukenFrame4,
      playerHadoukenFrame5,
      playerHadoukenFrame6,
      playerHadoukenFrame7,
      playerHadoukenFrame8,
      playerHadoukenFrame9,
      playerHadoukenFrame10,
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
    ],
    [
      opponentVictoryFrame1,
      opponentVictoryFrame2,
      opponentVictoryFrame3,
      opponentVictoryFrame4,
    ],
    [opponentDefeatFrame1],
    [
      opponentShoryukenFrame1,
      opponentShoryukenFrame2,
      opponentShoryukenFrame3,
      opponentShoryukenFrame4,
      opponentShoryukenFrame5,
      opponentShoryukenFrame6,
      opponentShoryukenFrame7,
      opponentShoryukenFrame8,
      opponentShoryukenFrame9,
    ],
  ];

  const symbolMap: Record<string, JSX.Element> = {
    punch: <img className={style.icon} src={punch} alt='Punch Icon' />,
    kick: <img className={style.icon} src={kick} alt='Kick Icon' />,
    wave: <img className={style.wave} src={wave} alt='Wave Icon' />,
  };

  const smallSymbolMap: Record<string, JSX.Element> = {
    punch: (
      <img className={style.smallIcon} src={punch_b} alt='Small Punch Icon' />
    ),
    kick: (
      <img className={style.smallIcon} src={kick_b} alt='Small Kick Icon' />
    ),
    wave: (
      <img className={style.smallIcon} src={wave_b} alt='Small Wave Icon' />
    ),
  };

  const handleSymbolClick = (symbol: string) => {
    if (!game) {
      return;
    }
    const rand = Math.floor(Math.random() * 3);
    setSelectedSymbol(symbol);
    setOpponentChoice(Object.keys(symbolMap)[rand]);
    setCount((prev) => prev + 1);
  };

  const addToPlayerHistory = (symbol: string) => {
    const element = smallSymbolMap[symbol];
    setPlayerHistory((prev) => [
      ...prev,
      typeof element === 'string'
        ? element
        : cloneElement(smallSymbolMap[symbol], { className: style.smallIcon }),
    ]);
  };

  const addToOpponentHistory = (symbol: string) => {
    const element = smallSymbolMap[symbol];
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
    setCount(1);
    setRound((prev) => prev + 1);
    setSelectedSymbol(undefined);
    setOpponentChoice(undefined);
    setResultString('');
    setGame(true);
    setPlayerFrameIndex(0);
    setOpponentFrameIndex(0);
  };

  const generatePlayerSrc = (
    frames: string[][],
    index: number,
    selectedSymbol?: string
  ) => {
    if (game) {
      if (selectedSymbol === 'wave') {
        return frames[3][index];
      } else {
        return frames[0][index];
      }
    } else if (opponentHP <= 0) {
      return frames[1][index];
    } else {
      return frames[2][index];
    }
  };

  const generateOpponentSrc = (
    frames: string[][],
    index: number,
    opponentChoice?: string
  ) => {
    if (game) {
      if (opponentChoice === 'punch') {
        return frames[3][index];
      } else {
        return frames[0][index];
      }
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
  }, [count]);

  useEffect(() => {
    if (playerHP <= 0) {
      setSelectedSymbol(undefined);
      setOpponentChoice(undefined);
      setPlayerFrameIndex(0);
      setGame(false);
      setCount((prev) => prev - 1);
      setOpponentWins((prev) => prev + 1);
      setResultString('YOU LOSE');
    } else if (opponentHP <= 0) {
      setSelectedSymbol(undefined);
      setOpponentChoice(undefined);
      setOpponentFrameIndex(0);
      setGame(false);
      setCount((prev) => prev - 1);
      setPlayerWins((prev) => prev + 1);
      setResultString(playerHP === 100 ? 'YOU WIN! PERFECT' : 'YOU WIN!');
    }
  }, [playerHP, opponentHP, selectedSymbol]);

  useEffect(() => {
    if (game) {
      if (selectedSymbol) {
        setPlayerFrameIndex(0);
      }
      if (opponentChoice) {
        setOpponentFrameIndex(0);
      }
    }
  }, [
    game,
    selectedSymbol,
    opponentChoice,
    setPlayerFrameIndex,
    setOpponentFrameIndex,
  ]);

  useEffect(() => {
    const animationInterval = 120;

    if (game) {
      if (selectedSymbol === 'wave') {
        const playerAnimation = setInterval(() => {
          setPlayerFrameIndex((prev) => (prev + 1) % playerFrames[3].length);
        }, animationInterval);

        // replace by opponent hit animation
        const opponentAnimation = setInterval(() => {
          setOpponentFrameIndex(
            (prev) => (prev + 1) % opponentFrames[0].length
          );
        }, animationInterval);
        return () => {
          clearInterval(playerAnimation);
          clearInterval(opponentAnimation);
        };
      }
      if (opponentChoice === 'punch') {
        // replace by player hit animation
        const playerAnimation = setInterval(() => {
          setPlayerFrameIndex((prev) => (prev + 1) % playerFrames[0].length);
        }, animationInterval);

        const opponentAnimation = setInterval(() => {
          setOpponentFrameIndex(
            (prev) => (prev + 1) % opponentFrames[3].length
          );
        }, animationInterval);
        return () => {
          clearInterval(playerAnimation);
          clearInterval(opponentAnimation);
        };

        // reste après
      } else {
        const playerAnimation = setInterval(() => {
          setPlayerFrameIndex((prev) => (prev + 1) % playerFrames[0].length);
        }, animationInterval);

        const opponentAnimation = setInterval(() => {
          setOpponentFrameIndex(
            (prev) => (prev + 1) % opponentFrames[0].length
          );
        }, animationInterval);

        return () => {
          clearInterval(playerAnimation);
          clearInterval(opponentAnimation);
        };
      }
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
        <Gauge
          isPlayer
          label='PLAYER'
          percent={playerHP}
          playerWins={playerWins}
        />
        <Gauge
          isPlayer={false}
          label='OPPONENT'
          percent={opponentHP}
          opponentWins={opponentWins}
        />
      </div>
      <QuestionCircle
        className={`rounded-pill ${style.questionCircle}`}
        size={35}
        color='#ffffff'
        onClick={handleModalShow}
      />
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
        <div className={style.buttonContainer}>
          <div className={style.signButton}>
            <SignButton
              label={cloneElement(symbolMap['punch'], { size: 20 })}
              color='danger'
              onClick={() => handleSymbolClick('punch')}
              game={game}
            />
            <div className='fw-bold text-black'>PUNCH</div>
          </div>
          <div className={style.signButton}>
            <SignButton
              label={cloneElement(symbolMap['kick'], { size: 20 })}
              color='success'
              onClick={() => handleSymbolClick('kick')}
              game={game}
            />
            <div className='fw-bold text-black'>KICK</div>
          </div>
          <div className={style.signButton}>
            <SignButton
              label={cloneElement(symbolMap['wave'], { size: 20 })}
              color='primary'
              onClick={() => handleSymbolClick('wave')}
              game={game}
            />
            <div className='fw-bold text-black'>WAVE</div>
          </div>
        </div>
      </div>
      <div className={style.retryButtonContainer}>
        {!game && (
          <button
            className='btn btn-warning text-center fs-5'
            onClick={handleRetryClick}
          >
            Retry?
          </button>
        )}
      </div>
      <div className={style.charsContainer}>
        <Char
          isPlayer={true}
          playerFrames={playerFrames}
          playerFrameIndex={playerFrameIndex}
          opponentFrames={opponentFrames}
          opponentFrameIndex={opponentFrameIndex}
          selectedSymbol={selectedSymbol}
          generatePlayerSrc={generatePlayerSrc}
        />
        <Char
          isPlayer={false}
          playerFrames={playerFrames}
          playerFrameIndex={playerFrameIndex}
          opponentFrames={opponentFrames}
          opponentFrameIndex={opponentFrameIndex}
          opponentChoice={opponentChoice}
          generateOpponentSrc={generateOpponentSrc}
        />
      </div>
      <Modal show={modalShow} onHide={handleModalClose} centered>
        <Modal.Header className='bg-info position-relative'>
          <Modal.Title
            className='fs-4 text-light text-center w-100'
            style={{ margin: '0 auto' }}
          >
            How To Play?
          </Modal.Title>
          <XCircle
            onClick={handleModalClose}
            size={26}
            color='white'
            className={style.modalCloseButton}
          />
        </Modal.Header>
        <Modal.Body className='text-center'>
          <p>
            <img
              className={`${style.icon} img-fluid`}
              src={punch_b}
              alt='Punch Icon'
            />{' '}
            beats{' '}
            <img
              className={`${style.icon} img-fluid ms-1`}
              src={wave_b}
              alt='Wave Icon'
            />
          </p>
          <p>
            <img
              className={`${style.icon} img-fluid`}
              src={kick_b}
              alt='Kick Icon'
            />{' '}
            beats{' '}
            <img
              className={`${style.icon} img-fluid`}
              src={punch_b}
              alt='Punch Icon'
            />
          </p>
          <p>
            <img
              className={`${style.icon} img-fluid me-2`}
              src={wave_b}
              alt='Wave Icon'
            />{' '}
            beats{' '}
            <img
              className={`${style.icon} img-fluid`}
              src={kick_b}
              alt='Kick Icon'
            />
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
// TODO:
// animations
// add start pose/taunt
// add chun li
// boost and res logic
// input list when draw
// combo logic (x2 x3) and combo breaker
// spe move logic (win 3 times with your char move)
// (mini?) boss fight gp (play opposit sign quick)
// (boss fight? play opposit input list quick)
// replace modal by how to play mode
// imagine more gameplay (input list based game, if you win you get to max combo)
