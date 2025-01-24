import style from './style.module.css';

type CharProps = {
  isPlayer: boolean;
  playerFrames: string[][];
  playerFrameIndex: number;
  opponentFrames: string[][];
  opponentFrameIndex: number;
  selectedSymbol?: string;
  opponentChoice?: string;
  generatePlayerSrc?: (
    frames: string[][],
    index: number,
    selectedSymbol?: string
  ) => string;
  generateOpponentSrc?: (
    frames: string[][],
    index: number,
    opponentChoice?: string
  ) => string;
};

export default function Char({
  isPlayer,
  playerFrames,
  playerFrameIndex,
  opponentFrames,
  opponentFrameIndex,
  selectedSymbol,
  opponentChoice,
  generatePlayerSrc,
  generateOpponentSrc,
}: CharProps) {
  const frames = isPlayer ? playerFrames : opponentFrames;
  const frameIndex = isPlayer ? playerFrameIndex : opponentFrameIndex;

  function generateClassName() {
    if (isPlayer) {
      return style.player;
    } else {
      return style.opponent;
    }
  }

  return (
    <div className={generateClassName()}>
      <img
        src={
          isPlayer
            ? generatePlayerSrc && selectedSymbol
              ? generatePlayerSrc(frames, frameIndex, selectedSymbol)
              : generatePlayerSrc && generatePlayerSrc(frames, frameIndex)
            : generateOpponentSrc && opponentChoice
            ? generateOpponentSrc(frames, frameIndex, opponentChoice)
            : generateOpponentSrc && generateOpponentSrc(frames, frameIndex)
        }
        alt={isPlayer ? 'Player Animation' : 'Opponent Animation'}
      />
    </div>
  );
}
