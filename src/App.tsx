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
import ryuStanceFrame1 from './assets/chars/ryu/stance/ryu_stance_frame_01.png';
import ryuStanceFrame2 from './assets/chars/ryu/stance/ryu_stance_frame_02.png';
import ryuStanceFrame3 from './assets/chars/ryu/stance/ryu_stance_frame_03.png';
import ryuStanceFrame4 from './assets/chars/ryu/stance/ryu_stance_frame_04.png';
import ryuStanceFrame5 from './assets/chars/ryu/stance/ryu_stance_frame_05.png';
import ryuStanceFrame6 from './assets/chars/ryu/stance/ryu_stance_frame_06.png';
import ryuVictoryFrame1 from './assets/chars/ryu/victory/ryu_victory_frame_01.png';
import ryuVictoryFrame2 from './assets/chars/ryu/victory/ryu_victory_frame_02.png';
import ryuVictoryFrame3 from './assets/chars/ryu/victory/ryu_victory_frame_03.png';
import ryuVictoryFrame4 from './assets/chars/ryu/victory/ryu_victory_frame_04.png';
import ryuVictoryFrame5 from './assets/chars/ryu/victory/ryu_victory_frame_05.png';
import ryuVictoryFrame6 from './assets/chars/ryu/victory/ryu_victory_frame_06.png';
import ryuPerfectFrame1 from './assets/chars/ryu/victory/ryu_victory_frame_01.png';
import ryuPerfectFrame2 from './assets/chars/ryu/victory/ryu_victory_frame_02.png';
import ryuPerfectFrame3 from './assets/chars/ryu/victory/ryu_victory_frame_03.png';
import ryuPerfectFrame4 from './assets/chars/ryu/victory/ryu_victory_frame_04.png';
import ryuPerfectFrame5 from './assets/chars/ryu/victory/ryu_victory_frame_05.png';
import ryuPerfectFrame6 from './assets/chars/ryu/victory/ryu_victory_frame_06.png';
import ryuDefeatFrame1 from './assets/chars/ryu/defeat/ryu_defeat_frame_01.png';
import ryuShoryukenFrame1 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_01.png';
import ryuShoryukenFrame2 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_02.png';
import ryuShoryukenFrame3 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_03.png';
import ryuShoryukenFrame4 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_04.png';
import ryuShoryukenFrame5 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_05.png';
import ryuShoryukenFrame6 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_06.png';
import ryuShoryukenFrame7 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_07.png';
import ryuShoryukenFrame8 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_08.png';
import ryuShoryukenFrame9 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_09.png';
import ryuShoryukenFrame10 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_10.png';
import ryuShoryukenFrame11 from './assets/chars/ryu/shoryuken/ryu_shoryuken_frame_11.png';
import ryuTatsumakiFrame1 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_01.png';
import ryuTatsumakiFrame2 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_02.png';
import ryuTatsumakiFrame3 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_03.png';
import ryuTatsumakiFrame4 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_04.png';
import ryuTatsumakiFrame5 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_05.png';
import ryuTatsumakiFrame6 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_06.png';
import ryuTatsumakiFrame7 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_07.png';
import ryuTatsumakiFrame8 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_08.png';
import ryuTatsumakiFrame9 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_09.png';
import ryuTatsumakiFrame10 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_10.png';
import ryuTatsumakiFrame11 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_11.png';
import ryuTatsumakiFrame12 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_12.png';
import ryuTatsumakiFrame13 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_13.png';
import ryuTatsumakiFrame14 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_14.png';
import ryuTatsumakiFrame15 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_15.png';
import ryuTatsumakiFrame16 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_16.png';
import ryuTatsumakiFrame17 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_17.png';
import ryuTatsumakiFrame18 from './assets/chars/ryu/tatsumaki/ryu_tatsumaki_frame_18.png';
import ryuHadoukenFrame1 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_01.png';
import ryuHadoukenFrame2 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_02.png';
import ryuHadoukenFrame3 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_03.png';
import ryuHadoukenFrame4 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_04.png';
import ryuHadoukenFrame5 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_05.png';
import ryuHadoukenFrame6 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_06.png';
import ryuHadoukenFrame7 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_07.png';
import ryuHadoukenFrame8 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_08.png';
import ryuHadoukenFrame9 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_09.png';
import ryuHadoukenFrame10 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_10.png';
import ryuHadoukenFrame11 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_11.png';
import ryuHadoukenFrame12 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_12.png';
import ryuHadoukenFrame13 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_13.png';
import ryuHadoukenFrame14 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_14.png';
import ryuHadoukenFrame15 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_15.png';
import ryuHadoukenFrame16 from './assets/chars/ryu/hadouken/ryu_hadouken_frame_16.png';
import ryuHurtFrame1 from './assets/chars/ryu/hurt/ryu_hurt_frame_01.png';
import ryuHurtFrame2 from './assets/chars/ryu/hurt/ryu_hurt_frame_02.png';
import ryuHurtFrame3 from './assets/chars/ryu/hurt/ryu_hurt_frame_03.png';
import ryuDrawFrame1 from './assets/chars/ryu/draw/ryu_draw_frame_01.png';
import ryuTauntFrame1 from './assets/chars/ryu/taunt/ryu_taunt_frame_01.png';
import ryuTauntFrame2 from './assets/chars/ryu/taunt/ryu_taunt_frame_02.png';
import ryuTauntFrame3 from './assets/chars/ryu/taunt/ryu_taunt_frame_03.png';
import ryuTauntFrame4 from './assets/chars/ryu/taunt/ryu_taunt_frame_04.png';
import ryuTauntFrame5 from './assets/chars/ryu/taunt/ryu_taunt_frame_05.png';
import ryuTauntFrame6 from './assets/chars/ryu/taunt/ryu_taunt_frame_06.png';
import kenStanceFrame1 from './assets/chars/ken/stance/ken_stance_frame_01.png';
import kenStanceFrame2 from './assets/chars/ken/stance/ken_stance_frame_02.png';
import kenStanceFrame3 from './assets/chars/ken/stance/ken_stance_frame_03.png';
import kenStanceFrame4 from './assets/chars/ken/stance/ken_stance_frame_04.png';
import kenStanceFrame5 from './assets/chars/ken/stance/ken_stance_frame_05.png';
import kenStanceFrame6 from './assets/chars/ken/stance/ken_stance_frame_06.png';
import kenVictoryFrame1 from './assets/chars/ken/victory/ken_victory_frame_01.png';
import kenVictoryFrame2 from './assets/chars/ken/victory/ken_victory_frame_02.png';
import kenVictoryFrame3 from './assets/chars/ken/victory/ken_victory_frame_03.png';
import kenVictoryFrame4 from './assets/chars/ken/victory/ken_victory_frame_04.png';
import kenPerfectFrame1 from './assets/chars/ken/perfect/ken_perfect_frame_01.png';
import kenPerfectFrame2 from './assets/chars/ken/perfect/ken_perfect_frame_02.png';
import kenPerfectFrame3 from './assets/chars/ken/perfect/ken_perfect_frame_03.png';
import kenDefeatFrame1 from './assets/chars/ken/defeat/ken_defeat_frame_01.png';
import kenShoryukenFrame1 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_01.png';
import kenShoryukenFrame2 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_02.png';
import kenShoryukenFrame3 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_03.png';
import kenShoryukenFrame4 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_04.png';
import kenShoryukenFrame5 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_05.png';
import kenShoryukenFrame6 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_06.png';
import kenShoryukenFrame7 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_07.png';
import kenShoryukenFrame8 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_08.png';
import kenShoryukenFrame9 from './assets/chars/ken/shoryuken/ken_shoryuken_frame_09.png';
import kenTatsumakiFrame1 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_01.png';
import kenTatsumakiFrame2 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_02.png';
import kenTatsumakiFrame3 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_03.png';
import kenTatsumakiFrame4 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_04.png';
import kenTatsumakiFrame5 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_05.png';
import kenTatsumakiFrame6 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_06.png';
import kenTatsumakiFrame7 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_07.png';
import kenTatsumakiFrame8 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_08.png';
import kenTatsumakiFrame9 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_09.png';
import kenTatsumakiFrame10 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_10.png';
import kenTatsumakiFrame11 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_11.png';
import kenTatsumakiFrame12 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_12.png';
import kenTatsumakiFrame13 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_13.png';
import kenTatsumakiFrame14 from './assets/chars/ken/tatsumaki/ken_tatsumaki_frame_14.png';
import kenHadoukenFrame1 from './assets/chars/ken/hadouken/ken_hadouken_frame_01.png';
import kenHadoukenFrame2 from './assets/chars/ken/hadouken/ken_hadouken_frame_02.png';
import kenHadoukenFrame3 from './assets/chars/ken/hadouken/ken_hadouken_frame_03.png';
import kenHadoukenFrame4 from './assets/chars/ken/hadouken/ken_hadouken_frame_04.png';
import kenHadoukenFrame5 from './assets/chars/ken/hadouken/ken_hadouken_frame_05.png';
import kenHadoukenFrame6 from './assets/chars/ken/hadouken/ken_hadouken_frame_06.png';
import kenHadoukenFrame7 from './assets/chars/ken/hadouken/ken_hadouken_frame_07.png';
import kenHadoukenFrame8 from './assets/chars/ken/hadouken/ken_hadouken_frame_08.png';
import kenHadoukenFrame9 from './assets/chars/ken/hadouken/ken_hadouken_frame_09.png';
import kenHurtFrame1 from './assets/chars/ken/hurt/ken_hurt_frame_01.png';
import kenHurtFrame2 from './assets/chars/ken/hurt/ken_hurt_frame_02.png';
import kenHurtFrame3 from './assets/chars/ken/hurt/ken_hurt_frame_03.png';
import kenDrawFrame1 from './assets/chars/ken/draw/ken_draw_frame_01.png';
import kenTauntFrame1 from './assets/chars/ken/taunt/ken_taunt_frame_01.png';
import kenTauntFrame2 from './assets/chars/ken/taunt/ken_taunt_frame_02.png';
import kenTauntFrame3 from './assets/chars/ken/taunt/ken_taunt_frame_03.png';
import kenTauntFrame4 from './assets/chars/ken/taunt/ken_taunt_frame_04.png';
import kenTauntFrame5 from './assets/chars/ken/taunt/ken_taunt_frame_05.png';
import kenTauntFrame6 from './assets/chars/ken/taunt/ken_taunt_frame_06.png';
import Char from './components/Char/Char';
import { Modal } from 'react-bootstrap';
import { ArrowRepeat, QuestionCircle, XCircle } from 'react-bootstrap-icons';
import ResultString from './components/ResultString/ResultString';

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | undefined>();
  const [opponentChoice, setOpponentChoice] = useState<string | undefined>();
  const [resultString, setResultString] = useState('');
  const [playerResultString, setPlayerResultString] = useState('');
  const [opponentResultString, setOpponentResultString] = useState('');
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
      ryuStanceFrame1,
      ryuStanceFrame2,
      ryuStanceFrame3,
      ryuStanceFrame4,
      ryuStanceFrame5,
      ryuStanceFrame6,
    ],
    [
      ryuVictoryFrame1,
      ryuVictoryFrame2,
      ryuVictoryFrame3,
      ryuVictoryFrame4,
      ryuVictoryFrame5,
      ryuVictoryFrame6,
    ],
    [ryuDefeatFrame1],
    [
      ryuShoryukenFrame1,
      ryuShoryukenFrame2,
      ryuShoryukenFrame3,
      ryuShoryukenFrame4,
      ryuShoryukenFrame5,
      ryuShoryukenFrame6,
      ryuShoryukenFrame7,
      ryuShoryukenFrame8,
      ryuShoryukenFrame9,
      ryuShoryukenFrame10,
      ryuShoryukenFrame11,
    ],
    [
      ryuTatsumakiFrame1,
      ryuTatsumakiFrame2,
      ryuTatsumakiFrame3,
      ryuTatsumakiFrame4,
      ryuTatsumakiFrame5,
      ryuTatsumakiFrame6,
      ryuTatsumakiFrame7,
      ryuTatsumakiFrame8,
      ryuTatsumakiFrame9,
      ryuTatsumakiFrame10,
      ryuTatsumakiFrame11,
      ryuTatsumakiFrame12,
      ryuTatsumakiFrame13,
      ryuTatsumakiFrame14,
      ryuTatsumakiFrame15,
      ryuTatsumakiFrame16,
      ryuTatsumakiFrame17,
      ryuTatsumakiFrame18,
    ],
    [
      ryuHadoukenFrame1,
      ryuHadoukenFrame2,
      ryuHadoukenFrame3,
      ryuHadoukenFrame4,
      ryuHadoukenFrame5,
      ryuHadoukenFrame6,
      ryuHadoukenFrame7,
      ryuHadoukenFrame8,
      ryuHadoukenFrame9,
      ryuHadoukenFrame10,
      ryuHadoukenFrame11,
      ryuHadoukenFrame12,
      ryuHadoukenFrame13,
      ryuHadoukenFrame14,
      ryuHadoukenFrame15,
      ryuHadoukenFrame16,
    ],
    [ryuHurtFrame1, ryuHurtFrame2, ryuHurtFrame3],
    [ryuDrawFrame1],
    [
      ryuPerfectFrame1,
      ryuPerfectFrame2,
      ryuPerfectFrame3,
      ryuPerfectFrame4,
      ryuPerfectFrame5,
      ryuPerfectFrame6,
    ],
    [
      ryuTauntFrame1,
      ryuTauntFrame2,
      ryuTauntFrame3,
      ryuTauntFrame4,
      ryuTauntFrame5,
      ryuTauntFrame6,
    ],
  ];

  const opponentFrames = [
    [
      kenStanceFrame1,
      kenStanceFrame2,
      kenStanceFrame3,
      kenStanceFrame4,
      kenStanceFrame5,
      kenStanceFrame6,
    ],
    [kenVictoryFrame1, kenVictoryFrame2, kenVictoryFrame3, kenVictoryFrame4],
    [kenDefeatFrame1],
    [
      kenShoryukenFrame1,
      kenShoryukenFrame2,
      kenShoryukenFrame3,
      kenShoryukenFrame4,
      kenShoryukenFrame5,
      kenShoryukenFrame6,
      kenShoryukenFrame7,
      kenShoryukenFrame8,
      kenShoryukenFrame9,
    ],
    [
      kenTatsumakiFrame1,
      kenTatsumakiFrame2,
      kenTatsumakiFrame3,
      kenTatsumakiFrame4,
      kenTatsumakiFrame5,
      kenTatsumakiFrame6,
      kenTatsumakiFrame7,
      kenTatsumakiFrame8,
      kenTatsumakiFrame9,
      kenTatsumakiFrame10,
      kenTatsumakiFrame11,
      kenTatsumakiFrame12,
      kenTatsumakiFrame13,
      kenTatsumakiFrame14,
    ],
    [
      kenHadoukenFrame1,
      kenHadoukenFrame2,
      kenHadoukenFrame3,
      kenHadoukenFrame4,
      kenHadoukenFrame5,
      kenHadoukenFrame6,
      kenHadoukenFrame7,
      kenHadoukenFrame8,
      kenHadoukenFrame9,
    ],
    [kenHurtFrame1, kenHurtFrame2, kenHurtFrame3],
    [kenDrawFrame1],
    [kenPerfectFrame1, kenPerfectFrame2, kenPerfectFrame3],
    [
      kenTauntFrame1,
      kenTauntFrame2,
      kenTauntFrame3,
      kenTauntFrame4,
      kenTauntFrame5,
      kenTauntFrame6,
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
    setResultString('');
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
    const isPlayerWin =
      (selectedSymbol === 'punch' && opponentChoice === 'wave') ||
      (selectedSymbol === 'kick' && opponentChoice === 'punch') ||
      (selectedSymbol === 'wave' && opponentChoice === 'kick');

    const isOpponentWin =
      (opponentChoice === 'punch' && selectedSymbol === 'wave') ||
      (opponentChoice === 'kick' && selectedSymbol === 'punch') ||
      (opponentChoice === 'wave' && selectedSymbol === 'kick');

    const draw =
      (opponentChoice === 'punch' && selectedSymbol === 'punch') ||
      (opponentChoice === 'kick' && selectedSymbol === 'kick') ||
      (opponentChoice === 'wave' && selectedSymbol === 'wave');

    if (game) {
      if (
        playerHP === 100 &&
        opponentHP === 100 &&
        selectedSymbol == undefined &&
        opponentChoice === undefined
      ) {
        return frames[9][index];
      }
      if (isPlayer) {
        if (isPlayerWin) {
          switch (true) {
            case moveChoice === 'punch':
              return frames[3][index];
            case moveChoice === 'kick':
              return frames[4][index];
            case moveChoice === 'wave':
              return frames[5][index];
            default:
              return frames[0][index];
          }
        } else if (isOpponentWin) {
          return frames[6][index];
        } else if (draw) {
          return frames[7][index];
        } else {
          return frames[0][index];
        }
      } else {
        if (isOpponentWin) {
          switch (true) {
            case moveChoice === 'punch':
              return frames[3][index];
            case moveChoice === 'kick':
              return frames[4][index];
            case moveChoice === 'wave':
              return frames[5][index];
            default:
              return frames[0][index];
          }
        } else if (isPlayerWin) {
          return frames[6][index];
        } else if (draw) {
          return frames[7][index];
        } else {
          return frames[0][index];
        }
      }
    } else if ((isPlayer ? opponentHP : playerHP) <= 0) {
      if ((isPlayer ? playerHP : opponentHP) === 100) {
        return frames[8][index];
      } else {
        return frames[1][index];
      }
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
        setOpponentResultString('- 20');
        setTimeout(() => {
          setOpponentResultString('');
        }, 1000);
      } else {
        addToOpponentHistory(opponentChoice);
        addToPlayerHistory(selectedSymbol);
        setPlayerHP((prev) => Math.max(prev - 20, 0));
        setPlayerResultString('- 20');
        setTimeout(() => {
          setPlayerResultString('');
        }, 1000);
      }
    }
  }, [count]);

  useEffect(() => {
    if (playerHP <= 0) {
      setOpponentResultString('');
      setPlayerResultString('');
      setSelectedSymbol(undefined);
      setOpponentChoice(undefined);
      setPlayerFrameIndex(0);
      setGame(false);
      setCount((prev) => prev - 1);
      setOpponentWins((prev) => prev + 1);
      setResultString('YOU LOSE');
    } else if (opponentHP <= 0) {
      setOpponentResultString('');
      setPlayerResultString('');
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
    const baseAnimationInterval = 100;
    const waveWinAnimationInterval = 50;

    let playerFramesToAnimate: string[] = [];
    let opponentFramesToAnimate: string[] = [];
    let playerLoop = true;
    let opponentLoop = true;

    const isPlayerWin =
      (selectedSymbol === 'punch' && opponentChoice === 'wave') ||
      (selectedSymbol === 'kick' && opponentChoice === 'punch') ||
      (selectedSymbol === 'wave' && opponentChoice === 'kick');

    const animationInterval =
      selectedSymbol === 'wave' && opponentChoice && isPlayerWin
        ? waveWinAnimationInterval
        : baseAnimationInterval;

    if (game) {
      if (
        playerHP === 100 &&
        opponentHP === 100 &&
        selectedSymbol === undefined &&
        opponentChoice === undefined
      ) {
        playerFramesToAnimate = playerFrames[9];
        opponentFramesToAnimate = opponentFrames[9];
        playerLoop = false;
        opponentLoop = false;
        setPlayerFrameIndex(0);
        setOpponentFrameIndex(0);
      }
      if (selectedSymbol && opponentChoice) {
        const isPlayerWin =
          (selectedSymbol === 'punch' && opponentChoice === 'wave') ||
          (selectedSymbol === 'kick' && opponentChoice === 'punch') ||
          (selectedSymbol === 'wave' && opponentChoice === 'kick');

        const isOpponentWin =
          (opponentChoice === 'punch' && selectedSymbol === 'wave') ||
          (opponentChoice === 'kick' && selectedSymbol === 'punch') ||
          (opponentChoice === 'wave' && selectedSymbol === 'kick');

        if (isPlayerWin) {
          playerFramesToAnimate =
            playerFrames[3 + ['punch', 'kick', 'wave'].indexOf(selectedSymbol)];
          opponentFramesToAnimate = opponentFrames[6];
          playerLoop = false;
          opponentLoop = false;
          setPlayerFrameIndex(0);
          setOpponentFrameIndex(0);
        } else if (isOpponentWin) {
          playerFramesToAnimate = playerFrames[6];
          opponentFramesToAnimate =
            opponentFrames[
              3 + ['punch', 'kick', 'wave'].indexOf(opponentChoice)
            ];
          playerLoop = false;
          opponentLoop = false;
          setPlayerFrameIndex(0);
          setOpponentFrameIndex(0);
        } else {
          playerFramesToAnimate = playerFrames[7];
          opponentFramesToAnimate = opponentFrames[7];
          playerLoop = false;
          opponentLoop = false;
          setPlayerFrameIndex(0);
          setOpponentFrameIndex(0);
        }
      } else {
        playerFramesToAnimate = playerFrames[0];
        opponentFramesToAnimate = opponentFrames[0];
      }
    } else if (opponentHP <= 0) {
      if (playerHP === 100) {
        playerFramesToAnimate = playerFrames[8];
        opponentFramesToAnimate = opponentFrames[2];
        playerLoop = false;
        opponentLoop = false;
        setPlayerFrameIndex(0);
        setOpponentFrameIndex(0);
      } else {
        playerFramesToAnimate = playerFrames[1];
        opponentFramesToAnimate = opponentFrames[2];
        playerLoop = false;
        opponentLoop = false;
        setPlayerFrameIndex(0);
        setOpponentFrameIndex(0);
      }
    } else if (playerHP <= 0) {
      if (opponentHP === 100) {
        opponentFramesToAnimate = opponentFrames[8];
        playerFramesToAnimate = playerFrames[2];
        playerLoop = false;
        opponentLoop = false;
        setPlayerFrameIndex(0);
        setOpponentFrameIndex(0);
      } else {
        playerFramesToAnimate = playerFrames[2];
        opponentFramesToAnimate = opponentFrames[1];
        playerLoop = false;
        opponentLoop = false;
        setPlayerFrameIndex(0);
        setOpponentFrameIndex(0);
      }
    }

    const playerAnimation = setInterval(() => {
      setPlayerFrameIndex((prev) =>
        playerLoop
          ? (prev + 1) % playerFramesToAnimate.length
          : Math.min(prev + 1, playerFramesToAnimate.length - 1)
      );
    }, animationInterval);

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
      <div className={style.gameResultString}>
        <ResultString resultString={resultString} />
      </div>
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
        <span className={`${style.playerResultString} text-danger`}>
          <ResultString resultString={playerResultString} />
        </span>
        <Char
          isPlayer
          frames={playerFrames}
          frameIndex={playerFrameIndex}
          moveChoice={selectedSymbol}
          generateSrc={generateSrc}
        />
        <span className={`${style.opponentResultString} text-danger`}>
          <ResultString resultString={opponentResultString} />
        </span>
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
            <span className='mx-3'>beats</span>
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
            <span className='mx-3'>beats</span>
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
            <span className='mx-3'>beats</span>
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
// hadouken
// add chun li and choose character menu
// boost and res logic
// defense choice
// input list when draw
// combo logic (x2 x3) and combo breaker
// spe move logic (win 3 times with your char move)
// (mini?) boss fight gp (play opposit sign quick)
// (boss fight? play opposit input list quick)
// replace modal by how to play mode
// imagine more gameplay (input list based game, if you win you get to max combo)
