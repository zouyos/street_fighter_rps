import style from './style.module.css';

type GaugeProps = {
  isPlayer?: boolean;
  label: string;
  percent: number;
};

export default function Gauge({ isPlayer, label, percent }: GaugeProps) {
  return (
    <div className={style.container}>
      <h3 className={`${!isPlayer ? 'text-end' : ''}`}>{label} HP</h3>
      <div className={`border border-3 border-warning ${style.gauge}`}>
        <span className={`bg-danger`} style={{ width: `${percent}%` }}></span>
        <span></span>
      </div>
    </div>
  );
}
