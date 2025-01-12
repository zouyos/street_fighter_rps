import style from './style.module.css';
import Character from '../Character/Character';
import { useEffect, useState } from 'react';
import playerStanceFrame1 from '../../assets/chars/player/stance/player_stance_frame_01_300pcts.png';
import playerStanceFrame2 from '../../assets/chars/player/stance/player_stance_frame_02_300pcts.png';
import playerStanceFrame3 from '../../assets/chars/player/stance/player_stance_frame_03_300pcts.png';
import playerStanceFrame4 from '../../assets/chars/player/stance/player_stance_frame_04_300pcts.png';
import playerStanceFrame5 from '../../assets/chars/player/stance/player_stance_frame_05_300pcts.png';
import playerStanceFrame6 from '../../assets/chars/player/stance/player_stance_frame_06_300pcts.png';
import playerStanceFrame7 from '../../assets/chars/player/stance/player_stance_frame_07_300pcts.png';
import playerStanceFrame8 from '../../assets/chars/player/stance/player_stance_frame_08_300pcts.png';
import playerVictoryFrame1 from '../../assets/chars/player/victory/player_victory_frame_01_300pcts.png';
import playerVictoryFrame2 from '../../assets/chars/player/victory/player_victory_frame_02_300pcts.png';
import playerVictoryFrame3 from '../../assets/chars/player/victory/player_victory_frame_03_300pcts.png';
import playerVictoryFrame4 from '../../assets/chars/player/victory/player_victory_frame_04_300pcts.png';
import playerVictoryFrame5 from '../../assets/chars/player/victory/player_victory_frame_05_300pcts.png';
import playerVictoryFrame6 from '../../assets/chars/player/victory/player_victory_frame_06_300pcts.png';
import playerVictoryFrame7 from '../../assets/chars/player/victory/player_victory_frame_07_300pcts.png';
import playerVictoryFrame8 from '../../assets/chars/player/victory/player_victory_frame_08_300pcts.png';
import playerVictoryFrame9 from '../../assets/chars/player/victory/player_victory_frame_09_300pcts.png';
import playerVictoryFrame10 from '../../assets/chars/player/victory/player_victory_frame_10_300pcts.png';
import playerVictoryFrame11 from '../../assets/chars/player/victory/player_victory_frame_11_300pcts.png';
import playerVictoryFrame12 from '../../assets/chars/player/victory/player_victory_frame_12_300pcts.png';
import playerVictoryFrame13 from '../../assets/chars/player/victory/player_victory_frame_13_300pcts.png';
import playerDefeatFrame1 from '../../assets/chars/player/defeat/player_defeat_frame_01_300pcts.png';
import playerDefeatFrame2 from '../../assets/chars/player/defeat/player_defeat_frame_02_300pcts.png';
import playerDefeatFrame3 from '../../assets/chars/player/defeat/player_defeat_frame_03_300pcts.png';
import playerDefeatFrame4 from '../../assets/chars/player/defeat/player_defeat_frame_04_300pcts.png';
import playerDefeatFrame5 from '../../assets/chars/player/defeat/player_defeat_frame_05_300pcts.png';
import playerDefeatFrame6 from '../../assets/chars/player/defeat/player_defeat_frame_06_300pcts.png';
import playerDefeatFrame7 from '../../assets/chars/player/defeat/player_defeat_frame_07_300pcts.png';
import playerDefeatFrame8 from '../../assets/chars/player/defeat/player_defeat_frame_08_300pcts.png';
import opponentStanceFrame1 from '../../assets/chars/opponent/stance/opponent_stance_frame_01_300pcts.png';
import opponentStanceFrame2 from '../../assets/chars/opponent/stance/opponent_stance_frame_02_300pcts.png';
import opponentStanceFrame3 from '../../assets/chars/opponent/stance/opponent_stance_frame_03_300pcts.png';
import opponentStanceFrame4 from '../../assets/chars/opponent/stance/opponent_stance_frame_04_300pcts.png';
import opponentStanceFrame5 from '../../assets/chars/opponent/stance/opponent_stance_frame_05_300pcts.png';
import opponentStanceFrame6 from '../../assets/chars/opponent/stance/opponent_stance_frame_06_300pcts.png';
import opponentStanceFrame7 from '../../assets/chars/opponent/stance/opponent_stance_frame_07_300pcts.png';
import opponentStanceFrame8 from '../../assets/chars/opponent/stance/opponent_stance_frame_08_300pcts.png';
import opponentVictoryFrame1 from '../../assets/chars/opponent/victory/opponent_victory_frame_01_300pcts.png';
import opponentVictoryFrame2 from '../../assets/chars/opponent/victory/opponent_victory_frame_02_300pcts.png';
import opponentVictoryFrame3 from '../../assets/chars/opponent/victory/opponent_victory_frame_03_300pcts.png';
import opponentVictoryFrame4 from '../../assets/chars/opponent/victory/opponent_victory_frame_04_300pcts.png';
import opponentVictoryFrame5 from '../../assets/chars/opponent/victory/opponent_victory_frame_05_300pcts.png';
import opponentVictoryFrame6 from '../../assets/chars/opponent/victory/opponent_victory_frame_06_300pcts.png';
import opponentVictoryFrame7 from '../../assets/chars/opponent/victory/opponent_victory_frame_07_300pcts.png';
import opponentVictoryFrame8 from '../../assets/chars/opponent/victory/opponent_victory_frame_08_300pcts.png';
import opponentDefeatFrame1 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_01_300pcts.png';
import opponentDefeatFrame2 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_02_300pcts.png';
import opponentDefeatFrame3 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_03_300pcts.png';
import opponentDefeatFrame4 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_04_300pcts.png';
import opponentDefeatFrame5 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_05_300pcts.png';
import opponentDefeatFrame6 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_06_300pcts.png';
import opponentDefeatFrame7 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_07_300pcts.png';
import opponentDefeatFrame8 from '../../assets/chars/opponent/defeat/opponent_defeat_frame_08_300pcts.png';

type FightingAreaProps = {
  game: boolean;
  playerHP: number;
  opponentHP: number;
};

export default function FightingArea({
  game,
  playerHP,
  opponentHP,
}: FightingAreaProps) {
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
    <div className={style.charactersContainer}>
      <Character
        isPlayer={true}
        game={game}
        playerHP={playerHP}
        playerFrames={playerFrames}
        playerFrameIndex={playerFrameIndex}
      />
      <Character
        isPlayer={false}
        game={game}
        opponentHP={opponentHP}
        opponentFrames={opponentFrames}
        opponentFrameIndex={opponentFrameIndex}
      />
    </div>
  );
}
