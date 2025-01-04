import style from './style.module.css';

type GaugeProps = {
  label: string;
  percent: number;
};

export default function Gauge({ label, percent }: GaugeProps) {
  return (
    <div className='p-3'>
      <h4>{label} HP</h4>
      <div
        className={`border border-2 border-dark ${style.flexCenter}`}
        style={{ height: '1.5rem' }}
      >
        <span className={`bg-danger`} style={{ width: `${percent}%` }}></span>
        <span></span>
      </div>
    </div>
  );
}
