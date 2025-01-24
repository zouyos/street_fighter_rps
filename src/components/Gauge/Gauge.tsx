import style from './style.module.css';

type GaugeProps = {
  isPlayer: boolean;
  label: string;
  percent: number;
  playerWins?: number;
  opponentWins?: number;
};

function generateWins(
  isPlayer: boolean,
  playerWins?: number,
  opponentWins?: number
): number {
  if (isPlayer && playerWins) {
    return playerWins / 2;
  } else if (!isPlayer && opponentWins) {
    return opponentWins / 2;
  } else {
    return 0;
  }
}

export default function Gauge({
  isPlayer,
  label,
  percent,
  playerWins,
  opponentWins,
}: GaugeProps) {
  return (
    <div className={style.container}>
      <h4 className={`${!isPlayer ? 'text-end' : ''}`}>{label} HP</h4>
      <div className={`border border-3 border-warning ${style.gauge}`}>
        <span className={`bg-danger`} style={{ width: `${percent}%` }}></span>
        <span></span>
      </div>
      <h5 className={`${!isPlayer ? 'text-end' : ''}`}>
        {`WINS: ${
          isPlayer
            ? generateWins(isPlayer, playerWins)
            : generateWins(isPlayer, undefined, opponentWins)
        }`}
      </h5>
    </div>
  );
}
