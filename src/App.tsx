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
import playerStanceFrame1 from './assets/chars/ryu/stance/ryu_stance_frame_01.png';
import playerStanceFrame2 from './assets/chars/ryu/stance/ryu_stance_frame_02.png';
import playerStanceFrame3 from './assets/chars/ryu/stance/ryu_stance_frame_03.png';
import playerStanceFrame4 from './assets/chars/ryu/stance/ryu_stance_frame_04.png';
import playerStanceFrame5 from './assets/chars/ryu/stance/ryu_stance_frame_05.png';
import playerStanceFrame6 from './assets/chars/ryu/stance/ryu_stance_frame_06.png';
import playerVictoryFrame1 from './assets/chars/ryu/victory/ryu_victory_frame_01.png';
import playerVictoryFrame2 from './assets/chars/ryu/victory/ryu_victory_frame_02.png';
import playerVictoryFrame3 from './assets/chars/ryu/victory/ryu_victory_frame_03.png';
import playerVictoryFrame4 from './assets/chars/ryu/victory/ryu_victory_frame_04.png';
import playerVictoryFrame5 from './assets/chars/ryu/victory/ryu_victory_frame_05.png';
import playerVictoryFrame6 from './assets/chars/ryu/victory/ryu_victory_frame_06.png';
import playerVictoryFrame7 from './assets/chars/ryu/victory/ryu_victory_frame_07.png';
import playerVictoryFrame8 from './assets/chars/ryu/victory/ryu_victory_frame_08.png';
import playerVictoryFrame9 from './assets/chars/ryu/victory/ryu_victory_frame_09.png';
import playerDefeatFrame1 from './assets/chars/ryu/defeat/ryu_defeat_frame_01.png';
import playerShoryukenFrame1 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_01.png';
import playerShoryukenFrame2 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_02.png';
import playerShoryukenFrame3 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_03.png';
import playerShoryukenFrame4 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_04.png';
import playerShoryukenFrame5 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_05.png';
import playerShoryukenFrame6 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_06.png';
import playerShoryukenFrame7 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_07.png';
import playerShoryukenFrame8 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_08.png';
import playerShoryukenFrame9 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_09.png';
import playerShoryukenFrame10 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_10.png';
import playerShoryukenFrame11 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_11.png';
import playerTatsumakiFrame1 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_01.png';
import playerTatsumakiFrame2 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_02.png';
import playerTatsumakiFrame3 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_03.png';
import playerTatsumakiFrame4 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_04.png';
import playerTatsumakiFrame5 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_05.png';
import playerTatsumakiFrame6 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_06.png';
import playerTatsumakiFrame7 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_07.png';
import playerTatsumakiFrame8 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_08.png';
import playerTatsumakiFrame9 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_09.png';
import playerTatsumakiFrame10 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_10.png';
import playerTatsumakiFrame11 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_11.png';
import playerTatsumakiFrame12 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_12.png';
import playerTatsumakiFrame13 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_13.png';
import playerTatsumakiFrame14 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_14.png';
import playerTatsumakiFrame15 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_15.png';
import playerTatsumakiFrame16 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_16.png';
import playerTatsumakiFrame17 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_17.png';
import playerTatsumakiFrame18 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_18.png';
import playerHadoukenFrame1 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_01.png';
import playerHadoukenFrame2 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_02.png';
import playerHadoukenFrame3 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_03.png';
import playerHadoukenFrame4 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_04.png';
import playerHadoukenFrame5 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_05.png';
import playerHadoukenFrame6 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_06.png';
import playerHadoukenFrame7 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_07.png';
import playerHadoukenFrame8 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_08.png';
import playerHadoukenFrame9 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_09.png';
import playerHadoukenFrame10 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_10.png';
// import playerWaveFrame01 from './assets/chars/ryu/hadouken/ryu_wave_frame_01.png';
// import playerWaveFrame02 from './assets/chars/ryu/hadouken/ryu_wave_frame_02.png';
// import playerWaveFrame03 from './assets/chars/ryu/hadouken/ryu_wave_frame_03.png';
// import playerWaveFrame04 from './assets/chars/ryu/hadouken/ryu_wave_frame_04.png';
// import playerWaveFrame05 from './assets/chars/ryu/hadouken/ryu_wave_frame_05.png';
// import playerWaveFrame06 from './assets/chars/ryu/hadouken/ryu_wave_frame_06.png';
// import playerWaveFrame07 from './assets/chars/ryu/hadouken/ryu_wave_frame_07.png';
// import playerWaveFrame08 from './assets/chars/ryu/hadouken/ryu_wave_frame_08.png';
// import playerWaveFrame09 from './assets/chars/ryu/hadouken/ryu_wave_frame_09.png';
// import playerWaveFrame10 from './assets/chars/ryu/hadouken/ryu_wave_frame_10.png';
// import playerWaveFrame11 from './assets/chars/ryu/hadouken/ryu_wave_frame_11.png';
// import playerWaveFrame12 from './assets/chars/ryu/hadouken/ryu_wave_frame_12.png';
// import playerWaveFrame13 from './assets/chars/ryu/hadouken/ryu_wave_frame_13.png';
// import playerWaveFrame14 from './assets/chars/ryu/hadouken/ryu_wave_frame_14.png';
import playerHurtFrame01 from './assets/chars/ryu/hurt/ryu_hurt_frame_01.png';
import playerHurtFrame02 from './assets/chars/ryu/hurt/ryu_hurt_frame_02.png';
import playerHurtFrame03 from './assets/chars/ryu/hurt/ryu_hurt_frame_03.png';
import opponentStanceFrame1 from './assets/chars/ken/stance/ken_stance_frame_01.png';
import opponentStanceFrame2 from './assets/chars/ken/stance/ken_stance_frame_02.png';
import opponentStanceFrame3 from './assets/chars/ken/stance/ken_stance_frame_03.png';
import opponentStanceFrame4 from './assets/chars/ken/stance/ken_stance_frame_04.png';
import opponentStanceFrame5 from './assets/chars/ken/stance/ken_stance_frame_05.png';
import opponentStanceFrame6 from './assets/chars/ken/stance/ken_stance_frame_06.png';
import opponentVictoryFrame1 from './assets/chars/ken/victory/ken_victory_frame_01.png';
import opponentVictoryFrame2 from './assets/chars/ken/victory/ken_victory_frame_02.png';
import opponentVictoryFrame3 from './assets/chars/ken/victory/ken_victory_frame_03.png';
import opponentVictoryFrame4 from './assets/chars/ken/victory/ken_victory_frame_04.png';
import opponentDefeatFrame1 from './assets/chars/ken/defeat/ken_defeat_frame_01.png';
import opponentShoryukenFrame1 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_01.png';
import opponentShoryukenFrame2 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_02.png';
import opponentShoryukenFrame3 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_03.png';
import opponentShoryukenFrame4 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_04.png';
import opponentShoryukenFrame5 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_05.png';
import opponentShoryukenFrame6 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_06.png';
import opponentShoryukenFrame7 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_07.png';
import opponentShoryukenFrame8 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_08.png';
import opponentShoryukenFrame9 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_09.png';
import opponentTatsumakiFrame1 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_01.png';
import opponentTatsumakiFrame2 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_02.png';
import opponentTatsumakiFrame3 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_03.png';
import opponentTatsumakiFrame4 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_04.png';
import opponentTatsumakiFrame5 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_05.png';
import opponentTatsumakiFrame6 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_06.png';
import opponentTatsumakiFrame7 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_07.png';
import opponentTatsumakiFrame8 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_08.png';
import opponentTatsumakiFrame9 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_09.png';
import opponentTatsumakiFrame10 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_10.png';
import opponentTatsumakiFrame11 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_11.png';
import opponentTatsumakiFrame12 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_12.png';
import opponentTatsumakiFrame13 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_13.png';
import opponentTatsumakiFrame14 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_14.png';
import opponentHadoukenFrame1 from './assets/chars/ken/hadouken/ken_hadouken_frame_01.png';
import opponentHadoukenFrame2 from './assets/chars/ken/hadouken/ken_hadouken_frame_02.png';
import opponentHadoukenFrame3 from './assets/chars/ken/hadouken/ken_hadouken_frame_03.png';
import opponentHadoukenFrame4 from './assets/chars/ken/hadouken/ken_hadouken_frame_04.png';
import opponentHadoukenFrame5 from './assets/chars/ken/hadouken/ken_hadouken_frame_05.png';
import opponentHadoukenFrame6 from './assets/chars/ken/hadouken/ken_hadouken_frame_06.png';
import opponentHadoukenFrame7 from './assets/chars/ken/hadouken/ken_hadouken_frame_07.png';
import opponentHadoukenFrame8 from './assets/chars/ken/hadouken/ken_hadouken_frame_08.png';
import opponentHadoukenFrame9 from './assets/chars/ken/hadouken/ken_hadouken_frame_09.png';
import opponentHurtFrame1 from './assets/chars/ken/hurt/ken_hurt_frame_01.png';
import opponentHurtFrame2 from './assets/chars/ken/hurt/ken_hurt_frame_02.png';
import opponentHurtFrame3 from './assets/chars/ken/hurt/ken_hurt_frame_03.png';
import Char from './components/Char/Char';
import { Modal } from 'react-bootstrap';
import { ArrowRepeat, QuestionCircle, XCircle } from 'react-bootstrap-icons';
import ResultString from './components/ResultString/ResultString';
// import Wave from './components/Wave/Wave';

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
  // const [playerWinsMove, setPlayerWinsMove] = useState<boolean | undefined>();
  const [game, setGame] = useState(true);
  const [playerHistory, setPlayerHistory] = useState<(JSX.Element | string)[]>(
    []
  );
  const [opponentHistory, setOpponentHistory] = useState<
    (JSX.Element | string)[]
  >([]);
  const [playerFrameIndex, setPlayerFrameIndex] = useState(0);
  const [opponentFrameIndex, setOpponentFrameIndex] = useState(0);
  // const [playerWaveFrameIndex, setPlayerWaveFrameIndex] = useState(0);
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
      playerShoryukenFrame1,
      playerShoryukenFrame2,
      playerShoryukenFrame3,
      playerShoryukenFrame4,
      playerShoryukenFrame5,
      playerShoryukenFrame6,
      playerShoryukenFrame7,
      playerShoryukenFrame8,
      playerShoryukenFrame9,
      playerShoryukenFrame10,
      playerShoryukenFrame11,
    ],
    [
      playerTatsumakiFrame1,
      playerTatsumakiFrame2,
      playerTatsumakiFrame3,
      playerTatsumakiFrame4,
      playerTatsumakiFrame5,
      playerTatsumakiFrame6,
      playerTatsumakiFrame7,
      playerTatsumakiFrame8,
      playerTatsumakiFrame9,
      playerTatsumakiFrame10,
      playerTatsumakiFrame11,
      playerTatsumakiFrame12,
      playerTatsumakiFrame13,
      playerTatsumakiFrame14,
      playerTatsumakiFrame15,
      playerTatsumakiFrame16,
      playerTatsumakiFrame17,
      playerTatsumakiFrame18,
    ],
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
    [playerHurtFrame01, playerHurtFrame02, playerHurtFrame03],
  ];

  // const playerWaveFrames = [
  //   [
  //     playerWaveFrame01,
  //     playerWaveFrame02,
  //     playerWaveFrame03,
  //     playerWaveFrame04,
  //     playerWaveFrame05,
  //     playerWaveFrame06,
  //     playerWaveFrame07,
  //     playerWaveFrame08,
  //     playerWaveFrame09,
  //     playerWaveFrame10,
  //     playerWaveFrame11,
  //     playerWaveFrame12,
  //     playerWaveFrame13,
  //     playerWaveFrame14,
  //   ],
  // ];

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
    [
      opponentTatsumakiFrame1,
      opponentTatsumakiFrame2,
      opponentTatsumakiFrame3,
      opponentTatsumakiFrame4,
      opponentTatsumakiFrame5,
      opponentTatsumakiFrame6,
      opponentTatsumakiFrame7,
      opponentTatsumakiFrame8,
      opponentTatsumakiFrame9,
      opponentTatsumakiFrame10,
      opponentTatsumakiFrame11,
      opponentTatsumakiFrame12,
      opponentTatsumakiFrame13,
      opponentTatsumakiFrame14,
    ],
    [
      opponentHadoukenFrame1,
      opponentHadoukenFrame2,
      opponentHadoukenFrame3,
      opponentHadoukenFrame4,
      opponentHadoukenFrame5,
      opponentHadoukenFrame6,
      opponentHadoukenFrame7,
      opponentHadoukenFrame8,
      opponentHadoukenFrame9,
    ],
    [opponentHurtFrame1, opponentHurtFrame2, opponentHurtFrame3],
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

  const generateSrc = (
    frames: string[][],
    index: number,
    moveChoice?: string,
    isPlayer?: boolean
  ) => {
    if (game) {
      switch (moveChoice) {
        case 'punch':
          return frames[3][index];
        case 'kick':
          return frames[4][index];
        case 'wave':
          return frames[5][index];
        default:
          return frames[0][index];
      }
    } else if ((isPlayer ? opponentHP : playerHP) <= 0) {
      return frames[1][index];
    } else {
      return frames[2][index];
    }
  };

  // const generateWaveSrc = (
  //   frames: string[][],
  //   index: number,
  //   charIndex: number,
  //   moveChoice?: string,
  //   isPlayer?: boolean
  // ) => {
  //   if (isPlayer) {
  //     if (game && moveChoice === 'wave' && charIndex === 4) {
  //       return frames[0][index];
  //     }
  //   } else {
  //     if (game && moveChoice === 'wave' && charIndex === 4) {
  //       return frames[0][index];
  //     }
  //   }
  // };

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
    const animationInterval = 100;

    let playerFramesToAnimate: string[] = [];
    let opponentFramesToAnimate: string[] = [];
    let playerLoop = true;
    let opponentLoop = true;

    if (game) {
      if (selectedSymbol && opponentChoice) {
        // Determine player frames
        switch (selectedSymbol) {
          case 'punch':
            playerFramesToAnimate = playerFrames[3]; // Shoryuken
            playerLoop = false;
            break;
          case 'kick':
            playerFramesToAnimate = playerFrames[4]; // Tatsumaki
            playerLoop = false;
            break;
          case 'wave':
            playerFramesToAnimate = playerFrames[5]; // Hadouken
            playerLoop = false;
            break;
          default:
            playerFramesToAnimate = playerFrames[0]; // Stance
            playerLoop = true;
        }

        // Determine opponent frames
        switch (opponentChoice) {
          case 'punch':
            opponentFramesToAnimate = opponentFrames[3];
            opponentLoop = false;
            break;
          case 'kick':
            opponentFramesToAnimate = opponentFrames[4];
            opponentLoop = false;
            break;
          case 'wave':
            opponentFramesToAnimate = opponentFrames[5];
            opponentLoop = false;
            break;
          default:
            opponentFramesToAnimate = opponentFrames[0]; // Stance
            opponentLoop = true;
        }
      } else {
        // Default to stance frames when no move is selected
        playerFramesToAnimate = playerFrames[0];
        opponentFramesToAnimate = opponentFrames[0];
      }
    } else if (opponentHP <= 0) {
      playerFramesToAnimate = playerFrames[1]; // Victory
      opponentFramesToAnimate = opponentFrames[2]; // Defeat
      playerLoop = true;
      opponentLoop = false;
    } else if (playerHP <= 0) {
      playerFramesToAnimate = playerFrames[2]; // Defeat
      opponentFramesToAnimate = opponentFrames[1]; // Victory
      playerLoop = false;
      opponentLoop = true;
    }

    // Player animation
    const playerAnimation = setInterval(() => {
      setPlayerFrameIndex((prev) =>
        playerLoop
          ? (prev + 1) % playerFramesToAnimate.length
          : Math.min(prev + 1, playerFramesToAnimate.length - 1)
      );
    }, animationInterval);

    // Opponent animation
    const opponentAnimation = setInterval(() => {
      setOpponentFrameIndex((prev) =>
        opponentLoop
          ? (prev + 1) % opponentFramesToAnimate.length
          : Math.min(prev + 1, opponentFramesToAnimate.length - 1)
      );
    }, animationInterval);

    return () => {
      clearInterval(playerAnimation);
      clearInterval(opponentAnimation);
    };
  }, [game, selectedSymbol, opponentChoice, playerHP, opponentHP]);

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
          isPlayer
          frames={playerFrames}
          frameIndex={playerFrameIndex}
          moveChoice={selectedSymbol}
          generateSrc={generateSrc}
        />
        {/* {selectedSymbol === 'wave' && (
          <Wave
            isPlayer
            frames={playerWaveFrames}
            frameIndex={playerFrameIndex}
            charIndex={playerFrameIndex}
            moveChoice={selectedSymbol}
            generateWaveSrc={generateWaveSrc}
          />
        )} */}
        <Char
          isPlayer={false}
          frames={opponentFrames}
          frameIndex={opponentFrameIndex}
          moveChoice={opponentChoice}
          generateSrc={generateSrc}
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
            />
            <span className='mx-3'>BEATS</span>
            <img
              className={`${style.icon} img-fluid`}
              src={wave_b}
              alt='Wave Icon'
            />
          </p>
          <p>
            <img
              className={`${style.icon} img-fluid`}
              src={kick_b}
              alt='Kick Icon'
            />
            <span className='mx-3'>BEATS</span>
            <img
              className={`${style.icon} img-fluid`}
              src={punch_b}
              alt='Punch Icon'
            />
          </p>
          <p>
            <img
              className={`${style.icon} img-fluid`}
              src={wave_b}
              alt='Wave Icon'
            />
            <span className='mx-3'>BEATS</span>
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
// perfect frames
// animations
// add start pose/taunt
// defense choice
// add chun li
// boost and res logic
// input list when draw
// combo logic (x2 x3) and combo breaker
// spe move logic (win 3 times with your char move)
// (mini?) boss fight gp (play opposit sign quick)
// (boss fight? play opposit input list quick)
// replace modal by how to play mode
// imagine more gameplay (input list based game, if you win you get to max combo)
