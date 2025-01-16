import style from './style.module.css';

type CharProps = {
  game: boolean;
  isPlayer: boolean;
  playerHP?: number;
  playerFrames: string[][];
  playerFrameIndex: number;
  opponentHP?: number;
  opponentFrames: string[][];
  opponentFrameIndex: number;
  generatePlayerSrc: (frames: string[][], index: number) => string;
  generateOpponentSrc: (frames: string[][], index: number) => string;
};

export default function Char({
  game,
  isPlayer,
  playerHP,
  playerFrames,
  playerFrameIndex,
  opponentHP,
  opponentFrames,
  opponentFrameIndex,
  generatePlayerSrc,
  generateOpponentSrc,
}: CharProps) {
  const frames = isPlayer ? playerFrames : opponentFrames;
  const frameIndex = isPlayer ? playerFrameIndex : opponentFrameIndex;
  const hp = isPlayer ? playerHP : opponentHP;
  const victoriousPlayer = isPlayer && hp !== undefined && hp > 0;
  const generateSrc = isPlayer ? generatePlayerSrc : generateOpponentSrc;

  function generateClassName(
    game: boolean,
    isPlayer: boolean,
    victoriousPlayer: boolean
  ) {
    if (game && isPlayer) {
      return style.player;
    } else if (game) {
      return style.opponent;
    }
    if (victoriousPlayer) {
      return style.player;
    } else {
      return style.opponent;
    }
  }

  return (
    <div className={generateClassName(game, isPlayer, victoriousPlayer)}>
      <img
        src={generateSrc(frames, frameIndex)}
        alt={isPlayer ? 'Player Animation' : 'Opponent Animation'}
      />
    </div>
  );
}
