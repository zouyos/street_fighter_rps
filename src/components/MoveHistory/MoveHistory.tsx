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
      <p className={style.historyLabel}>HISTORY:</p>
      <div className={`${style.playerHistoryLabel} mb-3`}>
        PLAYER:
        <span className={style.playerIconContainer}>
          {playerHistory
            .slice(-4)
            .reverse()
            .map((item, index) => (
              <span key={index} className='icon-inline mx-1'>
                {item}
              </span>
            ))}
        </span>
      </div>
      <div className={`${style.opponentHistoryLabel} mb-2`}>
        OPPONENT:
        <span className={`${style.opponentIconContainer}`}>
          {opponentHistory
            .slice(-4)
            .reverse()
            .map((item, index) => (
              <span key={index} className='icon-inline mx-1'>
                {item}
              </span>
            ))}
        </span>
      </div>
    </div>
  );
}
