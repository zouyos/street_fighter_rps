import style from './style.module.css';

type GaugeProps = {
  label: string;
  percent: number;
};

export default function Gauge({ label, percent }: GaugeProps) {
  return (
    <div className={style.gauge}>
      <h4>{label} HP</h4>
      <div
        className={`border border-3 border-warning ${style.flexCenter}`}
        style={{ height: '1.5rem' }}
      >
        <span className={`bg-danger`} style={{ width: `${percent}%` }}></span>
        <span></span>
      </div>
    </div>
  );
}
