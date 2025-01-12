import style from './style.module.css';

type CharsProps = {
  isPlayer: boolean;
  playerHP?: number;
  playerFrames?: string[][];
  playerFrameIndex?: number;
  opponentHP?: number;
  opponentFrames?: string[][];
  opponentFrameIndex?: number;
  generatePlayerSrc?: (frames: string[][], index: number) => string;
  generateOpponentSrc?: (frames: string[][], index: number) => string;
};

export default function Chars({
  playerHP,
  playerFrames,
  playerFrameIndex,
  opponentHP,
  opponentFrames,
  opponentFrameIndex,
  generatePlayerSrc,
  generateOpponentSrc,
}: CharsProps) {
  return (
    <>
      <div
        className={
          playerHP && playerHP >= 0 ? style.player : style.defeatedPlayer
        }
      >
        <img
          src={
            generatePlayerSrc && playerFrames && playerFrameIndex
              ? generatePlayerSrc(playerFrames, playerFrameIndex)
              : ''
          }
          alt='Player Animation'
        />
      </div>
      <div
        className={
          opponentHP && opponentHP >= 0
            ? style.opponent
            : style.defeatedOpponent
        }
      >
        <img
          src={
            generateOpponentSrc && opponentFrames && opponentFrameIndex
              ? generateOpponentSrc(opponentFrames, opponentFrameIndex)
              : ''
          }
          alt='Opponent Animation'
        />
      </div>
    </>
  );
}
