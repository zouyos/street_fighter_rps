import style from './style.module.css';

type GaugeProps = {
  isPlayer?: boolean;
  label: string;
  percent: number;
  round?: number;
  playerWins: number;
  game?: boolean;
};

export default function Gauge({
  isPlayer,
  label,
  percent,
  round,
  playerWins,
  game,
}: GaugeProps) {
  return (
    <div className={style.container}>
      <h4 className={`${!isPlayer ? 'text-end' : ''}`}>{label} HP</h4>
      <div className={`border border-3 border-warning ${style.gauge}`}>
        <span className={`bg-danger`} style={{ width: `${percent}%` }}></span>
        <span></span>
      </div>
      <h5 className={`${!isPlayer ? 'text-end' : ''}`}>
        {isPlayer
          ? `WINS: ${playerWins}`
          : `WINS: ${
              game
                ? round && round - 1 - playerWins
                : round && round - playerWins
            }`}
      </h5>
    </div>
  );
}
