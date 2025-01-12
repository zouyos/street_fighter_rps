import style from './style.module.css';

type CharacterProps = {
  isPlayer: boolean;
  game: boolean;
  playerHP?: number;
  playerFrames?: string[][];
  playerFrameIndex?: number;
  opponentHP?: number;
  opponentFrames?: string[][];
  opponentFrameIndex?: number;
};

export default function Character({
  isPlayer,
  game,
  playerHP,
  playerFrames,
  playerFrameIndex,
  opponentHP,
  opponentFrames,
  opponentFrameIndex,
}: CharacterProps) {
  const generatePlayerSrc = (frames: string[][], index: number | undefined) => {
    if (typeof index === 'undefined') return '';
    if (game) {
      return frames[0][index];
    } else if (opponentHP && opponentHP <= 0) {
      return frames[1][index];
    } else {
      return frames[2][index];
    }
  };

  const generateOpponentSrc = (
    frames: string[][],
    index: number | undefined
  ) => {
    if (typeof index === 'undefined') return '';
    if (game) {
      return frames[0][index];
    } else if (playerHP && playerHP <= 0) {
      return frames[1][index];
    } else {
      return frames[2][index];
    }
  };

  return isPlayer ? (
    <div
      className={
        playerHP && playerHP >= 0 ? style.player : style.defeatedPlayer
      }
    >
      <img
        src={playerFrames && generatePlayerSrc(playerFrames, playerFrameIndex)}
        alt='Player Animation'
      />
    </div>
  ) : (
    <div
      className={
        opponentHP && opponentHP >= 0 ? style.opponent : style.defeatedOpponent
      }
    >
      <img
        src={
          opponentFrames &&
          generateOpponentSrc(opponentFrames, opponentFrameIndex)
        }
        alt='Opponent Animation'
      />
    </div>
  );
}
