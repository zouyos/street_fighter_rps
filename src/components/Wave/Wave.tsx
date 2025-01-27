import style from './style.module.css';

type WaveProps = {
  frames: string[][];
  frameIndex: number;
  charIndex: number;
  moveChoice?: string;
  isPlayer?: boolean | undefined;
  generateWaveSrc: (
    frames: string[][],
    index: number,
    charIndex: number,
    moveChoice?: string,
    isPlayer?: boolean
  ) => string | undefined;
};

export default function Wave({
  isPlayer,
  frames,
  frameIndex,
  charIndex,
  moveChoice,
  generateWaveSrc,
}: WaveProps) {
  function generateClassName() {
    if (isPlayer) {
      return style.playerWave;
    } else {
      return style.opponentWave;
    }
  }

  return (
    <div className={generateClassName()}>
      <img
        src={generateWaveSrc(
          frames,
          frameIndex,
          charIndex,
          moveChoice,
          isPlayer
        )}
        alt={isPlayer ? 'Player Wave Animation' : 'Opponent Wave Animation'}
      />
    </div>
  );
}
