import style from './style.module.css';

type CharProps = {
  isPlayer: boolean;
  frames: string[][];
  frameIndex: number;
  moveChoice?: string;
  generateSrc: (
    frames: string[][],
    index: number,
    moveChoice?: string,
    isPlayer?: boolean
  ) => string;
};

export default function Char({
  isPlayer,
  frames,
  frameIndex,
  moveChoice,
  generateSrc,
}: CharProps) {
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
          moveChoice
            ? generateSrc(frames, frameIndex, moveChoice, isPlayer)
            : generateSrc(frames, frameIndex, undefined, isPlayer)
        }
        alt={isPlayer ? 'Player Animation' : 'Opponent Animation'}
      />
    </div>
  );
}
