import style from './style.module.css';

type MoveHistoryProps = {
  playerHistory: (JSX.Element | string)[];
  opponentHistory: (JSX.Element | string)[];
};

export default function MoveHistory({
  playerHistory,
  opponentHistory,
}: MoveHistoryProps) {
  return (
    <div className={style.history}>
      <p className={style.historyLabel}>History</p>
      <div className={style.iconContainer}>
        <span className={style.playerHistoryLabel}>Player:</span>
        {playerHistory
          .slice(-3)
          .reverse()
          .map((item, index) => (
            <span key={index} className='icon-inline'>
              {item}{' '}
            </span>
          ))}
      </div>
      <div className={style.iconContainer}>
        <span className='me-2'>Opponent:</span>
        {opponentHistory
          .slice(-3)
          .reverse()
          .map((item, index) => (
            <span key={index} className='icon-inline'>
              {item}{' '}
            </span>
          ))}
      </div>
    </div>
  );
}
