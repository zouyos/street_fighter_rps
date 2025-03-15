import style from './style.module.css';

type CharProps = {
  isPlayer: boolean;
  frames: string[][];
  frameIndex: number;
  moveChoice?: string;
  zIndex: number;
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
  zIndex,
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
    <div className={generateClassName()} style={{ zIndex: zIndex }}>
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
